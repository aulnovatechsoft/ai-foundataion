import type { User } from "@workspace/db";

export interface PublicIdentity {
  displayName: string | null;
  avatarUrl: string | null;
  isPublicProfile: boolean;
}

/**
 * Returns the identity fields that are safe to show to other users,
 * masking name/avatar (and profile linking) when anonymous mode is on.
 */
export function publicIdentity(
  user: Pick<
    User,
    "displayName" | "avatarUrl" | "anonymousMode" | "isPublicProfile"
  >,
): PublicIdentity {
  if (user.anonymousMode) {
    return {
      displayName: "Anonymous Learner",
      avatarUrl: null,
      isPublicProfile: false,
    };
  }
  return {
    displayName: user.displayName,
    avatarUrl: user.avatarUrl,
    isPublicProfile: user.isPublicProfile,
  };
}
