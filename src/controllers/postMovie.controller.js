const movieCollectionModel = require('../models/movieCollection.model');


async function wishListMovies(req, res){

console.log(req.body);

    const {isTv, movieId, wishlistTitle} = req.body
    
    console.log(req.body);
    
    

    const movieRes = await movieCollectionModel.create({
        userId : req.user._id,
       wishlist : {
        isTv : isTv,
        movieId : movieId,
         wishlistTitle : wishlistTitle,
       isWishlist : true
       } 
    })
    console.log("check: ", movieRes);
    
    return res.status(201).json({
        message : "movie saved to wishlist",
        movieRes,
    })
}

async function deleteWishlistController(req, res) {

    console.log("hii: ", req.query.movieId);
    
     const movieId = req.query.movieId

    try {

        await movieCollectionModel.deleteOne({
            "wishlist.movieId" : movieId
        })

        return res.status(200).json({
            message : "movie is deleted from wishlist successfully"
        })
        
    } catch (error) {
        return res.status(400).json({
            message : "error in deleting wishlist",
            error : error

        })
    }
}

module.exports = {wishListMovies , deleteWishlistController}