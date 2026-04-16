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
    }
  }).showToast();
  return;
}

// ClearOutput function
function clearOutput  ()  {
   document.getElementById("outputbox").innerHTML = "";
} 

// simple alert
function simplealert () {
    alert("I'm an alert")   
}

// Print My Name
// function printmyname () {
//     var myName = document.getElementById("userinputbox").value;
//     if (myName === "") {
//         /*Toastify({
//   text: "Please type your name",
//   duration: 6000,
// //   destination: "https://github.com/apvarun/toastify-js",
// //   newWindow: true,
//   close: true,
//   gravity: "bottom", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "linear-gradient(to right, #00b09b, #96c93d)",
//   },                                    
//   onClick: function(){} // Callback after click
// }).showToast();
//   return;*/
//   toastifyError("Please type your name")
//     }
//     document.getElementById("outputbox").innerHTML = (myName)
// }

var city0 = "Lahore"
var city1 = "Karachi"
var city2 = "Faisalabad"
var city3 = "Sialkot"
var city4 = "Islamabad"
var city5 = "Multan"
var cities = ["Lahore", "Karachi", "Faislalabad", "Sialkot", "Islamabad", "Multan"]
cities.push("Murree")
console.log('cities.length', cities.length)

// Original String
// function showOriginalString () {
//    let box = document.getElementById("originalStringBox");
//    for (let i = 0 ; i < cities.length; i++) {
//       let num = i + 1;
//   box.innerHTML += num + ') ' + cities[i] + " ";    
//    }
// }

for (let i = 0; i < cities.length; i++) {
  let num = i + 1;
  document.getElementById("originalStringBox").innerHTML += num + ') ' + cities[i] + ' ';
}
// cities[2] = "Moiz Gujjar"  
// cities.pop()    // last element romove
// cities.shift()   //first element remove
// cities.unshift("peshawar", "Moiz Gujjar", "ALi", "GujjarMoiz")   // first pa element add hota ha
// cities.push("Sahiwal","Heradabad", "Muree")     // last ma add hota ha 
// cities.splice(0, 0, "New Salikot")  // kise be element ko remove be kar sakta ha ior add be kar sakta ha &&& OR  copy be banta ha 
const citiescopy = cities.slice(1, 5)

console.log('cities', cities)
console.log('cities[4]', cities[4])
console.log("citiescopy" , citiescopy)


// function printallcities () {

//  /* for (let i = 0; i < 6; i++) {
//     let num = i + 1;
//     document.getElementById("outputbox").innerHTML += num + ') ' + cities[i]+ '<br />';
    
//   }*/
// // showOriginalString();
// }


// Simple Alert
function simpleAlert () {
  alert("I'm an alert.")
}

// Print My Name
function printMyName () {
  let myName = document.getElementById("userinputbox").value;

  if (myName == "") {
    toastifyError("Please type a text.")
  } else {
    document.getElementById("outputbox").innerHTML = myName;
  }
}

// Print All Cities
function printAllCities () {
  document.getElementById("outputbox").innerHTML = "";

  for (let i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("outputbox").innerHTML += num + ') ' + cities[i] + '<br/>';
  }
}
var showoutputbox = document.getElementById("outputbox").value;
// Add Your City
// function addCity () {
//   let useraddcity = document.getElementById("userinputbox").value;

//   if (useraddcity == "") {
//     toastifyError("Please Type a City")
//     return;
//   }
   
//   let cityFirstLetter = useraddcity.charAt(0).toUpperCase();
//   let cityAllLetters = useraddcity.slice(1).toLowerCase();
//   let cityFullLetters = cityFirstLetter + cityAllLetters;
//   let finalCity = cities.includes(cityFullLetters)

//   if (!finalCity) {
//      cities.push(cityFullLetters)
//     let html = '<span style = "color: green; font-size: 20px; font-weight: bold;">"' + cityFullLetters +'"</span> has been successfull added';
//     document.getElementById("outputbox").innerHTML = (html);
//   } else {
//     let html = '<span style = "color: red; font-size: 20px; font-weight: bold;">"' + cityFullLetters + '"</span> already in list.';
//     document.getElementById("outputbox").innerHTML = (html);
//     }
// }
// function addCity () {
//   let addInputCity = document.getElementById("userinputbox").value;

//   if (addInputCity == "") {
//       toastifyError("Please type a text");
//       return;
//   }

//   let firstWords = (addInputCity.charAt(0).toUpperCase());
//   let allLastWords = (addInputCity.slice(1).toLowerCase());
//   let finalWords = (firstWords + allLastWords)
//   let finalLastWords = (cities.includes(finalWords));
//   // let hello = document.getElementById("outputbox").value;
//   if (!finalLastWords) {
//     cities.push(finalWords)
//     let htmlto = '<span style = "color: green; font-size: 20px;">"'+ finalWords +'"</span> has been successfull Added.';
//     document.getElementById("outputbox").innerHTML = (htmlto);
//   } else {
//     let htmlto = '<span style= "color: red; font-size: 20px;">"'+ finalWords +'"</span> Already added in list.';
//     document.getElementById("outputbox").innerHTML = (htmlto);
//   }
// }
function addCity () {
  let useradd = document.getElementById("userinputbox").value;

  if(useradd == "") {
    toastifyError("Please type a text My Moiz Gujjar")
    return;
  }

  let first = useradd.charAt(0).toUpperCase();
  let last = useradd.slice(1).toLowerCase();
  let final = first + last;
  let finalround = cities.includes(final)
  
  if(!finalround) {
    cities.push(final)
     let html2 = '<span style = "color: green; font-size: 20px;">"'+ final +'"</span> has been sucessful Added.';
     document.getElementById("outputbox").innerHTML = html2;
  } else {
    let html2 = '<span style = "color: red; font-size: 20px;">"'+ final +'"</span> Already Added in List.';
    document.getElementById("outputbox").innerHTML = html2;
  }
  
}

