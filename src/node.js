const $ = (id) => document.querySelector(id);

//! HEADER
//? header arrow back home
const header_arrow = $(".header-arrow");
//? home header
const main_header = $(".main-header");
const header_tittle_container = $(".header--tittle-container");
//? category header
const header_tittle__category = $("#category-tittle");
const header_category_container = $(".header--tittle__category");
//? search bar
const header_searchbar_container = $(".header--searchbar-container");
const searchbtn = $("#searchBTN");
//? movie backgound
const movie_background = $(".header-movie--background");

//! TRENDING
//? Images container of trending home-page
const trendingPreviewMoviesIMGContainer = $(".trending--content");
//? show more btn home-page
const showMore_btn = $(".trending-header--btn");
//? Section container
const trendingPreviewMoviesContainer = $("#trendingPreview");

//! CATEGORIES LIST
const previewCategoriesContainer = $(".categorie--grid");
const main_category_container = $(".main--categories-container");

//! GENERIC LIST (list that will show movies of the categorie selected)
const genericListContainer = $(".genericList-container");
const genericList_btn = $("#genericList-btn");
const genericList_imgContainer = $(".genericList-img__container");
//! MOVIE DETAIL
const movieDetailContainer = $("#movieDetail");
const movieDetail_tittle = $(".movieDetail-tittle");
const movieDetail_score = $(".movieDetail-score");
const movieDetail_description = $(".movieDetail-description");
//* MOVIE DETAIL CATEGORIES
const movieDetail_categorie_container = $(".movieDetail-categorie-container");
//* RELATED MOVIES
const movieDetail_related = $(".relatedMovies-container");

//! body
const body = $("body");

//! footer
const footer = $("footer");

const square_category = $(".categorie--square");
const categories = $(".categories");
const movieDetail_img = $(".movie-img");
