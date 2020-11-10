const express=require('express');
const router=express.Router();
const ManProducts=require('../../models/ManProducts');
const WomenProducts=require('../../models/WomenProducts');

/* router.all('/*',(request,response,next)=>{
request.app.locals.layout='home';
next();
}) */

router.get('/',(request,response)=>{
    response.render('home/index');
})

router.get('/static/undefined',(request,response)=>{
    response.send('abcd')
})
router.post('/about',(request,response)=>{
     console.log(
        request.files.file.name+"\n"+
        request.body.productname+"\n"+
        request.body.amount+"\n"+
        request.body.SmallSize+"\n"+
        request.body.MediumSize+"\n"+
        request.body.LargeSize+"\n"+
        request.body.isSold+"\n"+
        request.body.isTitles+"\n")
    })


router.post('/addItem',(request,response)=>{ 
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

router.get('/getMenData',(request,response)=>{
    ManProducts.find({}).then(data=>{
         response.json(data);
    })
})

router.get('/getMenData/:id',(request,response)=>{
    ManProducts.findOne({_id:request.params.id}).then(data=>{
        response.json(data);
   })
})

router.get('/getWomenData/:id',(request,response)=>{
    WomenProducts.findOne({_id:request.params.id}).then(data=>{
        response.json(data);
   })
})

router.get('/getWomenData',(request,response)=>{
    WomenProducts.find({}).then(data=>{
         response.json(data);
    })
})

module.exports=router
