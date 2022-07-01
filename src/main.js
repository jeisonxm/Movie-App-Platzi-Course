//! HELP FUNCTIONS

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});
function placeImages(data, container) {
  container.innerHTML = "";
  data.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    movieContainer.addEventListener("click", () => {
      location.hash = `#movie=${movie.id}`;
    });

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img", "trending-content-images");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    );
    movieContainer.appendChild(movieImg);
    container.appendChild(movieContainer);
    data;
  });
}

function showMore(movies, container) {
  genericList_btn.classList.remove("inactive");
  const restOfMovies = movies.splice(8, movies.length - 8);
  placeImages(movies, container);
  genericList_btn.addEventListener("click", () => {
    placeImages(movies.concat(restOfMovies), container);
    genericList_btn.classList.add("inactive");
  });
}

function goTop() {
  window.scrollTo(0, 0);
}
function placeCategories(categories, container) {
  container.innerHTML = "";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categories");
    const categoryTittle = document.createElement("h3");
    categoryTittle.classList.add("categorie--tittle");

    const square = document.createElement("div");
    categoryContainer.addEventListener("click", () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });
    square.classList.add("categorie--square");
    square.setAttribute("id", "id" + category.id);
    const categoryTittleText = document.createTextNode(category.name);

    categoryTittle.appendChild(categoryTittleText);
    categoryContainer.append(square, categoryTittle);
    container.appendChild(categoryContainer);
  });
}
//                                                                     //

async function getTrendingMoviesPreview() {
  const { data } = await api(`trending/movie/day`);
  const movies = data.results;
  movies.splice(6, movies.length - 6);
  placeImages(movies, trendingPreviewMoviesIMGContainer);
}

async function getTrendingMovies() {
  const { data } = await api(`trending/movie/day`);
  const movies = data.results;
  header_tittle__category.innerHTML = "Trending";
  showMore(movies, genericList_imgContainer);
}

async function getMovieById(id) {
  const { data } = await api(`movie/${id}`);
  const movieImgURL = `https://image.tmdb.org/t/p/w400${data.poster_path}`;
  movieDetail_score.textContent = data.vote_average;
  movieDetail_tittle.textContent = data.title;
  movieDetail_description.textContent = data.overview;
  movieDetailImg.setAttribute("src", movieImgURL);

  movieDetailBackgroundImg.style.background = `linear-gradient(0deg, rgba(255,255,255,0.5609594179468662) 0%, rgba(0,0,0,0.7461024498886415) 80%),url(${movieImgURL})`;

  console.log(data.poster_path);
  placeCategories(data.genres, movieDetail_categorie_container);
  getRelatedMoviesById(id);
}

async function getCategoriesgPreview() {
  const { data } = await api(`genre/movie/list`);
  const categories = data.genres;
  placeCategories(categories, previewCategoriesContainer);
}

async function getMoviesByCategory(id) {
  const { data } = await api(`discover/movie`, {
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;

  showMore(movies, genericList_imgContainer);
}

async function searchMovie(query) {
  const { data } = await api(`search/movie`, {
    params: {
      query,
    },
  });
  const movies = data.results;
  showMore(movies, genericList_imgContainer);
}

async function getRelatedMoviesById(id) {
  const { data } = await api(`movie/${id}/similar`);
  const relatedMovies = data.results;
  placeImages(relatedMovies, movieDetail_related);
}
