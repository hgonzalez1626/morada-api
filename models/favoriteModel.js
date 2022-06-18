const moongoose = require("mongoose");
const { Schema } = moongoose;

const FavoriteSchema = new Schema(
    {             
        property_id: {
            type: Schema.Types.ObjectId,
            ref: 'properties',
            require: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            require: true
        }
    },

    { timestamps: true}
);
const Favorite = moongoose.model("favorites", FavoriteSchema);

module.exports = Favorite;
