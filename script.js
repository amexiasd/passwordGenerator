let passwordEl = document.getElementById('password');
let lengthEl = document.getElementById('length');
let capitalEl = document.getElementById('capitalLetters');
let lowerEl = document.getElementById('lowerLetters');
let numberEl = document.getElementById('numbers');
let symbolsEl = document.getElementById('symbols');
let copyBtn = document.getElementById('clipboard');
let generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click',copyToClipboard)
function generatePassword() {
	passwordEl.innerText = +lengthEl.value;
	let t = new PasswordGenerator(
    +lengthEl.value,
    capitalEl.checked,
    lowerEl.checked,
    numberEl.checked,
    symbolsEl.checked);

passwordEl.innerText= t.generate();
}

function copyToClipboard(){
  const textarea = document.createElement('textarea');
  const password = passwordEl.innerText;

  if(!password){ return }

  textarea.value = password
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}
