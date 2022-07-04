const moongoose = require("mongoose");
const bcrypt = require("bcrypt")
const { Schema } = moongoose;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        documentType: {
            type: String,            
            trim: true
        },
        document: {
            type: String,            
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password:{
            type: String,
            required: true,
            trim: true
        },
        phone: String,
        role: {
            type: Number,
            default: 3

        },
        token: String,
        confirmado: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true}
);
    
UserSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
});

UserSchema.methods.checkPassword = async function( passwordFormulario){    
    return await bcrypt.compare(passwordFormulario, this.password);    
};

const User = moongoose.model("users", UserSchema);

module.exports = User;
