const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

async function getTrendingMoviesPreview() {
  const { data } = await api(`trending/movie/day`);
  const movies = data.results;

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img", "trending-content-images");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    );
    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesIMGContainer.appendChild(movieContainer);
  });
}

async function getCategoriesgPreview() {
  const { data } = await api(`genre/movie/list`);
  const categories = data.genres;

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categories");
    const categoryTittle = document.createElement("h3");
    categoryTittle.classList.add("categorie--tittle");

    const square = document.createElement("div");
    square.classList.add("categorie--square");
    square.setAttribute("id", "id" + category.id);
    const categoryTittleText = document.createTextNode(category.name);

    categoryTittle.appendChild(categoryTittleText);
    categoryContainer.append(square, categoryTittle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}
