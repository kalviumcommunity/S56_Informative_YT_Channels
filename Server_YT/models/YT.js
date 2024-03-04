const mongoose  = require('mongoose');

const YTSchema = mongoose.Schema({
    channel_id: String,
    channel_name: String,
    subscribers: String, 
    ratings: Number,
    total_videos: Number
});

const YTModel  = mongoose.model("yt-coll",YTSchema);

module.exports = {
    YTModel
}