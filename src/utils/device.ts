export function getAdaptiveDPR(max = 2): number {
  return Math.min(window.devicePixelRatio || 1, max);
}

export function isDesktopView(breakpoint = 1024): boolean {
  return window.innerWidth > breakpoint;
}
