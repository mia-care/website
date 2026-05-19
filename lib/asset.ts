import { BASE_PATH } from "./utils";

export function assetPath(path: string): string {
  if (!path || path.startsWith("http")) return path;
  return `${BASE_PATH}${path}`;
}
