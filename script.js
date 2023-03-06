//front-end elements
const passwordFor = document.getElementById("passwordFor");
const storeButton = document.getElementById("storeButton");
const passwordLog = document.getElementById("passwordLog");
const generatorBox = document.getElementById("generatorBox");
const keyFilter = document.getElementById("keyFilter");
const generateButton = document.getElementById("generateButton");

const generatePassword = () => {
   //variable that contains all keys on keyboard
    const keys = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*','(',')','_','-','=','+','<','.','>','/','?',';',':'];

  //Arrays containing keys randomized and filtered
  const randomAll = [];
  const randomLowerCase = [];
  const randomUpperCase = [];
  const randomOnlyLetters = [];
  
  //loops through all arrays, filters them, then randomizes the index of each value and pushes them into new arrays above
  for (let i = 0; i < keys.length; i++) {
    const allKeys = keys;
    const lowerCaseKeys = keys.slice(0, 36) + keys.slice(62, 85);
    const upperCaseKeys = keys.slice(0, 10) + keys.slice(36, 85);
    const onlyLetters = keys.slice(10, 62);

    randomAll.push(allKeys[Math.floor(Math.random() * allKeys.length)]);
    randomLowerCase.push(
      lowerCaseKeys[Math.floor(Math.random() * lowerCaseKeys.length)]
    );
    randomUpperCase.push(
      upperCaseKeys[Math.floor(Math.random() * upperCaseKeys.length)]
    );
    randomOnlyLetters.push(
      onlyLetters[Math.floor(Math.random() * onlyLetters.length)]
    );
  }

  //checks users inputs, filters and outputs user choice
  switch (true) {
    case keyFilter.value === "allKeys" && numFilter.value === "8":
      generatorBox.value = randomAll.slice(0, 8).join("");
      break;
    case keyFilter.value === "allKeys" && numFilter.value === "12":
      generatorBox.value = randomAll.slice(0, 12).join("");
      break;
    case keyFilter.value === "allKeys" && numFilter.value === "16":
      generatorBox.value = randomAll.slice(0, 16).join("");
      break;
    case keyFilter.value === "allKeys" && numFilter.value === "20":
      generatorBox.value = randomAll.slice(0, 20).join("");
      break;
    case keyFilter.value === "lowercase" && numFilter.value === "8":
      generatorBox.value = randomLowerCase.slice(0, 8).join("");
      break;
    case keyFilter.value === "lowercase" && numFilter.value === "12":
      generatorBox.value = randomLowerCase.slice(0, 12).join("");
      break;
    case keyFilter.value === "lowercase" && numFilter.value === "16":
      generatorBox.value = randomLowerCase.slice(0, 16).join("");
      break;
    case keyFilter.value === "lowercase" && numFilter.value === "20":
      generatorBox.value = randomLowerCase.slice(0, 20).join("");
      break;
    case keyFilter.value === "uppercase" && numFilter.value === "8":
      generatorBox.value = randomUpperCase.slice(0, 8).join("");
      break;
    case keyFilter.value === "uppercase" && numFilter.value === "12":
      generatorBox.value = randomUpperCase.slice(0, 12).join("");
      break;
    case keyFilter.value === "uppercase" && numFilter.value === "16":
      generatorBox.value = randomUpperCase.slice(0, 16).join("");
      break;
    case keyFilter.value === "uppercase" && numFilter.value === "20":
      generatorBox.value = randomUpperCase.slice(0, 20).join("");
      break;
    case keyFilter.value === "lettersOnly" && numFilter.value === "8":
      generatorBox.value = randomOnlyLetters.slice(0, 8).join("");
      break;
    case keyFilter.value === "lettersOnly" && numFilter.value === "12":
      generatorBox.value = randomOnlyLetters.slice(0, 12).join("");
      break;
    case keyFilter.value === "lettersOnly" && numFilter.value === "16":
      generatorBox.value = randomOnlyLetters.slice(0, 16).join("");
      break;
    case keyFilter.value === "lettersOnly" && numFilter.value === "20":
      generatorBox.value = randomOnlyLetters.slice(0, 20).join("");
      break;
  }
};
//formats final values in eligle form
const formatPassword = () => {
  passwordLog.innerText = `Username/Email: ${passwordFor.value}
    Password: ${generatorBox.value}`;
};
