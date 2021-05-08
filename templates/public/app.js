const Form=document.querySelector('form')
const search1 =document.getElementById('input1')
const search2 =document.getElementById('input2')

const messageOne= document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
// messageOne.textContent='from javascript'

Form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const pincode = search1.value
    const date=search2.value
    console.log(pincode)
    console.log(date)
    
fetch('/info/?pincode='+pincode+'&date='+date).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           messageOne.textContent="cannot load"
        }
        else{
           messageOne.textContent=data.output
         
        }
    })
})

})