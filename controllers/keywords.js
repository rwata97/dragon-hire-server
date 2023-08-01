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
      const candidates = req.body.candidates;

      const filteredCandidates = serviceData.serverData(candidates);

      res.status(200).json({ filteredCandidates });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  getLinkedInStatus: async (req, res) => {
    try {
      setTimeout(() => {
        res.status(200).json({
          status: true,
        });
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  },
};
