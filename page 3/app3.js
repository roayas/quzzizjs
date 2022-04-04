let email = document.getElementById('email');
let passsword = document.getElementById("password")

function getinfofromlocal(){
   

    let userinfo=localStorage.getItem(email.value);
    console.log(userinfo);
    if(userinfo)
    {
    let userinfoObj = JSON.parse(userinfo)
    console.log(userinfoObj);
    console.log(userinfoObj[0].password);
    
    console.log(passsword.value);

    // document.getElementById('twoT').style.display='';
    // document.getElementById('two').style.display=''
    
    if(userinfoObj[0].password == passsword.value)
    {
        let storeTopic= userinfoObj[0].topic;
        let storeName= userinfoObj[0].firstName;
        window.location.href='../Page4/Page4.html';
        let storTopicSt= JSON.stringify(storeTopic);
        let storeNameSt= JSON.stringify(storeName);
        localStorage.setItem('topic',storTopicSt);
        localStorage.setItem('name',storeNameSt)
        console.log(storTopicSt);

    }else
    {
        document.getElementById('twoT').style.display='inline';
        document.getElementById('two').style.display='block';
    }
    }
    else
    {
        document.getElementById('oneO').style.display='inline';
        document.getElementById('one').style.display='block';
    }
}
