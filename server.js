const express = require ("express")
const bodyparser = require("body-parser");

const app = express()
const PORT = 4000 || env.process.PORT
const parser = bodyparser();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/public')
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/genQr', (req, res) => {
    console.log(req)
})

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})