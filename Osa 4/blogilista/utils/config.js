const PORT = 3003
const MONGODB_URI = 'mongodb+srv://sjjk:sjjk0090@cluster0.8dsqy.mongodb.net/blogilista?retryWrites=true&w=majority' === 'test' 
  ? 'mongodb+srv://sjjk:sjjk0090@cluster0.8dsqy.mongodb.net/blogilista_tests?retryWrites=true&w=majority'
  : 'mongodb+srv://sjjk:sjjk0090@cluster0.8dsqy.mongodb.net/blogilista?retryWrites=true&w=majority'

module.exports = {
  MONGODB_URI,
  PORT
}