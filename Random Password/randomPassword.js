const passwordBox = document.getElementById('password');
const button = document.querySelector('button');
const copy_icon = document.querySelector('.copy-icon');

const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUBWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+~|}{][></-=';

const allChars = upperCase + lowerCase + number + symbol;

button.onclick = () => {
  let password = '';

  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  password += number[Math.floor(Math.random() * number.length)];

  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
};

copy_icon.onclick = () => {
  passwordBox.select();
  document.execCommand('copy');
};
