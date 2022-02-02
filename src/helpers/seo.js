export function seo({ title, metaDescription }) {
  var newTitle = title || "Vignesh Marimuthu | Portfolio, Book Notes & Stuffs";
  var newDesc =
    metaDescription || "personal Portfolio website of an Average Engineer";
  document.title = newTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", newDesc);
  document
    .querySelector('meta[name="title"]')
    .setAttribute("content", newTitle);

  //og tags
  document
    .querySelector('meta[property="og:type"]')
    .setAttribute("content", "website");
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", newTitle);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", newDesc);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute(
      "content",
      "https://beingaverageengineer.com/images/founder1.jpg"
    );

  //twitter tags
  document
    .querySelector('meta[property="twitter:card"]')
    .setAttribute("content", "summary_large_image");
  document
    .querySelector('meta[property="twitter:title"]')
    .setAttribute("content", newTitle);
  document
    .querySelector('meta[property="twitter:description"]')
    .setAttribute("content", newDesc);
  document
    .querySelector('meta[property="twitter:image"]')
    .setAttribute(
      "content",
      "https://beingaverageengineer.com/images/founder1.jpg"
    );
}
