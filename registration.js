var users = [];
function getUser() {
    var OurUsers = localStorage.getItem('User');
    if (OurUsers) {
        return JSON.parse(OurUsers);
    }else return [];
}

var MyUsers = getUser();
// console.log(users);
function registration() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;

    if (name.length == 0 || surname.length == 0 || phone.length == 0 || password.length == 0 || repassword.length == 0 || password !== repassword){
        alert("error");
    } else users.push({
        name: name,
        surname: surname,
        phone: phone,
        password: password,
        repassword: repassword,
    });
    console.log(users);
    FinishReg();
    // var ForLog = document.getElementById('ForLog');
    // if(ForLog.onclick) {
    //     checkForLogIn();
    // }
    
}
function FinishReg() {
    localStorage.setItem("User", JSON.stringify(users));
    InLogInUser();
}
// function checkForLogIn() {
//     var LogPhone = document.getElementById('LogPhone').value;
//     var logPassword = document.getElementById('LogPassword').value;
//     var CheckUserPhone = users.find(function(item) {return item.phone === LogPhone});
//     var CheckUserPassword = users.find(function(item) {return item.password === logPassword});
//     users.forEach((item,index) => {
//         if (LogPhone == CheckUserPhone && logPassword == CheckUserPassword) {
//            console.log('next');
//         }
//     });
// }
/*
function InLogInUser() {
    users.forEach((item, index) => {
        var hearNameUser = document.getElementsByClassName('UserNameHear');
        var ThisUser = document.createElement('span');
        ThisUser.className = 'userName';
        thisUser.innerHTML = item.name;
        hearNameUser.appendChild(thisUser);
    });
}
function checkForLogIn() {
    var LogItems = [];
    var LogPhone = document.getElementById('LogPhone').value;
    var LogPassword = document.getElementById('LogPassword').value;
    LogItems.push({
        LogPhone: LogPhone,
        LogPassword: LogPassword,
    });
    var ForLogPhone = users.find(function(item) {return item.phone === phone });
    var ForLogPassword = user.find(function(item) {return item.password === password });
    var SearchLogPhone = LogItems.find(function(item) {return item.LogPhone === LogPhone });
    var SearchLogPassword = LogItems.find(function(item) {return item.LogPassword === LogPassword });
    LogInDone();
}
function LogInDone() {
    if (ForLogPhone == SearchLogPhone && ForLogPhone == SearchLogPassword) {
        alert('You are Loged In');
    }else {
        alert('Wrong Login or Password');
    }
} */