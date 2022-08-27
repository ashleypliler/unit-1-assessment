
let password = "ashpliler8";
let lower = /[a-z]/;
let upper = /[A-Z]/;
let num = /[0-9]/;

if(password.length >= 10 && lower.test(password) && num.test(password) || upper.test(password)) {
    console.log('success');
} else{
    console.log('failure');
}