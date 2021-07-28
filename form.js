const form = document.querySelector('form');
const email = document.getElementById('email');
const messageField = document.getElementById('small');

function validateEmail(email) {
  const regEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (regEx.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    messageField.innerText = `(*) Please provide an email in lower case eg ${email.value.toLocaleLowerCase()}`;
  } else {
    form.submit();
  }
});
