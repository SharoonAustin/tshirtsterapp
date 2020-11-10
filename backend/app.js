const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const upload=require('express-fileupload');
const exphbs=require('express-handlebars');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
const { response } = require('express');
const main=require('./routes/home/main')
const {MONGOURI}=require('./config/key')
app.use(cors())
app.use('/static', express.static(path.join(__dirname,'public')));

app.engine('handlebars',exphbs({defaultLayout:'home'}))
app.set('view engine','handlebars');
app.use(upload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.Promise=global.Promise;
mongoose.connect(MONGOURI,{ useNewUrlParser: true,useUnifiedTopology: true },(err,client)=>{
    console.log('Connected')
})

app.use('/',main)

const port=process.env.PORT||3000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontendcode/public'))

    app.get('*',(request,response)=>{
        response.sendFile(path.join(__dirname,'frontendcode','public','index.html'));
    })
}

app.listen(port,()=>{ 
console.log('App is up and running')
})