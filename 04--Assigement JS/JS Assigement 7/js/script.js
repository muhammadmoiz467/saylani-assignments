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



// user value box function
let userinput  = () => {
  return document.getElementById("userinputbox").value;
}
//  Global Output Box 
  let output = document.getElementById("outputBox");

// Cleroutput button
function clearOutput () {
  // document.getElementById("outputBox").innerHTML = "";
  output.innerHTML = "";
} 

const now = new Date()

console.log("CurrentTime", now)

console.log("currentime.getTime()", now.getTime())
console.log("currentime.getDay()", now.getDay())
console.log("currentime.getMonth()", now.getMonth())
console.log("currentime.getFullYear()", now.getFullYear())
console.log("currentime.getHours()", now.getHours())
console.log("currentime.getMinutes()", now.getMinutes())
console.log("currentime.getSeconds()", now.getSeconds())




// Array 
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log('correntTime.getDay()', now.getDay())

const today = dayNames[now.getDay()]

console.log('today', today)



// Original String Box
let originalStringTime = new Date ()
document.getElementById("originalStringBox").innerHTML = originalStringTime; 



// TellTime
function tellTime () {
    
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();
    // document.getElementById("outputBox").innerHTML += '<br>You clicked the button @ ' + theHr + ":" + theMin + ":" + theSec + '<br />';
    output.innerHTML += '<br>You clicked the button @ ' + theHr + ":" + theMin + ":" + theSec + '<br />';
}


// Get Name Of Today
function getNamesOfToday () {
    let rightNow = new Date()
    console.log(rightNow)
    let theDay = rightNow.getDay()
    console.log(theDay)
    let nameOfToday = dayNames[theDay];
    console.log(nameOfToday)

    output.innerHTML = nameOfToday;
    tellTime();
}


// Calculate Days Passed since I born
function calculateDays () {
  let dob = document.getElementById("userinputbox").value;
  console.log(dob)

  if(!dob) {
    toastifyError("Please enter your date of birth.")
    return;
  }

  let today = new Date()
  let bornDate = new Date(dob)
  let calculation = today.getTime() - bornDate.getTime();
  console.log(calculation)
  let final = calculation / (1000 * 60 * 60 * 24);
  console.log(final)

  let ageFinal = Math.floor(final) + " days have been passed since you born";
  output.innerHTML = ageFinal;
  tellTime()
}



// When is your next birthday
function nextBirthday () {
  let uservalue = userinput()
   
  if(!uservalue) {
    toastifyError("Please enter your date of birth.")
    return;
  }

  let today = new Date()
  let dob = new Date(uservalue)
  let final = today.getTime() - dob.getTime()
  let calculate = final / (1000 * 60 * 60 * 24)
  let final2nd = Math.floor(calculate);
  let final3 = "Your next birth day is '" + final2nd + "' days away";

  output.innerHTML = final3;
  tellTime()
}

// function nextBirthday () {
//   let userDatetValue = userinput()
  
//   if(!userDatetValue) {
//     toastifyError("Please enter your date of birth.")
//     return;
//   }

//   let date1 = new Date()
//   let date2 = new Date(userDatetValue)
//   let final = date1.getTime() - date2.getTime();
//   let final1 = final / (1000 * 60 * 60 * 24);
//   console.log(final1)
//   let final2 = Math.floor(final1) + " You are days is passed and some many";
//   console.log(final2)
//   output.innerHTML = final2
//   tellTime()

// }



function greetUser () {
  let user1 = prompt("Please enter your name.")

  if(!user1) {
    toastifyError("Please type a name")
    return;
  }
  // let text1 = "Good afternoon"
  // let final11 = text1 +" "+ user1
  // output.innerHTML = (final11)

  let date = new Date()
  let hours = date.getHours()

  let greeting;

  if (hours < 12) {
    greeting = ("Good Morning")
  } else if (hours < 17) {
    greeting = ("Good Afternoon")
  } else if (hours < 21) {
    greeting = ("Good Evening")
  } else {
    greeting = ("Good Night")
  }
  
  let final = greeting + " " + user1;
  console.log(greeting)
  console.log(final)
  output.innerHTML = final
}

// Tell Time 1
function tellTime1 () {
  tellTime()
}

// Tell Time 2
function tellTime2 () {
  tellTime()
}

// Tell Time 3 
function tellTime3 () {
  tellTime()
}

// Calculate Tax
// function calculateTaxBtn () {

//   let price = +prompt("Enter price")
//   if(!price) {
//     toastifyError("Please enter your number")
//     return;
//   }
//   let taxRate = 17;

//   // var tax = price * taxRate / 1000
//   let tax = calculateTax(price, taxRate)

//   let html = "Tax: " + tax;
//   output.innerHTML = html;
// }

// function calculateTax(price, taxRate) {

//   let tax = price * taxRate / 100;
//   return tax
// }
// function calculateTaxBtn () {
//   let user01 = +prompt("Please enter your tax calculate value.")

//   if(!user01) {
//     toastifyError("Please enter your number")
//   return;
//   }
//   let tax = 17;
//   let calcl = user01 * (tax / 100)
//   console.log(calcl)
  
// }

function calculateTaxBtn () {
  let userPrice = +prompt("Please type a number with in tax")
  if(!userPrice) {
    toastifyError("Please type a number.")
    return;
  }

  let taxRate = 18;
  // let final = (userpromot * tax1) / 100 ;
  var tax = calculateTax(userPrice, taxRate)
  console.log(tax)
  let html = '<h4>Tax: ' + tax + '</h4>';  
  output.innerHTML = html
  // console.log("final",final)
  // output.innerHTML = final
}

function calculateTax (userPrice, taxRate) {
  let tax = (userPrice * taxRate) / 100;
  return tax; 
}

// Calculate Tax = Price + Tax
function calculateTotal () {
  let userPrice = +prompt("Please type a number with in tax moiz")

  if (isNaN(userPrice) || userPrice <= 0) {
    toastifyError("Please type a number Moiz.")
    return;
  }

  let taxPrice;

  if (userPrice < 1000) {
    taxPrice = 8;
  } else {
    taxPrice = 25;
  }

  let tax = calculateTax (userPrice, taxPrice)
  let final = tax + userPrice
  let html = 
  '<h4>Price: ' + userPrice + '</h4>' +
  '<h4>Tax: ' + tax + '</h4>' +
  '<h3>Total: ' + final + '</h3>';

  console.log("tax", tax) 
  console.log("tatal", final)

  output.innerHTML = html

}