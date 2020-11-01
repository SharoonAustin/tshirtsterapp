const express=require('express');
const mongoose=require('mongoose');
const ManProducts=require('./models/ManProducts');
const WomenProducts=require('./models/WomenProducts');
const path=require('path');
const upload=require('express-fileupload');
const exphbs=require('express-handlebars');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
const { response } = require('express');

/* app.use(express.static(path.join(__dirname,'public'))); */
app.use(cors())
app.use('/static', express.static(path.join(__dirname,'public')));

app.engine('handlebars',exphbs({defaultLayout:'home'}))
app.set('view engine','handlebars');
app.use(upload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://mongodbuser:9928530203@cluster0.rdza6.mongodb.net/test',{ useNewUrlParser: true,useUnifiedTopology: true },(err,client)=>{
    console.log('Connected')
})

const port=process.env.PORT||3000;

app.get('/',(request,response)=>{
    response.render('home/index');
})

app.get('/static/undefined',(request,response)=>{
    response.send('abcd')
})
app.post('/about',(request,response)=>{
    const arr=[];
    arr.push(request.body.size);
    console.log(
        request.files.file.name+"\n"+
        request.body.productname+"\n"+
        request.body.amount+"\n"+
        request.body.SmallSize+"\n"+
        request.body.MediumSize+"\n"+
        request.body.LargeSize+"\n"+
        request.body.isSold+"\n"+
        request.body.isTitles+"\n")
    console.log("here is your array: "+arr);
    })

/* app.post('/addManItem',(request,response)=>{
    let file=request.files.file
    const fileName=Date.now()+"_"+file.name;
    file.mv('./public/'+fileName,(err)=>{
        if(err) throw err;
    })

    const product=new ManProducts({
        image: fileName,
        productname:request.body.productname,
        amount:request.body.amount,
        size: request.body.size,
        SmallSize:request.body.SmallSize,
        MediumSize:request.body.MediumSize,
        LargeSize:request.body.LargeSize,
        isSold:request.body.isSold
    })
    product.save((err,data)=>{
        if(err) throw err;
        response.send('Congrats data has been saved successfully')
    })

})
 */

app.post('/addItem',(request,response)=>{ 
    const collectionName=request.body.isTitles;
    let file=request.files.file
    const fileName=Date.now()+"_"+file.name;
    file.mv('./public/'+fileName,(err)=>{
        if(err) throw err;
    })
    let product
    if(collectionName==="ManProducts"){
    product=new ManProducts({
        image: fileName,
        productname:request.body.productname,
        amount:request.body.amount,
        size: request.body.size,
        Small:request.body.SmallSize,
        Medium:request.body.MediumSize,
        Large:request.body.LargeSize,
        isSold:request.body.isSold
    })
}
else{
    product=new WomenProducts({
        image: fileName,
        productname:request.body.productname,
        amount:request.body.amount,
        size: request.body.size,
        Small:request.body.SmallSize,
        Medium:request.body.MediumSize,
        Large:request.body.LargeSize,
        isSold:request.body.isSold
    })
}
    product.save((err,data)=>{
        if(err) throw err;
        response.send('Congrats data has been saved successfully')
    })
});

    app.get('/getMenData',(request,response)=>{
    ManProducts.find({}).then(data=>{
         response.json(data);
    })
})

app.get('/getMenData/:id',(request,response)=>{
    ManProducts.findOne({_id:request.params.id}).then(data=>{
        response.json(data);
   })
})

app.get('/getWomenData/:id',(request,response)=>{
    WomenProducts.findOne({_id:request.params.id}).then(data=>{
        response.json(data);
   })
})

app.get('/getWomenData',(request,response)=>{
    WomenProducts.find({}).then(data=>{
         response.json(data);
    })
})


if(process.env.NODE_ENV === "production"){
    app.use(express.static('frontendcode/public'))

    app.get('*',(request,response)=>{
        response.sendFile(app.join(__dirname,'frontendcode','public','index.html'));
    })
}

app.listen(port,()=>{
console.log('App is up and running')
})