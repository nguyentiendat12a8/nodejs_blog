const mongoose = require('mongoose');
async function connect() {
    try {
        //await mongoose.connect('mongodb://localhost:27017/dat_blog', {
        await mongoose.connect('mongodb+srv://nguyentiendat12a8:sofm27112000@cluster0.qaz2s.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('connect db successfully!!');
    } catch (error) {
        console.log('connect to db failed');
    }
}

module.exports = { connect };
