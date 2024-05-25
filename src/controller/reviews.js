const ReviewsModel = require('../models/reviews')

const slugImage = ['img-480p', 'img-720p', 'img-1080p', 'img-2k', 'img-4k']
const slugVideo = ['vid-480p', 'vid-720p', 'vid-1080p', 'vid-2k', 'vid-4k']

const getAllReview = async (req, res) => {
  try {
    const [data] = await ReviewsModel.getAllReview()
    res.status(200).json({
      message: 'Get All Review Success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error
    })
  }
}

const getReviewByResolution = async (req, res) => {
  const slug = req.params.slug
  try {
    const [data] = await ReviewsModel.getReviewByResolution(slug)
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review image not found!',
        data: []
      })
    }
    res.status(200).json({
      message: 'Get review by resolution success!',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}

const getReviewResolutionById = async (req, res) => {
  const id = req.params.id
  try {
    const [data] = await ReviewsModel.getReviewResolutionById(id)
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      message: 'Get review by id success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}



// NEW TASKS 
const getReviewText = async (req, res) => {
  try {
    const [data] = await ReviewsModel.getReviewText()
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: 'Get Review Text Successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}

const getReviewImage = async (req, res) => {
  const { slug } = req.params
  try {
    const [data] = await ReviewsModel.getReviewImage(slug)
    if (!slugImage.includes(slug)) {
      return res.status(404).json({
        message: 'Slug not match!',
        statusCode: 404
      })
    }
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: 'Get Review Image Successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}
const getReviewVideo = async (req, res) => {
  const { slug } = req.params
  try {
    const [data] = await ReviewsModel.getReviewVideo(slug)
    if (!slugVideo.includes(slug)) {
      return res.status(404).json({
        message: 'Slug not match!',
        statusCode: 404
      })
    }
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: 'Get Review Video Successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}
const getReviewCombination = async (req, res) => {
  const { slug } = req.params
  try {
    const [data] = await ReviewsModel.getReviewCombination(slug)
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: 'Get Review Video Successfully',
      counts: data.length,
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}
const getReviewCombinationImage = async (req, res) => {
  const { slug } = req.params
  try {
    const [data] = await ReviewsModel.getReviewCombinationImage(slug)
    if (!slugImage.includes(slug)) {
      return res.status(404).json({
        message: 'Slug not match!',
        statusCode: 404
      })
    }
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: 'Get Review Video Successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}
const getReviewCombinationVideo = async (req, res) => {
  const { slug } = req.params
  try {
    const [data] = await ReviewsModel.getReviewCombinationVideo(slug)
    if (!slugVideo.includes(slug)) {
      return res.status(404).json({
        message: 'Slug not match!',
        statusCode: 404
      })
    }
    if (data.length === 0) {
      return res.status(404).json({
        message: 'Review not found!',
        data: []
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: 'Get Review Video Successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}



module.exports = { getAllReview, getReviewByResolution, getReviewResolutionById, getReviewText, getReviewImage, getReviewVideo, getReviewCombination, getReviewCombinationImage, getReviewCombinationVideo }