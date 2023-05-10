import mongoose from "mongoose";

mongoose.Schema({
    tokenID: {
        type: String,
    },
    tokenURI: {
        type: String,
    },
    employeeAddress: {
        type: String,
    },
    txID: {
        type: String,
    },
    blockNo: {
        type: String,
    },
    contractAddress: {
        type: String,
    },
})