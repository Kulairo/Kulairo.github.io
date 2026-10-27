/** A production origin must be supplied, never guessed from a person's name. */
export function getSiteUrl(): string | undefined {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an http(s) origin without credentials, path, query or hash.",
    );
  }
  return url.origin;
}
