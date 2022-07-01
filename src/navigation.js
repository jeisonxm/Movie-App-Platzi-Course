showMore_btn.addEventListener("click", () => {
  location.hash = "trends";
});
homeIcon.addEventListener("click", () => {
  location.hash = "home";
});
backIcon.addEventListener("click", () => {
  history.back();
});
header_searchbar_container.addEventListener("submit", () => {
  location.hash = `search=${searchbar.value.trim()}`;
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
  console.log("trendss");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");
  header_tittle_container.classList.add("inactive");
  header_category_container.classList.remove("inactive");
  header_searchbar_container.classList.add("inactive");

  movieDetailContainer.classList.add("inactive");
  movie_background.classList.add("inactive");
  body.classList.remove("background-black");
  footer.style.backgroundColor = "var(--main-purple)";
  header_arrow.classList.remove("header-arrow--white");
  header_category_container.style.background = `linear-gradient(0deg, rgba(255,255,255,1) 0%, var( --text-color ) 100%)`;
  getTrendingMovies();
  goTop();
}

function searchPage() {
  header_category_container.classList.add("inactive");
  genericListContainer.classList.add("inactive");
  header_tittle_container.classList.remove("inactive");
  header_searchbar_container.classList.remove("inactive");
  console.log("searchh");
  header_arrow.classList.remove("inactive");
  trendingPreviewMoviesContainer.classList.add("inactive");
  main_category_container.classList.add("inactive");
  genericListContainer.classList.remove("inactive");

  const [_, name] = location.hash.split("=");
  const query = name.replace("%20", "-");
  searchMovie(query);

  movieDetailContainer.classList.add("inactive");
  movie_background.classList.add("inactive");
  body.classList.remove("background-black");
  footer.style.backgroundColor = "var(--main-purple)";
  header_arrow.classList.remove("header-arrow--white");
  goTop();
}

function moviePage() {
  header_category_container.classList.add("inactive");
  genericListContainer.classList.add("inactive");
  genericListContainer.classList.add("inactive");

  console.log("movieee");
  header_arrow.classList.remove("inactive");
  header_arrow.classList.add("header-arrow--white");

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

  const [_, movieId] = location.hash.split("=");
  getMovieById(movieId);

  goTop();
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

  movieDetailContainer.classList.add("inactive");
  movie_background.classList.add("inactive");
  body.classList.remove("background-black");
  footer.style.backgroundColor = "var(--main-purple)";
  header_arrow.classList.remove("header-arrow--white");

  const [_, categoryData] = location.hash.split("=");
  const [categoryID, categoryName] = categoryData.split("-");
  console.log(categoryID);
  //* Another solutions that came to my mind
  // const getTittleWithSpaces = categoryName.split("%20");
  // const categoryNameWithSpaces = getTittleWithSpaces.join(" ");

  // const categoryNameWithSpaces = categoryName.replace('$20'," ")
  categoryNameWithSpaces = decodeURI(categoryName);
  getMoviesByCategory(categoryID);
  header_tittle__category.innerHTML = categoryNameWithSpaces;
  header_category_container.style.background = `linear-gradient(0deg, rgba(255,255,255,1) 0%, var(--id${categoryID} ) 100%)`;
  goTop();
}

function homePage() {
  header_arrow.classList.add("inactive");
  trendingPreviewMoviesContainer.classList.remove("inactive");
  main_category_container.classList.remove("inactive");
  genericListContainer.classList.add("inactive");
  header_tittle_container.classList.remove("inactive");
  header_category_container.classList.add("inactive");
  header_searchbar_container.classList.remove("inactive");

  header_arrow.classList.add("inactive");
  movieDetailContainer.classList.add("inactive");
  movie_background.classList.add("inactive");
  body.classList.remove("background-black");
  footer.style.backgroundColor = "var(--main-purple)";
  header_arrow.classList.remove("header-arrow--white");

  console.log("homee");
  getCategoriesgPreview();
  getTrendingMoviesPreview();
  goTop();
}
