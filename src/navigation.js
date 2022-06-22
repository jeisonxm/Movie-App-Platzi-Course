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
  console.log("trendss");
  console.log("categoriess");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
  header_tittle_container.classList.add("inactive");
  header_category_container.classList.remove("inactive");
  header_searchbar_container.classList.add("inactive");
}

function searchPage() {
  console.log("searchh");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
}

function moviePage() {
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
  console.log("categoriess");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
  header_tittle_container.classList.add("inactive");
  header_category_container.classList.remove("inactive");
  header_searchbar_container.classList.add("inactive");
}

function homePage() {
  console.log("homee");
  getCategoriesgPreview();
  getTrendingMoviesPreview();
}
