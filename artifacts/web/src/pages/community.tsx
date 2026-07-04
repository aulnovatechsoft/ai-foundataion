import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { 
  useListFeed,
  getListFeedQueryKey,
  useCreatePost,
  useLikePost,
  useUnlikePost,
  useDeletePost,
  FeedPost,
  getGetMeQueryKey
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, MessageSquare, Send, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <CommunityContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function CommunityContent() {
  const { data: posts, isLoading } = useListFeed({ query: { queryKey: getListFeedQueryKey() } });

  return (
    <div className="max-w-2xl mx-auto animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold mb-2 flex items-center gap-3">
          <Users className="w-8 h-8 text-[hsl(var(--accent-2))]" />
          Community
        </h1>
        <p className="text-[hsl(var(--text-muted))] text-lg">
          Share your wins, insights, and connect with other learners.
        </p>
      </div>

      <PostComposer />

      {isLoading ? (
        <div className="space-y-6 mt-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full bg-[hsl(var(--surface-2))]" />
          ))}
        </div>
      ) : !posts || posts.length === 0 ? (
        <div className="os-card p-12 text-center flex flex-col items-center mt-8">
          <MessageSquare className="w-16 h-16 text-[hsl(var(--text-muted))] mb-4 opacity-50" />
          <h3 className="text-xl font-heading font-semibold mb-2">Be the first to share</h3>
          <p className="text-[hsl(var(--text-muted))] max-w-md mx-auto">
            The community is waiting to hear about your progress. Share a win or an insight from today's lesson.
          </p>
        </div>
      ) : (
        <div className="space-y-6 mt-8">
          <AnimatePresence mode="popLayout">
            {posts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function PostComposer() {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const createPost = useCreatePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || content.length > 1000) return;

    createPost.mutate({ data: { content, kind: "win" } }, {
      onSuccess: () => {
        setContent("");
        queryClient.invalidateQueries({ queryKey: getListFeedQueryKey() });
        queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() }); // incase xp awarded, etc, but standard invalidate
      }
    });
  };

  return (
    <div className="os-card p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share a win or insight with the community..."
          className="w-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl p-4 text-[hsl(var(--text))] min-h-[100px] focus:outline-none focus:border-[hsl(var(--accent-2))] transition-colors resize-none mb-3"
          maxLength={1000}
        />
        <div className="flex justify-between items-center">
          <span className="text-xs text-[hsl(var(--text-muted))]">
            {content.length}/1000
          </span>
          <Button 
            type="submit" 
            disabled={!content.trim() || createPost.isPending}
            className="bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] text-white"
          >
            <Send className="w-4 h-4 mr-2" /> Share Win
          </Button>
        </div>
      </form>
    </div>
  );
}

function FeedPostCard({ post }: { post: FeedPost }) {
  const queryClient = useQueryClient();
  const likePost = useLikePost();
  const unlikePost = useUnlikePost();
  const deletePost = useDeletePost();

  const handleLike = () => {
    if (post.likedByMe) {
      unlikePost.mutate({ id: post.id }, {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: getListFeedQueryKey() })
      });
    } else {
      likePost.mutate({ id: post.id }, {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: getListFeedQueryKey() })
      });
    }
  };

  const handleDelete = () => {
    deletePost.mutate({ id: post.id }, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: getListFeedQueryKey() })
    });
  };

  const authorContent = (
    <>
      <Avatar className="w-10 h-10 border border-[hsl(var(--border))]">
        <AvatarImage src={post.author.avatarUrl || undefined} />
        <AvatarFallback>{post.author.displayName?.substring(0,2).toUpperCase() || "AN"}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold text-[hsl(var(--text))]">
          {post.author.displayName || "Anonymous Learner"}
          <span className="ml-2 text-xs font-normal text-[hsl(var(--text-muted))] bg-[hsl(var(--surface-2))] px-2 py-0.5 rounded-full border border-[hsl(var(--border))]">
            Lvl {post.author.level}
          </span>
        </div>
        <div className="text-xs text-[hsl(var(--text-muted))] mt-0.5">
          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="os-card p-5"
    >
      <div className="flex justify-between items-start mb-4">
        {post.author.isPublicProfile ? (
          <Link href={`/profile/${post.author.userId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {authorContent}
          </Link>
        ) : (
          <div className="flex items-center gap-3">{authorContent}</div>
        )}

        {post.isMine && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-[hsl(var(--text-muted))] hover:text-red-500 hover:bg-red-500/10"
            onClick={handleDelete}
            disabled={deletePost.isPending}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="mb-4">
        {post.kind === "reflection" && post.day && (
          <div className="inline-block bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] border border-[hsl(var(--accent))/0.2] px-2 py-0.5 rounded text-xs font-semibold mb-3 uppercase tracking-wide">
            Day {post.day} Reflection
          </div>
        )}
        <p className="text-[hsl(var(--text))] whitespace-pre-wrap">{post.content}</p>
      </div>

      <div className="flex items-center gap-4 border-t border-[hsl(var(--border))] pt-3 mt-4">
        <button 
          onClick={handleLike}
          disabled={likePost.isPending || unlikePost.isPending}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
            post.likedByMe 
              ? 'text-red-500 bg-red-500/10' 
              : 'text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))]'
          }`}
        >
          <Heart className={`w-4 h-4 ${post.likedByMe ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">{post.likeCount}</span>
        </button>
      </div>
    </motion.div>
  );
}
