const request=require('request')
var i =0
const cowin=(pincode,date,callback)=>{
 var os = require('os');
    const url= 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pincode+'&date='+date
        request({ url:url,json:true},(error,{body})=>{

    if(error){
        callback("Unable to connect to cowin")
    }
    else if(body.error){
        callback('Unable to find pincode')
    }   else{
        if(body.sessions.length==0)
        {
             callback(undefined,'No vaccine centres available.')
        }


        if(body.sessions.length==1){
  callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine)
}
if(body.sessions.length==2){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine)
  }
  if(body.sessions.length==3){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine+'\n'+body.sessions[2].name+' Available-capacity: ' +body.sessions[2].available_capacity+' Vaccine-name:'+body.sessions[2].vaccine)
  }
  if(body.sessions.length==4){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine+'\n'+body.sessions[2].name+' Available-capacity: ' +body.sessions[2].available_capacity+' Vaccine-name:'+body.sessions[2].vaccine+'\n'+body.sessions[3].name+' Available-capacity: ' +body.sessions[3].available_capacity+' Vaccine-name:'+body.sessions[3].vaccine)
  }
  if(body.sessions.length==5){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine+'\n'+body.sessions[2].name+' Available-capacity: ' +body.sessions[2].available_capacity+' Vaccine-name:'+body.sessions[2].vaccine+'\n'+body.sessions[3].name+' Available-capacity: ' +body.sessions[3].available_capacity+' Vaccine-name:'+body.sessions[3].vaccine+'\n'+body.sessions[4].name+' Available-capacity: ' +body.sessions[4].available_capacity+' Vaccine-name:'+body.sessions[4].vaccine)
  }
  if(body.sessions.length==6){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine+'\n'+body.sessions[2].name+' Available-capacity: ' +body.sessions[2].available_capacity+' Vaccine-name:'+body.sessions[2].vaccine+'\n'+body.sessions[3].name+' Available-capacity: ' +body.sessions[3].available_capacity+' Vaccine-name:'+body.sessions[3].vaccine+'\n'+body.sessions[4].name+' Available-capacity: ' +body.sessions[4].available_capacity+' Vaccine-name:'+body.sessions[4].vaccine+'\n'+body.sessions[5].name+' Available-capacity: ' +body.sessions[5].available_capacity+' Vaccine-name:'+body.sessions[5].vaccine)
  }
  if(body.sessions.length==7){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine+'\n'+body.sessions[2].name+' Available-capacity: ' +body.sessions[2].available_capacity+' Vaccine-name:'+body.sessions[2].vaccine+'\n'+body.sessions[3].name+' Available-capacity: ' +body.sessions[3].available_capacity+' Vaccine-name:'+body.sessions[3].vaccine+'\n'+body.sessions[4].name+' Available-capacity: ' +body.sessions[4].available_capacity+' Vaccine-name:'+body.sessions[4].vaccine+'\n'+body.sessions[5].name+' Available-capacity: ' +body.sessions[5].available_capacity+' Vaccine-name:'+body.sessions[5].vaccine+'\n'+body.sessions[6].name+' Available-capacity: ' +body.sessions[6].available_capacity+' Vaccine-name:'+body.sessions[6].vaccine)
  }
  if(body.sessions.length==8){
    callback(undefined,body.sessions[0].name+' Available-capacity: ' +body.sessions[0].available_capacity+' Vaccine-name:'+body.sessions[0].vaccine+'\n'+body.sessions[1].name+' Available-capacity: ' +body.sessions[1].available_capacity+' Vaccine-name:'+body.sessions[1].vaccine+'\n'+body.sessions[2].name+' Available-capacity: ' +body.sessions[2].available_capacity+' Vaccine-name:'+body.sessions[2].vaccine+'\n'+body.sessions[3].name+' Available-capacity: ' +body.sessions[3].available_capacity+' Vaccine-name:'+body.sessions[3].vaccine+'\n'+body.sessions[4].name+' Available-capacity: ' +body.sessions[4].available_capacity+' Vaccine-name:'+body.sessions[4].vaccine+'\n'+body.sessions[5].name+' Available-capacity: ' +body.sessions[5].available_capacity+' Vaccine-name:'+body.sessions[5].vaccine+'\n'+body.sessions[6].name+' Available-capacity: ' +body.sessions[6].available_capacity+' Vaccine-name:'+body.sessions[6].vaccine+'\n'+body.sessions[7].name+' Available-capacity: ' +body.sessions[7].available_capacity+' Vaccine-name:'+body.sessions[7].vaccine)
  }


}})
}
module.exports=cowin