import mongoose from "mongoose";
const {Schema, model} = mongoose;
const reqErrMsg = '*This is a required field.'

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verifyOtp: {
        type: String,
        default: ''
    },
    verifyOtpExpireAt: {
        type: Number,
        default: 0
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    resetOtp: {
        type: String,
        default: ''
    },
    resetOtpExpireAt: {
        type: Number,
        default: 0
    }
})

// const user = new Schema({
//     firstname: {
//         type: String,
//         required: [true, reqErrMsg]
//     },
//     middlename: {
//         type: String,
//         required: [true, reqErrMsg]
//     },
//     lastname: {
//         type: String,
//         required: [true, reqErrMsg]
//     },
//     email: {
//         type: String,
//         required: [true, reqErrMsg],
//         validate: {
//             validator: function (v) {
//                 // const checkValidEmail = (v) => {
//                 //     const indexOfAtSign = v.indexOf("@");
//                 //     const checkAtSignOccurrences = () => {
//                 //         const occurenceCount = 0;
//                 //         for (const char of v) {
//                 //             char == "@" && occurenceCount++; //if @ is doubled, will increment occurenceCount
//                 //         }
//                 //         return occurenceCount > 1 ? true : false;
//                 //     }

//                 //     //check all of these if working
//                 //     return (!(v.includes(" ")) //no spaces
//                 //         && (indexOfAtSign != -1) //has @
//                 //         && (indexOfAtSign != 0) //at least 1 character is preceding @
//                 //         && (v.lastIndexOf(".") != (v.length - 1)) //check if TLD exists (. is not at the last index)
//                 //         && (checkAtSignOccurrences())
//                 //     ) ? true : false;
//                 // }
//                 // return checkValidEmail(v);

//                 //regex alternative
//                 const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 return regEmail.test(v);

//             }
//         },
//         unique: [true, 'Email already exists.']
//     },
//     password: {
//         type: String,
//         required: [true, reqErrMsg],
//         min: [8, 'Must be at least 8 characters'],
//         validate: {
//             validator: function(v) {
                
//                 const checkPassword = (v) => {
//                     ((checkSymbols(v)) && (/[A-Z]/.test(v))) ? true : false;
//                     //validation if the password contains any of the required characters. (check if working)
//                     //validation if password contains an uppercase letter
//                 }

//                 const checkSymbols = (v) => {
//                     const arr = ['!','?','-','_','%','@','.'];
//                     let char = "";
//                     for (char of v) {
//                         if(arr.includes(char)) {
//                             return true;
//                         }
//                     }

//                     return false;
//                 }
//                 return checkPassword(v);
//             },
//             message: 'The password must have at least one (1) uppercase letter and contain at least one the following characters: .,!,@,?,-,_,%'
//         }
//     },
//     passwordConfirm: {
//         type: String,
//         required: [true, reqErrMsg],
//         validate: {
//             validator: function(v) {
//                 return v === this.password;
//             },
//             message: 'Passwords do not match. Please re-check.'
//         }

//     },
//     image: {
//         type: String,
//         default: '/public/images/avatar.png'
//     }
// }, {
//     timestamps: true
// })

const User = mongoose.models.user || model('User', user);
export default User;