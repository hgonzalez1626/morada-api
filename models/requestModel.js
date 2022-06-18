const moongoose = require("mongoose");
const { Schema } = moongoose;

const RequiereSchema = new Schema(
    {                     
        property_id: {
            type: Schema.Types.ObjectId,
            ref: 'properties',
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        comments: {
            type: String,
            required: true
        }
    },

    { timestamps: true}
);
const Request = moongoose.model("requests", RequiereSchema);

module.exports = Request;
