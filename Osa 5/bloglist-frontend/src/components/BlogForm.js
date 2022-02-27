import { useState } from 'react' 

const BlogForm = ({ createBlog }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }


  const addBlog = (event) => {
    event.preventDefault()

    createBlog({
      title: title,
      author: author,
      url: url
    })

    //Alla oleva discordista
    //createBlog(createBlog)

    setTitle('')
    setAuthor('')
    setUrl('')
  }
    

  return (
    <form onSubmit={addBlog}>
      <h3>Add a new blog</h3>
      Title:
        <input
          value={title}
          onChange={handleTitleChange}
        />
      Author:
        <input
          value={author}
          onChange={handleAuthorChange}
        />
      Url:
        <input
          value={url}
          onChange={handleUrlChange}
        />
      <button type="submit">Save blog</button>
    </form>  
  )
}

export default BlogForm