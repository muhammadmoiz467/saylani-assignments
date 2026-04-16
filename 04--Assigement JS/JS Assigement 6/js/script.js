// Tostify Error
function toastifyError(message) {
  Toastify({
    text: message,
    duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      // background: "linear-gradient(to right, #b00a8f, #02191a)",
    }
  }).showToast();
  return;
}

// Clear Output
function clearOutput() {
    // output box ko clear kare
    document.getElementById("outputbox").innerHTML = "";
}

// Show Output function
function showOutput (output) {
    document.getElementById("outputbox").innerHTML = output;
}

// Original String 
let  number = ('<span style= "font-size: 30px;">'+ 20.12345 +'</span>')
document.getElementById("originalStringBox").innerHTML = number;

// Round Number
function roundANumber () {
  let number = document.getElementById("userinputbox").value;

  if (!number) {
    toastifyError("Please type a rounding number")
    return;
  }

  let roundTheNumber = Math.round(number);

  showOutput(roundTheNumber)
}

// Cell a Number
function cellANumber () {
  let num1 = document.getElementById("userinputbox").value;

  
  if (!num1) {
    toastifyError("please type a number num2")
    return;
  }
  
  let finalnum2 = Math.ceil(num1);

  showOutput(finalnum2)

}

// Floor Number
function floorANumber () {
  let num3 = document.getElementById("userinputbox").value;
  
  if(!num3) {
    toastifyError("please type a number num3")
    return;
  }
  
  let finalnum3 = Math.floor(num3);

  showOutput(finalnum3);

}

// Random number
function randomNumber () {
  let num4 = Math.random();

  showOutput(num4)
}

// Trow a Dice 
function dice () {
  let num5 = Math.random();

  let num2 = (num5 * 6) +1;
  let final = Math.floor(num2);

  let dicetext = '<h1 class = "text-primarytheme mb-0">' + final + '</h1><span>Generate a random number form 1 to 6</span>';

  showOutput(dicetext);  
}

// userinput box/value wala Function
function inputlength () {
   return document.getElementById("userinputbox").value;
}
// Generate a strong Password
generatePassword = () => {
  let userinput = inputlength ()
   
  if (!userinput) {
    toastifyError("Please type a lenght generate a password")
    return;
  }

  let finalString = "";
  let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
  let numbers = "0123456789"
  let symbols = "~!@#$%^^&*()_+?/>.<:'[]{}\|-,"
  let fullString = (upperAlpha + lowerAlpha + numbers + symbols)

  for (let i = 0; i < userinput; i++) {
    let randomnum = Math.random();
     
     finalString += fullString.charAt(Math.floor(randomnum * fullString.length));
  }
  showOutput(finalString);
}

// converting String
function convertingString () {
  let usernum = inputlength ()

  if(!usernum) {
    toastifyError("Please type a number")
    return;
  }
  
  // usernum = parseInt(usernum)
  // usernum = parseFloat(usernum)
     usernum = Number(usernum)
    //  usernum = usernum.toFixed(3)
   
  console.log(usernum)
  showOutput(usernum)
}

// controling Length
function controlingLength () {
  let usernum = inputlength()

  if (!usernum) {
    toastifyError("Please enter your number")
    return;
  }
   usernum = Number(usernum)
   usernum = usernum.toFixed(3)
   usernum = Number(usernum)
   console.log("usernum", usernum)
   showOutput(usernum)
}

// Calculate GST
function calculateGst ()  {
  let user = inputlength()
  
  user = Number(user)

  if (isNaN(user) || user <= 0) {
    toastifyError("Please enter a valid value")
    return;
  }
  
  let tax = 18
  let usercal = user * tax / 100;
  let final = usercal + user
  console.log("tax", tax + '%')
  console.log("total tax", usercal)
  console.log(final) 
  
  // let result = `
  // <h5>Original Price: ${user}</h5>
  // <h5>GST (18%): ${usercal}</h5>
  // <h4>Total Price: ${final}</h4>`

  let result = 
  '<h5>Original Price: ' + user + '</h5>' +
  '<h5>GST (18%): ' + usercal + '</h5>' +
  '<h4>Total Price: ' + final + '</h4>';

  showOutput(result)

}