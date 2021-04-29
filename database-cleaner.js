const { models } = require("./models");

const truncateTables = () => {
  console.log('truncating tables')
  models.Bookmark.destroy({ truncate : true, cascade: true }) // cascade currently unnecessary
}

module.exports = truncateTables