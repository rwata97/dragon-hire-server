const router = require('express').Router();
const keywordsController = require('../controllers/keywords');

router.post('/', keywordsController.postKeywords);
router.post('/candidates', keywordsController.postCandidates);

module.exports = router;
