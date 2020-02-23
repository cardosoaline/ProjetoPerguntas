const express = require("express");
const app = express();

// Estou dizendo para o express ultilizar o ejs
app.set('view engine', 'ejs');

app.get("/:nome/:lang",(req, res) =>{
    var nome = req.params.nome; //Para pegar paramentros.
    var lang = req.params.lang;
    var exibirMsg = true;
    res.render("index",{
        nome:nome,
        lang:lang,
        empresa: "Guia do programador",
        inscritos:8000,
        msg: exibirMsg
    });
});

app.listen(8080,()=>{console.log("App rodando!");});