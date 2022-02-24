const listHelper = require('../utils/list_helper')

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Test blog',
        author: 'Sampo Testersson',
        url: 'testi.com',
        likes: 5,
        __v: 0
      }
    ]
  
    test('When list has only one blog, return the likes of that one', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })
})