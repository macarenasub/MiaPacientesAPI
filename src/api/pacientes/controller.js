const Paciente = require("../../models/Paciente");

const PacientesController = module.exports;

PacientesController.getAll = (req, res) => {
  Paciente.find({}).exec((err, pacientes) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(pacientes);
  });
};

PacientesController.create = (req, res) => {
  const paciente = new Paciente(req.body);
  paciente.save((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

PacientesController.getById = async (req, res) => {
  const { id } = req.params;

  //   Paciente.findOne({ _id: id }).exec((err, paciente) => {
  //     if (err) {
  //       return res.status(500).json(err)
  //     }

  //     res.json(paciente)
  //   })

  try {
    const paciente = await Paciente.findOne({ _id: id });
    res.json(paciente);
  } catch (error) {
    return res.status(500).json(error);
  }
};

PacientesController.update = (req, res) => {
  const { id } = req.params;

  Paciente.findOneAndUpdate(
    { _id: id },
    req.body,
    { upsert: true },
    (err, paciente) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(paciente);
    }
  );
};

PacientesController.delete = (req, res) => {
  const { id } = req.params;

  Paciente.deleteOne(
    { _id: id },

    (err, paciente) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(paciente);
    }
  );
};
