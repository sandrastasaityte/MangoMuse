const Cake = require('../models/Cake');

exports.get = async (req, res, next) => {
  try {
    const cakeId = Number(req.params.id);
    if (isNaN(cakeId)) {
      return res.status(400).json({ error: 'Invalid cake id' });
    }

    const cake = await Cake.findOne({ id: cakeId }).lean();
    if (!cake) {
      return res.status(404).json({ error: 'Cake not found' });
    }

    res.json(cake);
  } catch (err) {
    next(err);
  }
};
