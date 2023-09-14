const { Activity, Country } = require("../db")

const getActivities = async (req, res) => {

    try {
        const activities = await Activity.findAll({                     
            include: Country                                               
            })
    
        res.status(200).json(activities);

      } catch (error) {
        console.error('Error al obtener actividades turísticas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
}

module.exports = getActivities