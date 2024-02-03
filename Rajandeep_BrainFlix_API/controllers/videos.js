const fs = require("fs");

const fetchVideos = () => {
    return JSON.parse(fs.readFileSync("./data/Videos.json"));
}
const addVideo = (newVideo) => {
    const newVideoList = fetchVideos();
    fs.writeFileSync("./data/Videos.json", JSON.stringify([...newVideoList, newVideo]));
    return newVideo;
}

module.exports = {fetchVideos, addVideo}