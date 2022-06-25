showMore_btn.addEventListener("click", () => {
  location.hash = "trends";
});
header_arrow.addEventListener("click", () => {
  location.hash = "home";
});
searchbtn.addEventListener("click", () => {
  location.hash = "search=";
});

window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);
function navigation() {
  console.log({ location });

  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    moviePage();
  } else if (location.hash.startsWith("#category=")) {
    categoryPage();
  } else {
    homePage();
  }
}

function trendsPage() {
  goTop();

  console.log("trendss");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
  header_tittle_container.classList.add("inactive");
  header_category_container.classList.remove("inactive");
  header_searchbar_container.classList.add("inactive");
}

function searchPage() {
  goTop();

  header_category_container.classList.add("inactive");
  genericListContainer.classList.add("inactive");

  console.log("searchh");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
}

function moviePage() {
  goTop();

  header_category_container.classList.add("inactive");
  genericListContainer.classList.add("inactive");
  genericListContainer.classList.add("inactive");

  console.log("movieee");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  header_tittle_container.classList.add("inactive");
  header_searchbar_container.classList.add("inactive");

  movieDetailContainer.classList.remove("inactive");
  movie_background.classList.remove("inactive");
  body.classList.add("background-black");

  footer.style.backgroundColor = "rgb(40 37 42)";
  square_category.classList.add("noHover");
  categories.style.cursor = "initial";
  movieDetail_img.classList.add("movie-img--shadow");
}

function categoryPage() {
  goTop();
  console.log("categoriess");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
  header_tittle_container.classList.add("inactive");
  header_category_container.classList.remove("inactive");
  header_searchbar_container.classList.add("inactive");

  const [_, categoryData] = location.hash.split("=");
  const [categoryID, categoryName] = categoryData.split("-");

  //* Another solutions that came to my mind
  // const getTittleWithSpaces = categoryName.split("%20");
  // const categoryNameWithSpaces = getTittleWithSpaces.join(" ");

  // const categoryNameWithSpaces = categoryName.replace('$20'," ")
  categoryNameWithSpaces = decodeURI(categoryName);
  getMoviesByCategory(categoryID);
  header_tittle__category.innerHTML = categoryNameWithSpaces;
}

function homePage() {
  goTop();

  header_arrow.classList.add("inactive");
  trendingPreviewMoviesContainer.classList.remove("inactive");
  main_category_container.classList.remove("inactive");
  genericListContainer.classList.add("inactive");
  header_tittle_container.classList.remove("inactive");
  header_category_container.classList.add("inactive");
  header_searchbar_container.classList.remove("inactive");

  console.log("homee");
  getCategoriesgPreview();
  getTrendingMoviesPreview();
}
