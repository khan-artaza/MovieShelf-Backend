const axios = require("axios");
const movieCollectionModel = require("../models/movieCollection.model");

async function getPopularMoviesController(req, res) {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      popularMovies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching popular movies data",
    });
  }
}
async function getTrendingMovieController(req, res) {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      trendingMovies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching trending movies data",
    });
  }
}

async function getTopRatedMoviesController(req, res) {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      topRatedMovies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching top rated movies data",
    });
  }
}

async function getUpcomingMoviesController(req, res) {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      upcomingMovies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching upcoming movies data",
    });
  }
}
async function getSearchedMoviesController(req, res) {
  try {
    const movieName = req.query.query;
    const page = req.query.page || 1;

    if (!movieName) {
      return res
        .status(400)
        .json({ message: "Movie name (query) is required" });
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: movieName,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      movies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching upcoming movies data",
    });
  }
}
async function getBollywoodMoviesController(req, res) {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_original_language: "hi",
          sort_by: "popularity.desc",
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      bollyMovies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching bollywood movies data",
    });
  }
}


async function getTopRatedBollyMovies(req, res) {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_original_language: "hi",
          sort_by: "vote_average.desc",
          page: page,
        },
      }
    );

    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      topRatedBollyMovies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching top-rated bollywood movies data",
    });
  }
}
async function getMovieById(req, res) {
  const movieId = req.query.query;

  if (!movieId) {
    return res.status(400).json({
      message: "Movie Id (query) is required",
    });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
    );

    return res.status(200).json({
      message: "movie data fetched successfully!",
      movie: response.data,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching movies data by id",
    });
  }
}
async function getTVById(req, res) {
  const tvId = req.query.query;

  if (!tvId) {
    return res.status(400).json({
      message: "TV Id (query) is required",
    });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.TMDB_API_KEY}`
    );

    return res.status(200).json({
      message: "TV data fetched successfully!",
      tv: response.data,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching tv data by id",
    });
  }
}

async function getMoviesByGenreController(req, res) {
  try {
    const genreId = req.query.genreId;
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_genres: genreId,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      movies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching movies data",
    });
  }
}
async function getTvByGenreController(req, res) {
  try {
    const genreId = req.query.genreId;
    const page = req.query.page || 1;

    if (!genreId) {
      return res.status(400).json({ message: "genreId is required" });
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_genres: genreId,
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      tv: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching tv data",
    });
  }
}

async function getIndianTvByGenreController(req, res) {
  try {
    const genreId = req.query.genreId;
    const page = req.query.page || 1;

    if (!genreId) {
      return res.status(400).json({ message: "genreId is required" });
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_genres: genreId,
          with_origin_country: 'IN', // Filter for Indian TV shows
          page: page,
          language: 'en-US',
          sort_by: 'popularity.desc',
        },
      }
    );

    console.log(response.data);

    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      tv: response.data.results,
    });
  } catch (error) {
    console.log("error :", error.message || error);
    return res.status(400).json({
      message: "Error in fetching Indian TV shows data",
    });
  }
}

async function getBollyMoviesByGenreController(req, res) {
  try {
    const genreId = req.query.genreId;
    const page = req.query.page || 1;

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_genres: genreId,
          with_original_language: "hi",
          sort_by: "popularity.desc",
          page: page,
        },
      }
    );

    console.log(response.data);
    return res.status(200).json({
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
      movies: response.data.results,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching bolly movies with genre data",
    });
  }
}

async function getRatingController(req, res) {
  const imdbId = req.query.query;

  if (!imdbId) {
    return res.status(400).json({
      message: "imdbId (query) is required",
    });
  }

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.OMDB_API_KEY}`
    );

    return res.status(200).json({
      message: "IMDB data fetched successfully!",
      data: response.data,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching imdb data by imdb id",
    });
  }
}
async function getMovieCastController(req, res) {
  const movieId = req.query.query;

  if (!movieId) {
    return res.status(400).json({
      message: "Movie Id (query) is required",
    });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`
    );

    return res.status(200).json({
      message: "movie's cast data fetched successfully!",
      cast: response.data,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({
      message: "error in fetching movies's cast data by id",
    });
  }
}

async function getTVRatingController(req, res) {
  const title = req.query.query; // Expecting TV show name here

  if (!title) {
    return res.status(400).json({
      message: "TV show name (query) is required",
    });
  }

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${process.env.OMDB_API_KEY}`
    );

    return res.status(200).json({
      message: "IMDB data fetched successfully!",
      data: {
        title: response.data.Title,
        year: response.data.Year,
        imdbRating: response.data.imdbRating,
      },
    });
  } catch (error) {
    console.error("error:", error);
    return res.status(400).json({
      message: "Error in fetching IMDB data by TV show name",
    });
  }
}

async function getAllWishlistController(req,res){
  const user = req.user
  console.log(user._id);
  
  try {

    const list = await movieCollectionModel.find({
      userId : user._id
    })

    return res.json({
      message : "wishlist data fetched successfully!",
      wishlistData : list
    })
    
  } catch (error) {
    return res.status(400).json({
      message: "Error in fetching wishlistData",
    });
    
  }
}

module.exports = {
  getPopularMoviesController,
  getTopRatedMoviesController,
  getUpcomingMoviesController,
  getSearchedMoviesController,
  getBollywoodMoviesController,
  getTopRatedBollyMovies,
  getMovieById,
  getMoviesByGenreController,
  getBollyMoviesByGenreController,
  getTrendingMovieController,
  getMovieCastController,
  getRatingController,
  getTvByGenreController,
  getIndianTvByGenreController,
  getTVById,
  getTVRatingController,
  getAllWishlistController
};
