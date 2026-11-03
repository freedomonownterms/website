// Escape a prompt for HTML and highlight its [fill-in] parts.
export function highlight(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
}
