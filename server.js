import app from "./app.js"
import bodyParser from "body-parser"

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.listen(PORT, ()=>{
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})

