const dummy = (blogs) => {
    return 1
}
  
const totalLikes = (listWithOneBlog) => {
    const result = listWithOneBlog.map(blog => blog.likes).reduce((prev, next) => (prev + next))
    return result
}

const favoriteBlog = (listWithManyBlogs) => {
    const maxObj = listWithManyBlogs.reduce((max, obj) => (max.likes > obj.likes) ? max : obj);
    const favBlog = {
        title: maxObj.title,
        author: maxObj.author,
        likes: maxObj.likes
    }
    return favBlog
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}