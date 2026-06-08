export function waitForFonts(): Promise<void> {
  if ("fonts" in document) {
    return document.fonts.ready.then(() => undefined);
  }
  return Promise.resolve();
}
