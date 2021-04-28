require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { models } = require('../models');

bookmarksRouter.get('/', async (req, res) => {
    const bookmarks = await models.Bookmark.findAll();
    const array = [];
    
    for(let i = 0; i < bookmarks.length; i++) {
        let url = bookmarks[i].dataValues.url;
        let comment = bookmarks[i].dataValues.comment;
        let tag = bookmarks[i].dataValues.tags;
        let id = bookmarks[i].dataValues.id;

        array.push([url,comment,tag, id]);
        
    };
    
    res.render('pages/index', {
        bookmarkarray: array,
    }); 
});

bookmarksRouter.post('/add', async (req, res) => {
    let url = req.body.url
    let comment = req.body.comment
    let tags = req.body.tags
    await models.Bookmark.create({url:url, comment:comment, tags:tags})
    res.redirect('/'); 
})

bookmarksRouter.get('/delete/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    await models.Bookmark.destroy({
        where: {
           id: id
        }
    })

   res.redirect('/'); 
})






module.exports = bookmarksRouter;