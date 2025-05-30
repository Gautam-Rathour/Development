const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.object().required(),
        description: Joi.object().required(),
        location: Joi.object().required(),
        country: Joi.object().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null)
    }).required()
});


module.exports = listingSchema;