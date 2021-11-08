const hasher = (masterPassword, service) => {
  console.log("Getting called");
  let t = "";
  let n = 0;
  for (let i = 0; i < service.length; i++) {
    n += -1 * service[i].charCodeAt(0);
  }

  n = Math.abs(n);

  if (n > 500) {
    n = n / 100;
  } else if (n > 300) {
    n = n / 50;
  } else {
    n = n / 20;
  }

  let m;

  for (let i = 0; i < masterPassword.length; i++) {
    m =
      Math.abs(masterPassword[i].charCodeAt(0)) +
      Math.floor(-1 * i ** (i % 2) * n) +
      1;
    if ((i === 0 || i == masterPassword.length - 1) && m === 32) {
      m += 5;
    }
    m = Math.abs(m);
    while (m < 32) {
      m *= 2;
    }
    t += String.fromCharCode(m);
  }

  alert(`Your password is ${t}`);

  return t;
};

document.addEventListener("DOMContentLoaded", function () {
  const masterPasswordInputField = document.getElementById("master-password");
  const serviceInputField = document.getElementById("service");
  const generateButton = document.getElementById("generate");

  masterPasswordInputField.focus();

  generateButton.addEventListener("click", function () {
    let masterPassword = masterPasswordInputField.value;
    let service = serviceInputField.value;

    hasher(masterPassword, service);
  });
});
