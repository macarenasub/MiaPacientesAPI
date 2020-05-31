const Medico = require("../../models/Medico");

const MedicosController = module.exports;

MedicosController.getAll = (req, res) => {
  Medico.find({}).exec((err, medicos) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(medicos);
  });
};

MedicosController.create = (req, res) => {
  const medico = new Medico(req.body);
  medico.save((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

MedicosController.getById = async (req, res) => {
  const { id } = req.params;

  //   Medico.findOne({ _id: id }).exec((err, medico) => {
  //     if (err) {
  //       return res.status(500).json(err)
  //     }

  //     res.json(medico)
  //   })

  try {
    const medico = await Medico.findOne({ _id: id });
    res.json(medico);
  } catch (error) {
    return res.status(500).json(error);
  }
};

MedicosController.update = (req, res) => {
  const { id } = req.params;

  Medico.findOneAndUpdate(
    { _id: id },
    req.body,
    { upsert: true },
    (err, medico) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(medico);
    }
  );
};

MedicosController.delete = (req, res) => {
  const { id } = req.params;

  Medico.deleteOne(
    { _id: id },

    (err, medico) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(medico);
    }
  );
};
