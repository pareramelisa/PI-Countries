const { Activity, Country } = require("../db");

const postActivities = async (req, res) => {
  try {
    const { name, difficult, duration, season, countries } = req.body

    console.log(req.body)

    if (!name || !difficult || !duration || !season || !countries) {
      return res
        .status(400)
        .json({
          message:
            "Todos los campos son obligatorios y debes relacionar al menos un país.",
        });
    }

    const newActivity = await Activity.create({
      name,
      difficult,
      duration,
      season,
    });

    countries.forEach(async (country) => {
      let activityCountry = await Country.findOne({
        where: {
          id: country,
        },
      });
      await newActivity.addCountry(activityCountry);
    });

    res.status(201).json({ message: "Actividad turística creada con éxito." })

  } catch (error) {
    console.error("Error al crear actividad turística:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = postActivities;
