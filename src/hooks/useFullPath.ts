import { config } from "@/config";

export function getFullFilePath(sourceUrl: string) {
  if (typeof sourceUrl === "string") {
    const url = sourceUrl || "";
    if (url.startsWith("http")) {
      return sourceUrl;
    }
    if (url.startsWith("//")) {
      return sourceUrl;
    } else if (url.startsWith("/")) {
      return config.baseUrl + sourceUrl;
    } else {
      return sourceUrl;
    }
  } else {
    return "";
  }

}
