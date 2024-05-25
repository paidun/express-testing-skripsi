const express = require('express')
const reviewController = require('../controller/reviews')
const route = express.Router()

// route.get('/reviews', reviewController.getAllReview)
// route.get('/reviews/:slug', reviewController.getReviewByResolution)
// route.get('/reviews/:slug/:id', reviewController.getReviewResolutionById)

// NEW TASKS
route.get('/reviews/review-text', reviewController.getReviewText)
route.get('/reviews/review-image/:slug', reviewController.getReviewImage)
route.get('/reviews/review-video/:slug', reviewController.getReviewVideo)
route.get('/reviews/review-combination/:slug', reviewController.getReviewCombination)
route.get('/reviews/review-combination-image/:slug', reviewController.getReviewCombinationImage)
route.get('/reviews/review-combination-video/:slug', reviewController.getReviewCombinationVideo)
module.exports = route