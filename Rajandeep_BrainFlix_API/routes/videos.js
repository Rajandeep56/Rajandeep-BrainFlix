const express = require("express");
const router = express.Router();

const { fetchVideos, addVideo } = require("../controllers/videos");

router.route("/").get((req, res)=>{
    const videoList = fetchVideos();

    
    const noIds = videoList.map(video =>{
        return{
            id: video['id'],
            title: video['title'],
            channel: video['channel'],
            image: video['image'],
            description: video['description'],
            views: video['views'],
            likes:video['likes'],
            duration: video['duration'],
            video: video['video'],
            timestamp: video['timestamp'],
        }
    });
    res.status(200).json(noIds);
})
router.route("/comments/:commentId")
    .get((req, res) => {
        const { commentId } = req.params;
        const allVideos = fetchVideos();
        for (const video of allVideos) {
            const commentMatch = video.comments.find(comment => comment.id === commentId);
            if (commentMatch) {
                console.log("Video found:", video);
                console.log("Comment found:", commentMatch);
                const relatedComments = video.comments.map(comment => ({
                    name: comment.name,
                    likes: comment.likes,
                    timestamp: comment.timestamp,
                    comment: comment.comment
                }));
                return res.status(200).json(relatedComments);
            }
        }
        console.log("No comment found with ID:", commentId);
        res.status(404).json("No comment with that ID");
    });


    router.route("/:videoId").get((req, res) => {
        const { videoId } = req.params;
        const videoList = fetchVideos();
        
        const videoMatch = videoList.find((video) => video.id == videoId);
    
        if (!videoMatch) {
            return res.status(404).json("No video with that ID");
        }
        res.status(200).json(videoMatch);
    });
    
module.exports = router;