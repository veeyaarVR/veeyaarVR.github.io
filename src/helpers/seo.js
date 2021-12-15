export function seo(data = {}) {
  data.title =
    data.title || "Vignesh Marimuthu | Portfolio, Book Notes & Stuffs";
  data.metaDescription =
    data.metaDescription || "personal Portfolio website of an Average Engineer";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
}
