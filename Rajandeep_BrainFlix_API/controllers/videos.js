const fs = require("fs");

const fetchVideos = () => {
    return JSON.parse(fs.readFileSync("./data/Videos.json"));
}
const addVideo = (newVideo) => {
    const newVideoList = fecthMovies();
    fs.writeFileSync("./data/movies.json", JSON.stringify([...newVideoList, newVideo]));
    return newVideo;
}

module.exports = {fetchVideos, addVideo}