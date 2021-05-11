var mongoose = require("mongoose")
//SCHEMA SETUP
var productSchema = new mongoose.Schema({
    barcodeId: {
        type: Number,
        required: true
    },
    barcodeType: String,
    productGroup: String,
    modelIdentifier: String,
    manufacturerName: String,
    brand:String,
    overall_rating: {
        type: Number,
        min:0,
        max:5
    },
    materials: {
        type: Number,
        min:0,
        max:5
    },
    production: {
        type: Number,
        min:0,
        max:5
    },
    impact: {
        type: Number,
        min:0,
        max:5
    },
    recycle: {
        type: Number,
        min:0,
        max:5
    }
})

//Compile into model
module.exports = mongoose.model("product", productSchema)