const Broma = require("../modules/broma.modle");

module.exports.getBromas = async (req, res) => {
  try {
    const Bromas = await Broma.find();
    res.status(200);
    res.json(Bromas);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.getBromaById = async (req, res) => {
  try {
    const fondBromas = await Broma.findById(req.params.id);
    res.status(200);
    res.json(fondBromas);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.getBromasRandom = async (req, res) => {
  try {
    const Bromas = await Broma.find();
    const randValue = Math.round(Math.random() * (Bromas.length - 1));
    const randBroma = Bromas[randValue];
    res.status(200);
    res.json(randBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.createBroma = async (req, res) => {
  try {
    const newBroma = await Broma.create(res.body);
    res.status(201);
    res.json(newBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.updateBroma = async (req, res) => {
  try {
    const updateBroma = await Broma.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200);
    res.json(updateBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.deleteBroma = async (req, res) => {
	try {
		const deleteBroma = await Broma.deleteOne({ _id: req.params.id });
    res.status(201);
    res.json(deleteBroma);
	} catch (error) {
		res.status(500);
    res.json(error);
	}
};
