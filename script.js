
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const symbols = "!@#$%^&*()"


const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
// const clipboardEl = document.getElementById('clipboard')


const getRandomData = (dataSet) =>{
     return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") =>{
    if(uppercaseEl.checked){
        password += getRandomData(uppercase)
    }

    if(lowercaseEl.checked){
        password += getRandomData(lowercase)
    }

    if(numbersEl.checked){
        password += getRandomData(numbers)
    }

    if(symbolsEl.checked){
        password += getRandomData(symbols)
    }
    if(password.length < lengthEl.value)
    {
        return generatePassword(password)
    }
    resultEl.innerText = truncateString(password,lengthEl.value);
}



generateEl.addEventListener
(
    "click",
    function () {
    
        generatePassword();
    }
)


function truncateString(str, num) {
    if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr;
    } else {
      return str;
    }
  }


//   clipboardEl.onclick = function () {

//     resultEl.select();
//   }


// function copy() {
//     let copyText = document.querySelector("#result");
//     copyText.select();
//     document.execCommand("copy");
//   }
  
//   document.querySelector("#clipboard").addEventListener("click", clipboard);

// clipboardEl.addEventListener
// (
//     "click",
//     function () {
    
//         copy();
//     }
// )




