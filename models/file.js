const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    owner: String,
    filename: String,
    scope:String
});

const File = mongoose.model('file', FileSchema);

module.exports = {

    File: File,

    getPublicFiles:(res)=>{
        File.find({scope:'public'}).then(files=>{
            if(files){
                res.send(files);
            } else{
                res.send('Brak plików do wyświetlenia');
            }
        })
    },
    getPrivateFiles:(res)=>{
        File.find({ scope: 'private' }).then(files => {
            if (files) {
                res.send(files);
            } else {
                res.send('Brak plików do wyświetlenia');
            }
        })
    },

    saveFile:(res,file)=>{
        new File(file).save(err => {
            if(!err){
                res.send('true');
            }
        })
    },

    checkIfExists:(res,file)=>{
        File.find(file).then(existing=>{
            if(existing.length!=1){
                res.send('false');
            } else{
                res.send('true');
            }
        })
    }
};