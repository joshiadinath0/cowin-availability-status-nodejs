const cowin=require('./utils/cowin')
const path = require('path')
const express=require('express')
const hbs=require('hbs')
const { brotliDecompressSync } = require('zlib')
const port = process.env.PORT || 3000


const app=express()
const publicDirectoryPath=path.join(__dirname,'templates/public')
const viewsPath=path.join(__dirname,'templates/views')
const partialsPath=path.join(__dirname,'templates/partials')
hbs.registerPartials(partialsPath)

//Setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)

hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


//////////////////////////

app.get('',(req,res)=>{

res.render('index',{
title:'Corona vaccination Schedule',
name:'Adinath Joshi'
})
})


app.get('/info', (req, res) => {
    cowin(req.query.pincode,req.query.date,(error,output)=>{
    if(error){
        return console.log('Error has occured, unable to find pincode')
    }
    res.send({
        output:output,
        date:req.query.date,
        pincode:req.query.pincode
    })
})
})





app.listen(port,()=>{
    console.log('Server is running on port ' + port)
})
