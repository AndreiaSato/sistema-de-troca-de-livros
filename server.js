import app from "./app.js" //importando o arquivo onde tem todas as configuraçãoe do servidor

const PORT = process.env.PORT || 3000 // identifica a porta utilizada pelo servidor

//app.set('view engine', 'ejs');
app.listen(PORT, ()=>{
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`) //cria o servidor com a porta definida e exibe a URL
})

