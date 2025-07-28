export default function stripHtmlTags(htmlString: string): string {
  if (!htmlString) return "";
  return htmlString.replace(/<[^>]*>?/gm, "");
}
