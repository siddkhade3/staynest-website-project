

const Joi = require('joi');

// Define the schema for the nested 'image' object
// filename is required for MongoDB storage (even if set to a default value)
const imageSchema = Joi.object({
    filename: Joi.string().allow('', null).optional(), // Allow filename to be optional/blank on submission
    url: Joi.string().allow('', null).uri().optional() // Allow URL to be optional/blank on submission
}).optional(); // Make the entire image object optional

module.exports.listingSchema = Joi.object({
        listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.number().required().min(0),
        // The listing.image object itself is now validated by the imageSchema
        image : imageSchema
    }).required()
});

module.exports.reviewSchema = Joi.object({
      review:Joi.object({
      rating:Joi.number().required().min(1).max(5),
      comment:Joi.string().required()
   })
});