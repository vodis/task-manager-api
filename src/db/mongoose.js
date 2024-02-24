const mongoose = require('mongoose')
const dotenv = require('dotenv')

const result = dotenv.config({ path: '.env' })
if (result.error) {
    throw result.error;
}

mongoose.connect(process.env.MONGODB_URL)
