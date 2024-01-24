let submit=document.getElementById("submit")   

// disabling button by default
submit.disabled=true

let result=false
// validating name
function validateName(){

    let name=document.getElementById("name").value
    let format=/^[A-Z]{1}[a-z]+\s{0,2}[A-Z]{1}[a-z]+$/
    //Lavanya Lavanya
    result=format.test(name)
    return result
}

//validating number
function validateNum(){
    let phone=document.getElementById("phone").value
    let format=/^\(?\d{3}\)?\-?[a-z\dA-Z]{3}\-[a-z\dA-Z]{4}?\n{0,2}$/
    result=format.test(phone)
    console.log(result)
    return result

}

let interval=setInterval(checkValid,500)


// if both values are valid button gets enabled
function checkValid(){

    if(validateName() && validateNum()){
        submit.disabled=false
        
    }
    if(!submit.disabled){
        clearInterval(interval)
    }
}
