const BlogForm = ({
    addBlog,
    title,
    author,
    url,
    handleTitleChange,
    handleAuthorChange,
    handleUrlChange,
    setBlogFormVisible
  }) => {
  return (
    <form onSubmit={addBlog}>
      <h3>Add a blog</h3>
      Title:
        <input
          type="text"
          value={title}
          name="title"
          onChange={handleTitleChange}
        />
      Author:
        <input
          type="text"
          value={author}
          name="author"
          onChange={handleAuthorChange}
        />
      Url:
        <input
          type="text"
          value={url}
          name="url"
          onChange={handleUrlChange}
        />
      <button type="submit">Save blog</button>
    </form>  
    )
  }

export default BlogForm