const users = require('./users.json');
const posts = require('./posts.json');
const people = require('./people.json');

module.exports = () => ({
  users: users,
  posts: posts,
  people: people
});
