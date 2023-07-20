const serviceData = require('../middlewares/serviceData');
module.exports = {
  postKeywords: async (req, res) => {
    try {
      const payload = req.body;

      const keywords = ['javascript', 'nodejs', 'express', 'java', 'sql'];

      res.status(200).json({ keywords });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  postCandidates: async (req, res) => {
    try {
      const keywords = req.body.keywords;

      const filteredCandidates = serviceData.serverData(keywords);

      res.status(200).json({ filteredCandidates });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },
};
