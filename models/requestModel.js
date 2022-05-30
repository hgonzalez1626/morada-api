const moongoose = require("mongoose");
const { Schema } = moongoose;

const RequiereSchema = new Schema(
    { 
        comments: String,            
        property_id: {
            type: Schema.Types.ObjectId,
            ref: 'properties'
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },

    { timestamps: true}
);
const Request = moongoose.model("requests", RequiereSchema);

module.exports = Request;
