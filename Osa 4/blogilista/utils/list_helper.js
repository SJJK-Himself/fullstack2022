const dummy = (blogs) => {
    return 1
}
  
const totalLikes = (listWithOneBlog) => {
    const result = listWithOneBlog.map(blog => blog.likes).reduce((prev, next) => (prev + next))
    return result
}

module.exports = {
    dummy,
    totalLikes
}