// Form validation logic for Lab 3
const form = document.getElementById('regForm');
const fields = {
  fullName: document.getElementById('fullName'),
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  age: document.getElementById('age'),
  password: document.getElementById('password'),
  confirmPassword: document.getElementById('confirmPassword'),
  eventType: document.getElementById('eventType'),
  agree: document.getElementById('agree')
};
const errors = {
  fullName: document.getElementById('err-fullName'),
  email: document.getElementById('err-email'),
  phone: document.getElementById('err-phone'),
  age: document.getElementById('err-age'),
  password: document.getElementById('err-password'),
  confirmPassword: document.getElementById('err-confirmPassword'),
  eventType: document.getElementById('err-eventType'),
  agree: document.getElementById('err-agree')
};
const message = document.getElementById('formMessage');

// Regex patterns
const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRE = /^\d{10}$/;
const pwdRE = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // min 8, letters+numbers

// Real-time validation
fields.fullName.addEventListener('input', ()=> validateFullName());
fields.email.addEventListener('input', ()=> validateEmail());
fields.phone.addEventListener('input', ()=> validatePhone());
fields.age.addEventListener('input', ()=> validateAge());
fields.password.addEventListener('input', ()=> validatePassword());
fields.confirmPassword.addEventListener('input', ()=> validateConfirmPassword());
fields.eventType.addEventListener('change', ()=> validateEvent());
fields.agree.addEventListener('change', ()=> validateAgree());

function setError(field, msg){
  errors[field].textContent = msg || '';
  if(msg) fields[field].classList.add('invalid');
  else fields[field].classList.remove('invalid');
}

function validateFullName(){
  const v = fields.fullName.value.trim();
  if(!v) { setError('fullName','Full name is required'); return false; }
  if(v.length < 3 || v.length > 80) { setError('fullName','Name must be 3–80 characters'); return false; }
  setError('fullName',''); return true;
}

function validateEmail(){
  const v = fields.email.value.trim();
  if(!v) { setError('email','Email is required'); return false; }
  if(!emailRE.test(v)) { setError('email','Invalid email format'); return false; }
  setError('email',''); return true;
}

function validatePhone(){
  const v = fields.phone.value.trim();
  if(!v) { setError('phone','Phone is required'); return false; }
  if(!phoneRE.test(v)) { setError('phone','Phone must be exactly 10 digits'); return false; }
  setError('phone',''); return true;
}

function validateAge(){
  const v = fields.age.value.trim();
  if(!v) { setError('age','Age is required'); return false; }
  const n = Number(v);
  if(isNaN(n) || n < 0 || n > 120) { setError('age','Enter a valid age'); return false; }
  if(n < 18) { setError('age','You must be at least 18 to register'); return false; }
  setError('age',''); return true;
}

function validatePassword(){
  const v = fields.password.value;
  if(!v) { setError('password','Password is required'); return false; }
  if(!pwdRE.test(v)) { setError('password','Password must be ≥8 chars and include letters and numbers'); return false; }
  setError('password',''); 
  validateConfirmPassword();
  return true;
}

function validateConfirmPassword(){
  const a = fields.password.value;
  const b = fields.confirmPassword.value;
  if(!b) { setError('confirmPassword','Confirm your password'); return false; }
  if(a !== b) { setError('confirmPassword','Passwords do not match'); return false; }
  setError('confirmPassword',''); return true;
}

function validateEvent(){
  const v = fields.eventType.value;
  if(!v) { setError('eventType','Select an event type'); return false; }
  setError('eventType',''); return true;
}

function validateAgree(){
  if(!fields.agree.checked){ setError('agree','You must agree to terms'); return false; }
  setError('agree',''); return true;
}

function validateAll(){
  const ok = [
    validateFullName(),
    validateEmail(),
    validatePhone(),
    validateAge(),
    validatePassword(),
    validateConfirmPassword(),
    validateEvent(),
    validateAgree()
  ].every(Boolean);
  return ok;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  message.textContent = '';
  if(!validateAll()){
    message.style.color = 'var(--error)';
    message.textContent = 'Please fix errors highlighted above.';
    return;
  }
  // Simulate successful submission (could be replaced with fetch)
  const data = {
    fullName: fields.fullName.value.trim(),
    email: fields.email.value.trim(),
    phone: fields.phone.value.trim(),
    age: fields.age.value.trim(),
    eventType: fields.eventType.value,
    address: document.getElementById('address').value.trim()
  };
  console.log('Form submission data:', data);
  message.style.color = 'green';
  message.textContent = 'Registration successful. Thank you!';
  form.reset();
  // clear validation UI
  Object.keys(errors).forEach(k => setError(k,''));
});

form.addEventListener('reset', ()=>{
  setTimeout(()=>{ // allow reset to clear values first
    Object.keys(errors).forEach(k => setError(k,''));
    message.textContent = '';
  }, 10);
});
