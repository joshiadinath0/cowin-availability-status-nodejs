const cowin=require('./utils/cowin')
const path = require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()

app.set( 'port', ( process.env.PORT || 5000 ));


const publicDirectoryPath=path.join(__dirname,'templates/public')
const viewsPath=path.join(__dirname,'templates/views')

//Setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


//////////////////////////

app.get('',(req,res)=>{

res.render('index',{
title:'Corona vaccination',
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
        pincode:req.query.pincode,
        date:req.query.date
        
    })
})
})

app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });
