const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);//Para eliminar warning de consola.


let Schema = mongoose.Schema;

let solveSchema = new Schema({
    userId:{
        type:String,
        required:[true, 'El nombre es necesaio']//Mensaje en caso de faltar nombre
    },
    time:{
        type:Number,
        required: true
    },
    dnf:{
        type:Boolean,
        required:true,
        default:false,
    },
    date:{
        type:Date,
        default:new Date()
    },
    active:{
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('Solve', solveSchema);//Se crea modelo usuario con la configuracion de usuarioSchema