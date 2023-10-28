const nps = require('path')
const join = require('url-join')
const { createReadStream: streamifier } = require('streamifier')
const qs = require('qs')
const { h } = require('react-mobx-vm')

const ReactDOMServer = require('react-dom/server.node')
const React = require('react')

const express = require('express');
const router = express.Router();

const schema = require('./models/schema.js');

router.get('/message', async (req, res) => {
    try {
        const message = await schema.messageSchema.find();
        console.log(message);
    } catch (err) {
        console.error(err);
        res.status(500).json( { error: 'Internal server error' } );
    }
});

router.post('/message', async (req, res) => {
    try {
        const newMessage = new schema.messageSchema(req.body);
        await console.log(newMessage);
    } catch (err) {
        console.error(err);
        res.status(500).json( { error: 'Internal server error'} );
    }
});

module.exports = router;