// Generation Table
// function generateTable () {
//   let usertablenum = document.getElementById("userinputbox").value;

//   if (usertablenum == "") {
//     toastifyError("Please type a table number")
//   }

//   if(isNaN(usertablenum)) {
//     toastifyError("please type a number")
//     return;
//   } else {
//     toastifyError("Condition true")
//   }

//   for (let i = 0; )
// }

// function generateTable() {
//   // 1️⃣ Get user input
//   let userInput = document.getElementById("userinputbox").value.trim();

//   // 2️⃣ Empty check
//   if (userInput === "") {
//     toastifyError("Please type numbers separated by commas");
//     return;
//   }

//   // 3️⃣ Convert input to array
//   let numbers = userInput.split(",").map(num => num.trim());

//   // 4️⃣ Validate all elements are numbers
//   for (let i = 0; i < numbers.length; i++) {
//     if (isNaN(numbers[i])) {
//       toastifyError(`"${numbers[i]}" is not a number`);
//       return;
//     }
//   }

//   // 5️⃣ Prepare output
//   let output = "";

//   // 6️⃣ Outer loop → har number ke liye
//   for (let j = 0; j < numbers.length; j++) {
//     let num = Number(numbers[j]); // string → number
//     output += `<b>Table of ${num}</b><br>`; // heading

//     // 7️⃣ Inner loop → 1 se 10 tak
//     for (let i = 1; i <= 10; i++) {
//       output += `${num} x ${i} = ${num * i}<br>`;
//     }

//     output += "<br>"; // gap between tables
//   }

//   // 8️⃣ Show in output box
//   document.getElementById("outputbox").innerHTML = output;
// }

// Generate Table
// function generateTable () {
//   let userTablenumber = document.getElementById("userinputbox").value;
  
//    if (userTablenumber == "") {
//     toastifyError("please type a number")
//     return;
//    }

//    let numbers = userTablenumber.split(",").map(num => num.trim());

//    for (let j = 0; j < numbers.length; j++) {
//     if (isNaN(numbers[j])) {
//       toastifyError(numbers[j] + " " + "is not a numbers");
//       return;
//     }
//    }

//    let output = "";

//    for (let j = 0; j < numbers.length; j++) {
//     let num = numbers[j];
//     output += "<b>Table of " + numbers[j] + "</b><br/>";

//    for (let i = 1; i <= 10; i++) {
//     output += num + " x " + i + " = " + (num * i) + "<br>";
//    }
//    output += "<br>"
//   }

//   document.getElementById("outputbox").innerHTML = output;
// }

// function generateTable () {
//   let n = document.getElementById("userinputbox").value;

//   if(n == "") {
//     toastifyError("Please Type a number for N");
//     return;
//   }
//   n = Number(n);
//   for (let i = 1; i <= n; i++) {
//     document.getElementById("outputbox").innerHTML += i + '<br>';  
//   }
// }


// Generate Table
// function generateTable () {
//   let num1 = document.getElementById("userinputbox").value;

//   if(num1 == "") {
//     toastifyError("Please type a number for Square")
//   }
//  // num1 = Number(num1)
//   for(let i = 1; i <= num1; i++) {
//     document.getElementById("outputbox").innerHTML += i + " * " + i + " = " + (i * i) + "<br>"; 
//   }
// }

// function generateTable () {
//   let usertnum = document.getElementById("userinputbox").value;

//   if(usertnum == "") {
//     toastifyError("Please Type a number")
//     return;
//   }
  
//   let number1 = usertnum.split(",")
//   let output = "";
//   for(let j = 0; j < number1.length; j++){
//     let num = Number(number1[j].trim());

//     if(isNaN(num)) {
//       toastifyError(' " ' + usertnum + ' " ' + "Please type a number." )
//       return;
//     }
//     output += '<b>Table of' +" "+ + num + '</b><br>';

//     for(let i = 1; i <= 10; i++) {
//        output += num + " x " + i + " = " + (num*i) + '<br>';
//     }
//   }
//   document.getElementById("outputbox").innerHTML = output
// }

function generateTable () {
  let user = document.getElementById("userinputbox").value;

  let usernum = Number(user)

  if (isNaN(usernum)) {
    toastifyError(user + "is not a number.")
    return;
  }

  let html = '<b>Table of' + " " + usernum + '</b><br>';

  for (let i = 1; i <= 10; i++) {
    html += usernum + " x " + i + " = " + (usernum * i) + '<br>'
  }
  document.getElementById("outputbox").innerHTML = html
}