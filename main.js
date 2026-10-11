function hasMinimumLength(password) {
  let splitPass = password.split("");

  if (splitPass.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function hasNumber(password) {
  let checkNumber = password
    .split("")
    .some((char) => !isNaN(char) && char !== " ");

  return checkNumber;
}

function hasUppercaseLetter(password) {
  let checkPass = password.split("").some((char) => char >= "A" && char <= "Z");

  return checkPass;
}

function getFailedRules(password) {
  let rules = [];

  if (!hasMinimumLength(password)) {
    rules.push("minimum length");
  }
  if (!hasNumber(password)) {
    rules.push("number");
  }
  if (!hasUppercaseLetter(password)) {
    rules.push("uppercase letter");
  }

  return rules;
}

function validatePassword(password) {
  let validPass;
  if (getFailedRules(password).length > 0) {
    validPass = false;
  } else {
    validPass = true;
  }

  return {
    valid: validPass,
    failedRules: getFailedRules(password),
  };
}

console.log(validatePassword("hello"));
console.log(validatePassword("Hello123"));
console.log(validatePassword("hello123"));
console.log(validatePassword("HELLOABC"));
