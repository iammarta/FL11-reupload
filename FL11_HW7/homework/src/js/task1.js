let email = prompt('Please, enter your email');
let emailLength = 6;
let newPasswordLength = 5;

if (email === '' || email === null){
    alert('Cancel');
}else if (email.length < emailLength){
    alert('I don\'t know any emails having name length less than 6 symbols')
}else if(email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please, enter the password');
    if (password === '' || password === null) {
        alert('Canceled');
    }else if 
    (email === 'user@gmail.com' && password === 'UserPass' || email === 'admin@gmail.com' && password === 'AdminPass'){
            let changePass = confirm('Do you want to change the password?');
            if(changePass === true){
                let oldPass = prompt('Please, enter the old password');
                if(oldPass === 'UserPass' || oldPass === 'AdminPass' ){
                    let newPass = prompt('Please, enter the new password');
                if (newPass.length < newPasswordLength){
                    alert('It\'s too short password. Sorry.');
                }else{
                    let newPassAgain = prompt('Please, enter the new password again');
                    if (newPassAgain === newPass){
                        alert('You have successfully changed your password.');
                    }else {
                        alert('You have failed the change');
                    }
                }
             }else {
                    alert('You wrote the wrong password.');
                }
             }else {
                 alert('You have failed the change.');
             }
        }else {
         alert('Wrong Password');
        }
}else {
    alert('I don\'t know you');
}
