
let password = "Ashpliler8";
const lower = /[a-z]/;
const upper = /[A-Z]/;
const num = /[0-9]/;
let maxLength = 20;

if(password.length >= 10 && password.length < maxLength && lower.test(password) && num.test(password) && upper.test(password)) {
    console.log('success');
} else{
    console.log('failure');
}