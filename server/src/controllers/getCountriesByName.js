const { Country } = require("../db")
const { Op } = require("sequelize")

const getCountriesByName = async (req, res) => {
    const name = req.query.name;
  
    // console.log('Nombre recibido:', name);
  
    try {
      if (!name) {
        return res.status(400).json({ message: 'El parámetro "name" es obligatorio en la consulta.' });
      }
  
      const countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        }
      });
  
    //   console.log('Países encontrados:', countries);
  
      if (countries.length === 0) {
        return res.status(404).json({ message: 'No se encontraron países con ese nombre.' });
      }
  
      res.status(200).json(countries);
    } catch (error) {
      console.error('Error al buscar países por nombre:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

module.exports = getCountriesByName