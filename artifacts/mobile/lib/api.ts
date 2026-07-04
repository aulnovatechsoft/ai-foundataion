/**
 * Base URL for direct (non-generated-client) requests such as the Nova SSE
 * stream. The generated React Query client is configured separately via
 * `setBaseUrl` in the root layout.
 */
export function getApiBase(): string {
  const domain = process.env.EXPO_PUBLIC_DOMAIN;
  return domain ? `https://${domain}` : "";
}
