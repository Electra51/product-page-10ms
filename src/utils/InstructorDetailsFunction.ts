export default function stripHtmlTagsforInstructor(htmlString: string): string {
  if (!htmlString) return "";
  return htmlString
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>?/gm, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}
