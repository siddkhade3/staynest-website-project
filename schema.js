// const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//       listing : Joi.object({
//       title : Joi.string().required(),
//       description : Joi.string().required(),
//       location : Joi.string().required(),
//       country : Joi.string().required(),
//       price : Joi.number().required().min(0),
//       image : Joi.string().allow("",null)

//     }).required()
// });

// const Joi = require('joi');

// // Define the schema for the nested 'image' object
// const imageSchema = Joi.object({
//     filename: Joi.string().required(),
//     url: Joi.string().allow("", null).uri().required()
// });

// // Define the schema for a single listing object
// module.exports.listingSchema = Joi.object({
//     listing : Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     // These fields are required by your existing schema but missing from the sample JSON
//     location: Joi.string().required(),
//     country: Joi.string().required(),
//     price: Joi.number().required().min(0),
//     // Updated image field to match the sample data structure
//     image: imageSchema.required()
//     }).required()
// });



// const Joi = require('joi');

// // Define the schema for a single listing object
// const listingSchema = Joi.object({
   
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     location: Joi.string().required(),
//     country: Joi.string().required(),
//     price: Joi.number().required().min(0),
//     // Corrected: Expects a single URL string, allows it to be empty/null, and checks if it's a valid link.
//     image: Joi.string().allow("", null).uri().optional() 
   
// });

// module.exports.listingSchema = Joi.object({
//     listing: listingSchema.required()
// });


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