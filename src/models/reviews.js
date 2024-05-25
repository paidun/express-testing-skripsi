const dbPool = require('../config/database')
const MediaInfo = require('../utils/mediaUtils')
// const getAllReview = () => {
//   const SQLQuery = `SELECT reviews.id, reviews.area,reviews.review_text, reviews.name, resolutions.resolution, images.path_image, videos.path_video
//                     FROM reviews
//                     JOIN resolutions ON reviews.image_id = resolutions.image_id
//                     JOIN images ON resolutions.image_id = images.id
//                     JOIN resolutions AS resolutions_video ON reviews.video_id = resolutions_video.video_id
//                     JOIN videos ON resolutions.video_id = videos.id`
//   return dbPool.execute(SQLQuery)
// }
// /** 
//  * pilih semua di tabel reviews
//  * gabungkan dengan tabel resolution, dimana id image pada review sama dengan id image pada resolusi
//  * gabungkan dengan tabel image, dimana id image pada tabel resolusi sama dengan id pada tabel image
//  * */

// const getReviewByResolution = (slug) => {
//   const resolution = MediaInfo.getMediaSlug(slug)
//   const SQLQuery = `SELECT 
//                     reviews.id, reviews.area,reviews.review_text, reviews.name, resolutions.resolution, images.path_image, videos.path_video
//                     FROM reviews
//                     JOIN resolutions ON reviews.image_id = resolutions.image_id
//                     JOIN images ON resolutions.image_id = images.id
//                     JOIN resolutions AS resolutions_video ON reviews.video_id = resolutions_video.video_id
//                     JOIN videos ON resolutions.video_id = videos.id
//                     WHERE resolutions.resolution = '${resolution}'`
//   return dbPool.execute(SQLQuery)
// }

// const getReviewResolutionById = (id) => {
//   const SQLQuery = `SELECT reviews.id, reviews.area,reviews.review_text, reviews.name, resolutions.resolution, images.path_image, videos.path_video
//                     FROM reviews
//                     JOIN resolutions ON reviews.image_id = resolutions.image_id
//                     JOIN images ON resolutions.image_id = images.id
//                     JOIN resolutions AS resolutions_video ON reviews.video_id = resolutions_video.video_id
//                     JOIN videos ON resolutions.video_id = videos.id
//                     WHERE reviews.id='${id}'`
//   return dbPool.execute(SQLQuery)
// }



// NEW MODEL 
const getReviewText = () => {
  const SQLQuery = `SELECT reviews.id, reviews.name, reviews.area,reviews.review_date, reviews.rating, reviews.review_text 
                    FROM reviews
                    LIMIT 1000`
  return dbPool.execute(SQLQuery)
}


const getReviewImage = (slug) => {
  const resolution = MediaInfo.getMediaSlug(slug)
  const SQLQuery = ` SELECT reviews.id, resolutions.resolution_name, images.path_image
                      FROM reviews
                      JOIN resolutions ON reviews.resolution_id = resolutions.id
                      JOIN images ON reviews.resolution_id = images.id
                      WHERE resolutions.resolution_name = '${resolution}' 
                    `
  return dbPool.execute(SQLQuery)
}
const getReviewVideo = (slug) => {
  const resolution = MediaInfo.getMediaSlug(slug)
  const SQLQuery = ` SELECT reviews.id, resolutions.resolution_name, videos.path_video
                      FROM reviews
                      JOIN resolutions ON reviews.resolution_id = resolutions.id
                      JOIN videos ON reviews.resolution_id = videos.id
                      WHERE resolutions.resolution_name = '${resolution}' 
                    `
  return dbPool.execute(SQLQuery)
}


const getReviewCombination = (slug) => {
  const SQLQuery = ` SELECT reviews.id, reviews.name, reviews.area,reviews.review_date, reviews.rating, reviews.review_text, 
                          resolutions.resolution_name, images.path_image, videos.path_video
                          FROM reviews
                          JOIN resolutions ON reviews.resolution_id = resolutions.id
                          JOIN images ON reviews.resolution_id = images.resolution_id AND resolutions.resolution_name = '${slug}'
                          JOIN videos ON reviews.resolution_id = videos.resolution_id AND resolutions.resolution_name = '${slug}'
                          LIMIT 500
                    `

  return dbPool.execute(SQLQuery)
}
const getReviewCombinationImage = (slug) => {
  const resolution = MediaInfo.getMediaSlug(slug)
  const SQLQuery = ` SELECT reviews.id, reviews.name, reviews.area,reviews.review_date, reviews.rating, reviews.review_text, 
                          resolutions.resolution_name, images.path_image
                          FROM reviews
                          JOIN resolutions ON reviews.resolution_id = resolutions.id
                          JOIN images ON reviews.resolution_id = images.id
                          WHERE resolutions.resolution_name = '${resolution}'
                          LIMIT 1000;
                    `

  return dbPool.execute(SQLQuery)
}
const getReviewCombinationVideo = (slug) => {
  const resolution = MediaInfo.getMediaSlug(slug)
  const SQLQuery = ` SELECT reviews.id, reviews.name, reviews.area,reviews.review_date, reviews.rating, reviews.review_text, 
                          resolutions.resolution_name, videos.path_video
                          FROM reviews
                          JOIN resolutions ON reviews.resolution_id = resolutions.id
                          JOIN videos ON reviews.resolution_id = videos.id
                          WHERE resolutions.resolution_name = '${resolution}'
                          LIMIT 1000;
                    `

  return dbPool.execute(SQLQuery)
}
module.exports = {
  // getAllReview, getReviewByResolution, getReviewResolutionById, 
  getReviewText, getReviewImage, getReviewVideo, getReviewCombination, getReviewCombinationImage, getReviewCombinationVideo
}