const paisesCtrl={};

paisesCtrl.getPaises= (req,res)=>{
  req.getConnection((err,conn) => {
      conn.query('select * from pais_',(err,rows) => {
          if(err){
              res.json(err);
          }
          res.json(rows);
          console.log("Base de datos:");
          console.log("");
          console.log(rows);
      });
  });
};


paisesCtrl.getPais = (req,res)=>{
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM pais_ WHERE id = ?',[id],(err,rows) => {
            res.json(rows);
            console.log("Base de datos:");
            console.log("Pais: ");
            console.log("");
            console.log(rows);
        });
    });
}

paisesCtrl.createPaises= (req,res)=>{
  const data= req.body;
  console.log(data);
  req.getConnection((err,conn) => {
      conn.query('INSERT INTO pais_ SET ?',[data],(err,pais) => {
          if(err){
            console.log("Error: ",err);
          }
          res.redirect('/paises');
          console.log('Pais creado');
      });
  });

};

// paisesCtrl.getPaises= (req,res)=>{
//   const {id}= req.params;
//   req.getConnection((err,conn) => {
//       conn.query('SELECT * FROM pais WHERE id = ?', [id],(err,rows) =>{
//           res.json(rows);
//       })

//   })
// }

paisesCtrl.editPaises= (req,res) => {
    const { id }= req.params;
    const data= req.body;
  req.getConnection((err,conn) => {
      conn.query('UPDATE pais_ SET ? WHERE id = ?', [data,id],(err,rows) => {
        
        if(err){
            console.log(err);
        }

        res.redirect('/paises')
        console.log(rows);
        console.log("Pais editado");
      })
  })
}

//Eliminar paises
paisesCtrl.deletePaises= (req,res) => {
  const { id }= req.params;
  req.getConnection((req,conn) => {
      conn.query('DELETE FROM pais_ WHERE id = ?', [id],(err,rows) =>{
          res.send(rows);
          console.log("Pais eliminado");
      });
  });
};


module.exports = paisesCtrl;

