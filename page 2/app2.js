const formReg = document.getElementById('regform');
let firstName = document.getElementById("fname").value;
let lastName = document.getElementById("lname").value;
let Email = document.getElementById("Email").value;
let conEmail = document.getElementById("cEmail").value;
let password = document.getElementById("password").value;
let conpassword = document.getElementById("cpassword").value;
let arry = [];

function storeInLocalStorage(){
    let arryToString= JSON.stringify(arry);
    localStorage.setItem(arry[0].Email,arryToString)
}



    

function User(firstName, lastName, Email, conEmail, password, conpassword,topic) {
    
    this.firstName =firstName;
    this.checkFN= validateName(this.firstName);
    this.lastName = lastName;
    this.checkLN= validateNamel(this.lastName)
    this.Email = Email;
    this.checkE=validateEmail(this.Email)
    this.conEmail = conEmail;
    this.checkCE=validatecEmail(this.conEmail,this.Email)
    this.password = password;
    this.checkP =checkPassword(this.password)
    this.conpassword = conpassword;
    this.checkCP= checkcPassword(this.conpassword,this.password);
    this.topic= topic;


    
    if (this.checkFN && this.checkLN && this.checkE && this.checkCE && this.checkP && this.checkCP ){

        arry.push(this);
        storeInLocalStorage();
        document.getElementById('butt').href='../page 3/loginpage.html';
    }
    

}

formReg.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    let Email = event.target.Email.value;
    let conEmail = event.target.conEmail.value;
    let password = event.target.password.value;
    let conpassword = event.target.conpassword.value;
    let topic = event.target.topic.value;
    console.log(topic , "thisistopic");

    new User(firstName, lastName, Email, conEmail, password, conpassword,topic);
    

    
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//** 



function validateName(a){
    document.getElementById('one').style.display = 'none';
    document.getElementById('e1').innerHTML = '';
    let letters = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    if (letters.test(a)) {
        console.log(a);
        return true;
    }
    else  {
        document.getElementById('one').style.display = 'inline';
        document.getElementById('e1').innerHTML = 'Name field required only alphabet characters';
        return false;
    }
} 
//** 
function validateNamel(a){
    document.getElementById('three').style.display = 'none';
    document.getElementById('e4').innerHTML = '';
    let letters = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    if (letters.test(a)) {
        console.log(a);
        return true;
    }
    else  {
        document.getElementById('three').style.display = 'inline';
        document.getElementById('e4').innerHTML = 'Name field required only alphabet characters';
        return false;
    }
}

//** 
function validateEmail(a){
    document.getElementById('five').style.display = 'none';
        document.getElementById('e2').innerHTML = '';
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(a)) {
        document.getElementById('five').style.display = 'inline';
        document.getElementById('e2').innerHTML = 'Invalid email,, EX:aS_23.@example.com';
        return false;
    }else{
        console.log(a);
        return true;
        
    }
}
//** 
function validatecEmail(a,b){
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
if (a != b) {
    console.log(a,b);
    document.getElementById('seven').style.display = 'inline';
    document.getElementById('eight').style.display = 'block';
    return false;
}else{
    console.log(a,b);
    return true
}
}

//** */ 

function checkPassword(password) {
    document.getElementById('nighn').style.display = 'none';
    document.getElementById('ten').style.display = 'none';
    document.getElementById('ten').innerHTML = ``;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num = /[\d]{2,}/;
    let capital = /[A-Z]/;
    let symboles = /[#$@!%&*?]/;
    if ((regex.test(password))) { //To check from 2 passwords syntax
        
        passwordError.innerHTML = 'password syntax is Incorrect';
        return false;

    }
    else if ((!capital.test(password[0]))) { //To check from the first letter
        document.getElementById('nighn').style.display = 'inline';
        document.getElementById('ten').style.display = 'block';
        document.getElementById('ten').innerHTML = 'first letter must be capital';
        return false;
    }
    else if ((!num.test(password))) {
       
        document.getElementById('nighn').style.display = 'inline';
        document.getElementById('ten').style.display = 'block';
        document.getElementById('ten').innerHTML = 'password must contain 2 numbers at least';
        return false;
    }
    else if ((!symboles.test(password))) {
      
        document.getElementById('nighn').style.display = 'inline';
        document.getElementById('ten').style.display = 'block';
        document.getElementById('ten').innerHTML = 'password must contain  at least 1 character';
        return false;
    }
    else if ((password.length >= 8 && password.length <= 32)) {
        console.log('password syntax is correct');
        return true;
    } else {
        console.log(`Passwords length must be more than 8 or less than 32`);
        document.getElementById('nighn').style.display = 'inline';
        document.getElementById('ten').style.display = 'block';
        document.getElementById('ten').innerHTML = `Passwords length must be more than 8 or less than 32`;
        return false;
    }
}

function checkcPassword(a,b){
    document.getElementById('oneO').style.display = 'none';
    document.getElementById('twoT').style.display = 'none';
    if (a != b) {
        document.getElementById('oneO').style.display = 'inline';
        document.getElementById('twoT').style.display = 'block';
        return false;
    }else{
        console.log(a,b);;
        return true;
    }
}











