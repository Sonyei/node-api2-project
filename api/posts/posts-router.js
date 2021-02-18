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

router.get("/api/posts/:id", (req, res) => {
	posts
		.findById(req.params.id)
		.then((post) => {
			if (post) {
				res.status(200).json(post);
			} else {
				res.status(404).json({ message: "Post not found." });
			}
		})
		.catch((err) => {
			console.log(err);
			res
				.status(500)
				.json({ message: "Something went wrong. Please try again later." });
		});
});

module.exports = router;
