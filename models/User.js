const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: [{
        title: { type: String },
        body: { type: String }
    }],
    img: {
        type: String
    },
    shelf: [{
        watched: Boolean,
        item: {
            type: Schema.Types.ObjectId,
            ref: "Media"
        }
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    recommendations: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }], 
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);