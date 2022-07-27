const mongoose= require('mongoose');

mongoose
.connect("mongodb://localhost/crud-paises2",{
useUnifiedTopology:true,
useNewUrlParser: true
})
.then((db)=>console.log('Db is connected'))
.catch((err)=>console.log(err));

