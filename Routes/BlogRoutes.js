const express = require('express');
const Blog = require('../Models/Blog');
const { blogValidationRules } = require('../MiddleWares/validation');
const { handleValidateErrors } = require('../MiddleWares/validation-response');

const router = express.Router();

// Create a new blog post
router.post('/', blogValidationRules,handleValidateErrors, async (req, res) => {
  try {
    const blog = new Blog(req.body); 
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all blog posts 
router.get('/find', async (req, res) => {
  try {
    const { author } = req.query; 
    const query = author ? { author } : {}; 
    const blogs = await Blog.find(query);
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update APi
router.put('/:id', blogValidationRules,handleValidateErrors, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete({ _id: req.params.id })
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' }); 
    }
    res.status(200).json({ message: 'Blog post deleted successfully' }); 
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
});

module.exports = router;


