import {
  useListFeed,
  getListFeedQueryKey,
  useCreatePost,
  useDeletePost,
  useLikePost,
  useUnlikePost,
} from "@workspace/api-client-react";
import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, View, Pressable, TextInput } from "react-native";
import Animated, { FadeIn, Layout } from "react-native-reanimated";
import { useRouter } from "expo-router";

import {
  AppText,
  GlassCard,
  Icon,
  Screen,
  uiStyles,
  EmptyState,
  GradientButton,
  IconButton,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { useQueryClient } from "@tanstack/react-query";
import { formatRelativeTime } from "@/lib/time";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";

export default function CommunityScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();
  const { data: posts, isLoading, refetch, isRefetching } = useListFeed({
    query: { queryKey: getListFeedQueryKey() },
  });

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  if (isLoading && !posts) {
    return (
      <Screen>
        <AppText>Loading...</AppText>
      </Screen>
    );
  }

  return (
    <Screen padded={false}>
      <View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 }}>
        <AppText variant="display">Community</AppText>
        <AppText variant="muted" style={{ marginTop: 4 }}>
          Wins and reflections from other learners.
        </AppText>
      </View>

      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120, gap: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={onRefresh}
            tintColor={c.accent}
          />
        }
        ListHeaderComponent={<Composer />}
        ListEmptyComponent={
          !isLoading ? (
            <EmptyState
              icon="users"
              title="No posts yet"
              subtitle="Share your first win!"
            />
          ) : null
        }
      />
    </Screen>
  );
}

function Composer() {
  const c = useColors();
  const qc = useQueryClient();
  const [content, setContent] = useState("");
  const createPost = useCreatePost({
    mutation: {
      onSuccess: () => {
        setContent("");
        qc.invalidateQueries({ queryKey: getListFeedQueryKey() });
      },
    },
  });

  return (
    <GlassCard style={{ marginBottom: 16 }}>
      <TextInput
        placeholder="Share a win..."
        placeholderTextColor={c.textMuted}
        value={content}
        onChangeText={setContent}
        multiline
        style={{
          color: c.text,
          fontSize: 15,
          minHeight: 60,
          textAlignVertical: "top",
        }}
      />
      <View style={[uiStyles.rowBetween, { marginTop: 12 }]}>
        <View />
        <GradientButton
          label="Post"
          disabled={!content.trim() || createPost.isPending}
          loading={createPost.isPending}
          onPress={() => createPost.mutate({ data: { content: content.trim(), kind: "win" } })}
          style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 }}
        />
      </View>
    </GlassCard>
  );
}

function PostCard({ post }: { post: any }) {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();

  const like = useLikePost({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getListFeedQueryKey() });
      },
    },
  });

  const unlike = useUnlikePost({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getListFeedQueryKey() });
      },
    },
  });

  const del = useDeletePost({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getListFeedQueryKey() });
      },
    },
  });

  const initials = (post.author.displayName ?? "A").slice(0, 1).toUpperCase();

  const toggleLike = () => {
    if (post.likedByMe) {
      unlike.mutate({ id: post.id });
    } else {
      like.mutate({ id: post.id });
    }
  };

  return (
    <Animated.View layout={Layout.springify()} entering={FadeIn}>
      <GlassCard padded={false} style={{ padding: 16, gap: 12 }}>
        <View style={uiStyles.rowBetween}>
          <Pressable
            style={[uiStyles.row, { gap: 10 }]}
            onPress={() => {
              if (post.author.isPublicProfile && !post.isMine) {
                router.push({ pathname: "/(app)/user/[id]", params: { id: String(post.author.userId) } });
              }
            }}
          >
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: c.a("accent", 0.15),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText variant="subheading" color={c.accent}>
                {initials}
              </AppText>
            </View>
            <View>
              <View style={[uiStyles.row, { gap: 6 }]}>
                <AppText variant="bodySemibold">
                  {post.author.displayName ?? "Anonymous"}
                </AppText>
                {post.day && (
                  <View style={{ backgroundColor: c.a("accent2", 0.15), paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                    <AppText variant="label" color={c.accent2}>Day {post.day}</AppText>
                  </View>
                )}
              </View>
              <AppText variant="caption" muted>
                {formatRelativeTime(new Date(post.createdAt))}
              </AppText>
            </View>
          </Pressable>

          {post.isMine && (
            <IconButton
              name="trash"
              size={32}
              iconSize={16}
              bg="transparent"
              color={c.textMuted}
              onPress={() => del.mutate({ id: post.id })}
            />
          )}
        </View>

        <AppText variant="body" style={{ lineHeight: 22 }}>
          {post.content}
        </AppText>

        <View style={[uiStyles.row, { gap: 16, marginTop: 4 }]}>
          <Pressable
            onPress={toggleLike}
            style={[uiStyles.row, { gap: 6, padding: 4, opacity: like.isPending || unlike.isPending ? 0.5 : 1 }]}
          >
            <Icon
              name="heart"
              size={18}
              color={post.likedByMe ? "#ef4444" : c.textMuted}
            />
            <AppText variant="caption" color={post.likedByMe ? "#ef4444" : c.textMuted}>
              {post.likeCount}
            </AppText>
          </Pressable>
        </View>
      </GlassCard>
    </Animated.View>
  );
}
