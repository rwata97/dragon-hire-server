const router = require('express').Router();
const keywordsController = require('../controllers/keywords');

router.post('/', keywordsController.postKeywords);
router.post('/candidates', keywordsController.postCandidates);
router.get('/importlinkedin', keywordsController.getLinkedInStatus);

module.exports = router;
