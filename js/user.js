const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.querySelector('#register');
const registerMessage = document.querySelector('.register-message');

let mainUsers = [
  {
    id: 1,
    email: 'luma@gmail.com',
    password: 'Asdfghjkl1*'
  },
  {
    id: 2,
    email: 'osama@gmail.com',
    password: 'Asdfghjkl1*'
  },
  {
    id: 2,
    email: 'omar@gmail.com',
    password: 'Asdfghjkl1*'
  },
  {
    id: 2,
    email: 'sara@gmail.com',
    password: 'Asdfghjkl1*'
  },
]


let users = JSON.parse(localStorage.getItem('users')) ?  JSON.parse(localStorage.getItem('users')) : mainUsers;

localStorage.setItem('users', JSON.stringify(users));



form.addEventListener('submit' , (event) => {
  event.preventDefault();
  registerMessage.textContent = '';
  
  function checkEmail(email) {
    if ( users.some( (user) => user.email === email.value ) ) {
      registerMessage.textContent += 'Email already exists';
      email.focus();
      return false
    }
    return true
  }
  

  function checkPasswordConfirm(password , confirmPassword) {
    if (password.value !== confirmPassword.value) {
      registerMessage.textContent += ' Passwords do not match';
      password.value = '';
      confirmPassword.value = '';
      password.focus();
      registerMessage.style.color = "red";
      return false
    }
    return true
  }
  
  
  function minLength(password) {
    if ((password.length <= 8)) {
      registerMessage.textContent += "❌ Password is at least 8 characters long.";
      return false;
    }
    return true;
  }
  function hasUpperCase(password) {
    if (!(/[A-Z]/.test(password))) {
      registerMessage.textContent += "❌ Password must contain at least one uppercase letter.";
      return false;
    } 
    return true;
  }
  function hasNumber(password) {
    if (!(/\d/.test(password))) {
      registerMessage.textContent += "❌ Password must contain at least one number.";
      return false;
    }
    return true;
  }
  function hasSpecialChar(password) {
    if (!(/[!@#$%^&*(),.?":{}|<>]/.test(password))) {
      registerMessage.textContent += "❌ Password must contain at least one special character.";
      return false;
    }
    return true;
  }

  
  if (minLength(password.value) && hasUpperCase(password.value) 
      && hasNumber(password.value) && hasSpecialChar(password.value) 
      && checkEmail(email) && checkPasswordConfirm(password , confirmPassword)) {
      registerMessage.textContent = "✅ Registered successfully";
      registerMessage.style.color = "green";
      
      const user = {
        id: users.length + 1,
        email: email.value,
        password: password.value
      }
      
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      window.location.reload();
  } else {
      registerMessage.style.color = "red";
  }
  
})





// login
const formLogin=document.getElementById("login-form")
const loginEmail =document.getElementById("loginEmail")
const loginPassword=document.getElementById("loginPassword")
const loginMessage=document.querySelector(".login-message")




formLogin.addEventListener('submit', (event)=>{
event.preventDefault()
// loginMessage.textContent=''

users=JSON.parse(localStorage.getItem('users'))

let customer= users.filter(user => user.email=== loginEmail.value)

if (customer[0] ){
if(customer[0].password===loginPassword.value
){
  console.log(customer[0].id);
  const userData = {
    id: customer[0].id,
    history: [],
  }
  loginMessage.textContent="Logged in successfully";
  localStorage.setItem('user',JSON.stringify(userData))
  window.location.href="../pages/jobsList.html"

  
}else { loginMessage.textContent="Wrong password"

}

}else{
  loginMessage.textContent="Email not found"
}
})

