//--------------------form ------------------

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameErr = document.querySelector("#fullname-err");

const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subject-err");

const messages = document.querySelector("#messages");
const messagesErr = document.querySelector("#messages-err");

const email = document.querySelector("#email");
const emailErr = document.querySelector("#email-err");

const validForm = (e) => {
  e.preventDefault();

  if (checkLength(fullName.value, 6)) {
    fullNameErr.style.display = "none";
  } else {
    fullNameErr.style.display = "block";
  }
  if (emailValid(email.value)) {
    emailErr.style.display = "none";
  } else {
    emailErr.style.display = "block";
  }
  if (checkLength(subject.value, 16)) {
    subjectErr.style.display = "none";
  } else {
    subjectErr.style.display = "block";
  }
  if (checkLength(messages.value, 26)) {
    messagesErr.style.display = "none";
  } else {
    messagesErr.style.display = "block";
  }
};

form.addEventListener("submit", validForm);

const checkLength = (value, len) => {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
};

const emailValid = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};
