const mongoose = require('mongoose')

const movieCollectionSchema = mongoose.Schema({
    userId : String,
    wishlist : {
        isTv : Boolean,
        movieId : Number,
        wishlistTitle : String,
        isWishlist : Boolean
    }
})

const movieCollectionModel = mongoose.model("movie-collection", movieCollectionSchema)

module.exports = movieCollectionModel