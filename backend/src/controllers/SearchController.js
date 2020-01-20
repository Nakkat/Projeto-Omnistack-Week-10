const Dev = require('../models/Dev');
const parseStringAsArray = require('../../utils/parseStringAsArray');


module.exports = {
    async index(req, res) {
        // Buscar devs num raio de 10 km
        // Filtrar por tecnologias
        
        const { latitude, longitude, techs } = req.query;
        
        const TechsArray = parseStringAsArray(techs);
       
        const devs = await Dev.find({
            techs: {
                $in: TechsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({devs})
    }
}