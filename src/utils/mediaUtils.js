const getMediaSlug = (slug) => {
  let result
  if (slug == 'img-480p' || slug == 'vid-480p') {
    result = '480p'
  } else if (slug == 'img-720p' || slug == 'vid-720p') {
    result = '720p'
  }
  else if (slug == 'img-1080p' || slug == 'vid-1080p') {
    result = '1080p'
  }
  else if (slug == 'img-2k' || slug == 'vid-2k') {
    result = '2k'
  }
  else if (slug == 'img-4k' || slug == 'vid-4k') {
    result = '4k'
  }
  return result
}
module.exports = { getMediaSlug }