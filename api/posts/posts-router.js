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
			res
				.status(500)
				.json({ message: "The posts information could not be retrieved" });
		});
});

router.get("/api/posts/:id", (req, res) => {
	posts
		.findById(req.params.id)
		.then((post) => {
			if (post) {
				res.status(200).json(post);
			} else {
				res
					.status(404)
					.json({ message: "The post with the specified ID does not exist" });
			}
		})
		.catch((err) => {
			console.log(err);
			res
				.status(500)
				.json({ message: "The posts information could not be retrieved" });
		});
});

router.post("/api/posts", (req, res) => {
	if (!req.body.title || !req.body.contents) {
		return res.status(400).json({
			message: "Please provide title and contents for the post",
		});
	}
	posts
		.insert(req.body)
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				message: "There was an error while saving the post to the database.",
			});
		});
});

module.exports = router;
