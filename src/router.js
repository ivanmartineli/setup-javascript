const { Router } = require('express')
const authorController = require('./controllers/authorController');
const router = Router();


router.get('/health', (_req, res) => {
    return res.send({ message: 'OK Server in on!' })
});

router.get("/author/:id", (req, res) => {
    authorController.getParamsId(req, res)
});

router.get("/author/", (req, res) => {
    authorController.getQueryCpf(req, res)
});


module.exports = router