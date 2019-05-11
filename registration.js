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
    // checkForLogIn();
}
function FinishReg() {
    localStorage.setItem("User", JSON.stringify(users));
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