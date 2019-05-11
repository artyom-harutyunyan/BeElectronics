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
}
function FinishReg() {
    localStorage.setItem("User", JSON.stringify(users));
}