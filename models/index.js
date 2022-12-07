const User = require('./User');
const Posts = require('./Posts')
Posts.belongsTo(User,{foreignKey: "user_id"})
module.exports = { User, Posts };