let submit=document.getElementById("submit") 
let message=document.getElementById("message") 


let name0=document.getElementById("name")
let phone=document.getElementById("phone")

name0.addEventListener("blur",()=>{

    if(name0.value==""){
      showError("Name cannot be empty")    
      name0.style.boxShadow="2px 2px 2px red"

      return
    }

    let res=validateName()
    checkValid()
    if(res){
       removeError()
      name0.style.boxShadow="none"

    }
    else{
        
    showError("Error:First and Last Names are required!!")
      name0.style.boxShadow="2px 2px 2px red"
      
    }    
})



phone.addEventListener("blur",()=>{
    if(phone.value==""){
        showError("Phone number cannot be empty")    
        name0.style.boxShadow="2px 2px 2px red"
  
        return
      }
    let firstChar=phone.value.charAt(0)
    let decide=/^\d{1}$/.test(firstChar)
    if(!decide){
        showError("Error:Phone number must start with a digit!!")
       phone.style.boxShadow="2px 2px 2px red"
       return
    }
    

   let res= validateNum()
    checkValid()
    if(res){
        removeError()
       phone.style.boxShadow="none"
 
     }
     else{
         
     showError("Error:Phone number must have exactly 6 characters!!")
       phone.style.boxShadow="2px 2px 2px red"
       
     }    


})



// disabling button by default
submit.disabled=true

let result=false
// validating name
function validateName(){

    let name=name0.value
    
    let format=/^[A-Z]{1}[a-z]+\s{0,2}[A-Z]{1}[a-z]+$/
    //Lavanya Lavanya
    result=format.test(name)
    return result
}

//validating number
function validateNum(){
    let phone_=phone.value
    // let format=/^\(?\d{3}\)?\-?[a-z0-9A-Z]{3}\-?[a-z0-9A-Z]{4}?\n{0,2}$/
    let format=/^\d{1}\-?[a-z0-9A-Z]{5}\n{0,2}$/
    result=format.test(phone_)
    return result

}



// if both values are valid button gets enabled
function checkValid(){

    if(validateName() && validateNum()){
        submit.disabled=false
        
    }
    else{
        submit.disabled=true
    }
    
    
}


function showError(msg){
    message.innerHTML=msg
}

function removeError(){
    message.innerHTML=""
}


function submitButton(){
    let username=name0.value
    let phoneN=phone.value

    let radio=Array.from(document.getElementsByClassName("radio"))

    let time;
    radio.forEach((element)=>{
        if(element.checked){
            time=element.value
        }
    })
    let food=[]
    let check=Array.from(document.getElementsByClassName("check"))
    check.forEach((element)=>{
        if(element.checked){
            food.push(element.value)
        }
    })

    let str=""
    // console.log(food)
    food.forEach((item)=>{
        str+=item
        str+=" "
    })

    message.innerHTML=`Reservation for ${username} Phone:(${phoneN}) at ${time}.Starters are:${str} `
}