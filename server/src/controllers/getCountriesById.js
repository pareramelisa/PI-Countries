const { Country } = require("../db")

const getCountriesById = async (req, res) => {

    const { idPais } = req.params

    const id = idPais.toUpperCase()
    
    try {

        const country = await Country.findByPk(id)
        if(!country) {
            return res.status(404).send('Error: country not found')
        }

        res.status(200).json(country)
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}

module.exports = getCountriesById