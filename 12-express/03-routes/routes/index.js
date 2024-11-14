const express = require('express');
const commentsRouter = require("./comments");
const usersRouter = require("./users");
const rootRouter = require('./root');

const router = express.Router();

router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/', rootRouter); // ВАЖНО чтобы корневой рут был в конце дабы он не перехватывал все запросы

module.exports = router;
