export default function isMobile(): boolean {
  return window.matchMedia('(max-width: 1023px)').matches;
}
