// Browser theme metadata needs a resolved color rather than a CSS variable.
const themeColor = document.querySelector('meta[name="theme-color"]');
if (themeColor) {
  themeColor.content = getComputedStyle(document.documentElement)
    .getPropertyValue('--paper').trim();
}
