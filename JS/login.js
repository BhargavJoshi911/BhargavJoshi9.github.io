
//USER
const loginform = function(){
    let login1 = document.getElementById("login1");
    let email = login1.elements[0].value;
    let pwd = login1.elements[1].value;

    console.log(email);

    if(email === "xyz@gmail.com" && pwd === "xyz"){
        window.location = "/user/User_Home.html";
        //window.location="www.google.com";
    }
    else{
        alert('invalid email or password');
    }
}


//Admin
const loginform1 = function(){
    let login1 = document.getElementById("login1");
    let email = login1.elements[0].value;
    let pwd = login1.elements[1].value;

    if(email === "admin@gmail.com" && pwd === "admin"){
        window.location = "/Admin/Admin_Home_Update.html";
    }
    else{
        alert('invalid email or password');
    }
}