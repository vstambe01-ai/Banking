
function createAccount(){
let user={name:name.value,acc:acc.value,balance:0};
localStorage.setItem('user',JSON.stringify(user));
msg.innerText='Account Created';
}
let u=JSON.parse(localStorage.getItem('user')||'null');
if(document.getElementById('info')&&u){
info.innerText='Name: '+u.name+' Account: '+u.acc;
balance.innerText='Balance: ₹'+u.balance;
}
function deposit(){
let u=JSON.parse(localStorage.getItem('user'));
u.balance+=Number(amount.value);
localStorage.setItem('user',JSON.stringify(u));
balance.innerText='Balance: ₹'+u.balance;
}
function withdraw(){
let u=JSON.parse(localStorage.getItem('user'));
if(Number(amount.value)<=u.balance){u.balance-=Number(amount.value);}
localStorage.setItem('user',JSON.stringify(u));
balance.innerText='Balance: ₹'+u.balance;
}
