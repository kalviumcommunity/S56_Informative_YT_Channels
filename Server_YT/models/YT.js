const mongoose  = require('mongoose');

const YTSchema = mongoose.Schema({
    channel_id: String,
    channel_name: String,
    subscribers: String, 
    ratings: Number,
    total_videos: Number,
    created_by: String
});

const UserSchema = mongoose.Schema({
    user: String
})


const YTModel  = mongoose.model("yt-coll",YTSchema);
const UserModal = mongoose.model("users-coll", UserSchema)

module.exports = {
    YTModel,
    UserModal
}


