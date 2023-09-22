const form=document.getElementById("form")


const uname=document.getElementById("uname")

console.log(uname)
const email=document.getElementById("email")


const password=document.getElementById("password")


const cpassword=document.getElementById("cpassword")


const ch=document.getElementById("ch")


form.addEventListener('submit',(e)=>{
    console.log(e)
    e.preventDefault()
    
    validation()
})

function validation(){
   
    let nvalue = uname.value.trim()
    let evalue=email.value.trim()
    let pvalue=password.value.trim()
    let cvalue=cpassword.value.trim()
    let tc=ch.value

 
/*checks the name value*/

if(nvalue==='')
{
    setError(uname," User name can't be empty")
}
else if(nvalue.length<3)
{
    setError(uname,"User name can't be less than 3 characters")
}
else
{ 
    setSuccess(uname)
}


//email verification

if(evalue==='')
{
    setError(email,"Please enter your email")
}
else if(!emailcheck(evalue)){
    setError(email,"email is invalid")
}
else{
    setSuccess(email)
}

//password verfication
if(pvalue==='')
{
    setError(password,"Please enter your password")
}
else if(pvalue.length<8){
    setError(password,"password can't be less than 8 characters")
}
else{
    setSuccess(password)
}
//password conformation
if(cvalue==='')
{
    setError(cpassword,"Please enter your password")
}
else if(cvalue!=pvalue){
    setError(cpassword,"password doesn't match")
}
else{
    setSuccess(cpassword)
}
//terms and condition
console.log(tc.checked)
if(!tc.checked){
    setError(ch,"please click check box")
}
else{
    setSuccess(ch)
}


}

function setError(input,message){
    let parent=input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccess(input){
    let parent=input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailcheck(input){
    let emailReg=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid=emailReg.test(input)
    console.log(valid)
    return valid
}