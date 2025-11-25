// const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//       listing : Joi.object({
//       title : Joi.string().required(),
//       description : Joi.string().required(),
//       location : Joi.string().required(),
//       country : Joi.string().required(),
//       price : Joi.number().required().min(0),
//       image : Joi.string().allow("",null)

//     })
// });

const Joi = require('joi');

// Define the schema for the nested 'image' object
const imageSchema = Joi.object({
    filename: Joi.string().required(),
    url: Joi.string().allow("", null).uri().required()
});

// Define the schema for a single listing object
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    // These fields are required by your existing schema but missing from the sample JSON
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    // Updated image field to match the sample data structure
    image: imageSchema.required()
    }).required()
});

// Optional: Define a schema to validate the entire array of sample listings
// module.exports.sampleListingsArraySchema = Joi.array().items(module.exports.listingSchema);
