const mongoose = require('mongoose');
const excelSchema = new mongoose.Schema({

    name: {
        type: String
    },
    age: {
        type: String

    },
    color: {
        type: String
    }
}

)

module.exports = mongoose.model('excelData', excelSchema);