const{Schema,model} =require('mongoose');

const paisSchema= new Schema({
    nombre: {type: String, required:true},
    capital: {type: String, required:true},
    poblacion: {type: Number, required:true},
    moneda: {type: String, required:true},
    continente: {type: String, required:true},

},{
    timestamps: true,
    versionKey: false
});

module.exports= model('Pais',paisSchema);
