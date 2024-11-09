import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    userName : {
        type: String,
        require: true,

    },

    firstName : {
        type: String, 
        required: true,

    },
    lastName : {
        type: String, 
        require: true, 

    },
    title : {
        type: String,
        require: true,
    },
    quote: {
        type: String,
        required: true,

    }
})


export default mongoose.model("employee", employeeSchema)