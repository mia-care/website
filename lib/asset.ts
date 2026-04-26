const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!path || path.startsWith("http")) return path;
  return `${BASE}${path}`;
}
