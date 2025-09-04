const express = require('express')

const {getPopularMoviesController, getTopRatedMoviesController, getUpcomingMoviesController, getSearchedMoviesController, getBollywoodMoviesController, getTopRatedBollyMovies, getMovieById, getMoviesByGenreController, getBollyMoviesByGenreController, getTrendingMovieController, getMovieCastController, getRatingController, getTvByGenreController, getIndianTvByGenreController, getTVById, getTVRatingController, getAllWishlistController} = require('../controllers/getMovie.controller')
const { wishListMovies, deleteWishlistController } = require('../controllers/postMovie.controller')
const authMiddleware = require('../middlewares/auth.middleware')


const router = express.Router()



router.get("/popular", getPopularMoviesController)
router.get("/topRated", getTopRatedMoviesController)
router.get("/trending", getTrendingMovieController)
router.get("/upcoming", getUpcomingMoviesController)
router.get("/searched", getSearchedMoviesController)
router.get("/bollywood", getBollywoodMoviesController)
router.get("/bollywood/topRated", getTopRatedBollyMovies)
router.get("/bollywood/genre", getBollyMoviesByGenreController)
router.get("/id", getMovieById)
router.get("/tv/id", getTVById)
router.get("/genre", getMoviesByGenreController)
router.get("/cast", getMovieCastController)
router.get("/rating", getRatingController)
router.get("/tv/rating", getTVRatingController)

router.get("/tv", getTvByGenreController)
router.get("/tv/indian", getIndianTvByGenreController)

router.post("/wishlist",authMiddleware, wishListMovies)
router.get("/wishlist/get-all", authMiddleware, getAllWishlistController)

router.delete("/wishlist/delete", authMiddleware, deleteWishlistController)



module.exports = router