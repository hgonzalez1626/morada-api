const moongoose = require("mongoose");
const { Schema } = moongoose;

const PropertySchema = new Schema(
    {
        title: String,
        city: Number,
        zone: Number,
        propertyType: Number, 
        bussinessType:Number,        
        mainImage:[String],
        ownerId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        value: Number,
        shortDescription: String,
        description: String,
        status: Number
    },

    { timestamps: true}
);
const Property = moongoose.model("properties", PropertySchema);

module.exports = Property;
