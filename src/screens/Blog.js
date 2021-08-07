let categoryList = [
  "Politics",
  "Fascism",
  "Life",
  "Fiction",
  "Fantasy",
  "Non-Fiction",
  "Poem",
  "Business",
  "Self-help",
  "Love",
  "Philosophy",
  "Religion",
  "Mystery",
  "Crime",
];

let booksList = ["Paulo Coelho", "Harry Potter", "Ikigai","Paulo Coelho", "Harry Potter", "Ikigai"];

export default function Blog() {
  return (
    <div className="blog superPadding">
      <HeaderSection />
      <CategoriesSection />
      <div className="space"></div>
      <div className="space"></div>
      <BooksSection />    
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="superTitleGreen">Book Notes</div>
      <div className="subHeadingFiraWhite">
        You can find my Book Notes and Summary of my very favourite books here.
        Please note, that these are not a review of the book, but simply my
        observations of how I percieved the book.
      </div>
      <div className="space"></div>
      <div className="space"></div>
    </div>
  );
}

function CategoriesSection() {
  return (
    <div className="likesContainer">
      {categoryList.map((item, index) => {
        let url = "https://www.google.com/search?q=" + item;
        return (
          <a href={url} class="interests buttonText">
            {item}
          </a>
        );
      })}
    </div>
  );
}

function BooksSection() {
  return (
    <div className="books">
      {booksList.map((item, index) => {
        let url = "https://www.google.com/search?q=" + item;
        return (
            <div className="book">
              <div className="book__image"></div>
              <div className="book__content ">
                <div className="book__title titleEpilogueGreen">
                  Show your work!
                </div>
                <div className="book__description smallHeadingEpilogueWhite">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.{" "}
                </div>

              </div>
              <div className="book__date smallHeadingEpilogueGreen">
                  Feb,2021
                </div>
              <div className="book__categories"></div>
            </div>
        );
      })}
    </div>
  );
}
