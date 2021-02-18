// implement your posts router here
const express = require("express");
const posts = require("./posts-model");
const router = express.Router();

router.get("/api/posts", (req, res) => {
	posts
		.find(req.query)
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "Error retrieving posts." });
		});
});

module.exports = router;
