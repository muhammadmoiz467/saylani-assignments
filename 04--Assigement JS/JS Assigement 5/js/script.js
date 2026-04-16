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
function clearOutput() {
    // output box ko clear kare
    document.getElementById("outputbox").innerHTML = "";
}
// document.getElementById("clearoutput").onclick = () => {
//   document.getElementById("outputbox").innerHTML = "";
// }
// // simple alert
// function simplealert () {
//     alert("I'm an alert")   
// }

// // Print My Name
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

// var city0 = "Lahore"
// var city1 = "Karachi"
// var city2 = "Faisalabad"
// var city3 = "Sialkot"
// var city4 = "Islamabad"
// var city5 = "Multan"
// var cities = ["Lahore", "Karachi", "Faislalabad", "Sialkot", "Islamabad", "Multan"]
// console.log('cities.length', cities.length)
// // cities[2] = "Moiz Gujjar"  
// // cities.pop()    // last element romove
// // cities.shift()   //first element remove
// // cities.unshift("peshawar", "Moiz Gujjar", "ALi", "GujjarMoiz")   // first pa element add hota ha
// // cities.push("Sahiwal","Heradabad", "Muree")     // last ma add hota ha 
// // cities.splice(0, 0, "New Salikot")  // kise be element ko remove be kar sakta ha ior add be kar sakta ha &&& OR  copy be banta ha 
// const citiescopy = cities.slice(1, 5)

// console.log('cities', cities)
// console.log('cities[4]', cities[4])
// console.log("citiescopy" , citiescopy)


// function printallcities () {
//   document.getElementById("outputbox").innerHTML = "";

//  /* for (let i = 0; i < 6; i++) {
//     let num = i + 1;
//     document.getElementById("outputbox").innerHTML += num + ') ' + cities[i]+ '<br />';
    
//   }*/

//     for (let i = 0; i < cities.length; i++) {
//       console.log(cities[i])
//     }
// }
var originalstring = ("I love my country Pakistan <br /> I Like my city Faisalabad <br /> I love my Homeland")
 
document.getElementById("originalStringBox").innerHTML = (originalstring)

// LowerCase 
function lowerCase () {
  var originaltext = document.getElementById("userinputbox").value;
  let lowercase = originalstring.toLowerCase();
  document.getElementById("outputbox").innerHTML = (lowercase)
  
}

// UpperCase
function upperCase () {
  /*var originaltext = document.getElementById("userinputbox").value;*/
  let uppercase = originalstring.toUpperCase();
  document.getElementById("outputbox").innerHTML = (uppercase)  
}

// Captalize 
//  function capitalize () {
//    let capitalizetext = '(<span style="text-transform: capitalize;">'+ originalstring + '</span>')
//    document.getElementById("outputbox").innerHTML = (capitalizetext)
//  }

// Captalize 
// function capitalize () {
//   let capitalizetext = '<span style="text-transform: capitalize;">' + originalstring + '</span>'
//   document.getElementById("outputbox").innerHTML = (capitalizetext)
// }

// Capitalize 
   function capitalize () {
     let capitalizetext = '<span style="text-transform: capitalize";>' + originalstring + '</span>'
     document.getElementById("outputbox").innerHTML = (capitalizetext)
   }

// // Better Formating
//   function betterFormatting () {
//    let userinput = document.getElementById("userinputbox").value;
//    let textBetterFormatting = '<span style="text-transform: capitalize";>' + userinput + '</span>';
//      if (userinput === "") {
//      toastifyError("Please type my name")
//    }
//    document.getElementById("outputbox").innerHTML = (textBetterFormatting)
//   }
// Formatting 
// function betterFormatting () {
//   let userinput = document.getElementById("userinputbox").value;
//   if(userinput === "") {
//     toastifyError("Please Type Your Name")
//   }
//   userinput = userinput.toLowerCase();
//   let words = userinput.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }    
//   let finaltext = words.join(" ");
//   document.getElementById("outputbox").innerHTML = (finaltext)
// }

// Better Formatting
function betterFormatting () {
    let usertext = document.getElementById("userinputbox").value;
    usertext = usertext.toLowerCase();  

    if(usertext === "") {
      toastifyError("Please type your Text")
    }


   document.getElementById("outputbox").style.textTransform = "Capitalize";
   document.getElementById("outputbox").innerHTML = (usertext) 
}

var word = "Moiz gUJJAR"
var newsplit = word.split(" ")
var newword = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
console.log(newword)


// For example 
// const newuser = ["Ahmad", "Bilal", "Ali", "Moiz", "Hammad"]
// for(let i = 0; i < newuser.length; i++) {
//   console.log(newuser[i])
// }

// // Cities Array
 let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhopura", "Kashmir"]

 // Print All Cities
 function printAllCities() {
   document.getElementById("outputbox").innerHTML = "";  
   for (let i = 0; i < cities.length; i++) {
     let num = i + 1;
     document.getElementById('outputbox').innerHTML += num + ') ' +cities[i] + '<br />';
     }
 }


// Add YOur City
function addCity() {
  let city = document.getElementById("userinputbox").value;
  
  if(!city) {
    toastifyError("PLease Type Your City Name")
   return; 
  } 

  // // is ko captilize ma convert karna ka ko triqa
  // // No. 1  slice Wala Method
  // cityFirstLetter = city.slice(0,1).toUpperCase();
  // cityAllLetters = city.slice(1).toLowerCase();
  
  // // No.2 charAT Wala Method
   cityFirstLetter = city.charAt(0).toUpperCase();
   cityAllLetters = city.slice(1).toLowerCase();

  cityFullLetters = cityFirstLetter + cityAllLetters;
  let cityFound = false;
  let isCityFound = cities.includes(cityFullLetters)
  console.log("isCityFound", isCityFound)
  
  if(!isCityFound) {
    cities.push(cityFullLetters)
    let html = '<span style="color: green; font-size: 20px;">"' + cityFullLetters + '"</span> has been successfully added.';
    document.getElementById("outputbox").innerHTML = html
  } else {
    let html = '<span style="color: red; font-size: 20px;">"' + cityFullLetters + '"</span> is already in list.';
    document.getElementById("outputbox").innerHTML = html
  }
}

// Check your city in list

function checkCityInList () {
   let city = document.getElementById("userinputbox").value;
  
   if(!city) {
     toastifyError("PLease Type Your City Name")
    return; 
   } 

  // // // is ko captilize ma convert karna ka ko triqa
  // // // No. 1  slice Wala Method
  // // cityFirstLetter = city.slice(0,1).toUpperCase();
  // // cityAllLetters = city.slice(1).toLowerCase();
  
  // // // No.2 charAT Wala Method
     cityFirstLetter = city.charAt(0).toUpperCase();
     cityAllLetters = city.slice(1).toLowerCase();

   cityFullLetters = cityFirstLetter + cityAllLetters;
   let cityFound = false;
   let isCityFound = cities.includes(cityFullLetters)
   console.log("isCityFound", isCityFound)
  
   if(isCityFound) {  
     let html = '<span style="color: red; font-size: 20px;">"' + cityFullLetters + '"</span>  is already in the list.';
     document.getElementById("outputbox").innerHTML = html
   } else {
     let html = '<span style="color: green; font-size: 20px;">"' + cityFullLetters + '"</span> is not in the list.';
     document.getElementById("outputbox").innerHTML = html
   }

      // let city = document.getElementById("userinputbox").value;

    // if (!city) {
    //     toastifyError("Please Type Your City Name");
    //     return;
    // }

    // // Capitalize first letter
    // let cityFirstLetter = city.charAt(0).toUpperCase();
    // let cityAllLetters = city.slice(1).toLowerCase();
    // let cityFullLetters = cityFirstLetter + cityAllLetters;

    // // Check if city exists
    // let isCityFound = cities.includes(cityFullLetters);

    // let html = "";
    // if (isCityFound) {
    //     html = '<span style="color: red; font-size: 20px;">"' + cityFullLetters + '"</span> is already in the list &#128150;';
    //      document.getElementById("outputbox").innerHTML = html
    // } else {
    //     html = '<span style="color: orange; font-size: 20px;">"' + cityFullLetters + '"</span> is not in the list!';
    //      document.getElementById("outputbox").innerHTML = html
    // }

}





// var sentence = "mOIZ KHAN aLi";
// var newsentence = sentence.split(" ");
// var finaltext1 = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
// console.log (finaltext1)


// sentence = sentence.toLowerCase();
//   let mmm = sentence.split(" ");
//   for (let i = 0; i < mmm.length; i++) {
//     mmm[i] = mmm[i].charAt(0).toUpperCase() + mmm[i].slice(1);
//   }    
// let finalmmm = mmm.join(" ");
// console.log(finalmmm)


// // ////////////////////////////////////////
//  let name = ("Ahmad");
//  let value = name.indexOf("A");
//  console.log('value', value);

//  if (value !== -1) {
//      console.log("index found at " + value)
//  } else {
//   console.log("index not found")
//  }

// let cnic = "33105-123456-7"
// let formattingcnic = cnic.replaceAll("_", "").replaceAll("-", "").replaceAll("  ", "")

// console.log("formattingcnic", formattingcnic)


// // // fidn this word
// function findThisWord() {
//   let word = document.getElementById("userinputbox").value;

//   if (!word) {
//     toastifyError("Please type a word to find");
//     return;
//   }

//   // original string me search
//   let index = originalstring.toLowerCase().indexOf(word.toLowerCase());

//   let html = "";

//   if (index !== -1) {
//     html =
//       '<span style="color: green; font-size: 20px;">"' + word +'"</span> found at index <b>' +index + "</b>.";
//   } else {
//     html =
//       '<span style="color: red; font-size: 20px;">"' +
//       word +
//       '"</span> not found in the original string.';
//   }

//   document.getElementById("outputbox").innerHTML = html;
// }

// Find the Word
function findThisWord () {
    let userword = document.getElementById("userinputbox").value;

    if (!userword) {
      toastifyError("Please Type a word to find");
      return;
    } 

    // origina string
    let index = originalstring.toLowerCase().indexOf(userword.toLowerCase());
      
    // variable HTML 
    let html = "";

    if(index !== -1) {
       html = '<span style="color: green; font-size: 20px">"' + userword + '"</span> found at index <b>' + index + "</b>";
    } else  {
       html = '<span style="color: red; font-size: 18px;">' + userword + '</span> not found in the original string.';
    }
    document.getElementById("outputbox").innerHTML = (html);
}


// function replaceThisWord  () {
//     let findWord = document.getElementById("userinputbox").value;

//     if (!findWord) {
//         toastifyError("Please type a word to replace");
//         return;
//     }

//     let replaceWord = prompt("Type the word you want to replace with:");

//     if (!replaceWord) {
//         toastifyError("Please type a replacement word");
//         return;
//     }

//     // Case-insensitive replace all
//     let regex = new RegExp(findWord, "gi");
//     let newString = originalstring.replace(regex, replaceWord);

//     document.getElementById("outputbox").innerHTML = newString;
// }

// // Replace This Word
// function replaceThisWord () {
//   let findWord = document.getElementById("userinputbox").value;
  
//   if (!findWord) {
//     toastifyError("Please type a word to replace");
//   }

//   let replaceWord = prompt("Type the word you want to replace with:");
  
//   if(!replaceWord) {
//     toastifyError("Please type a replacement word");
//   }

//   let regex = new RegExp (findWord, "gi");
//   let finalReplaceWord = originalstring.replace(regex, replaceWord);

//   document.getElementById("outputbox").innerHTML = (finalReplaceWord);
// }

// function replaceThisWord() {
//   let userFindWord = document.getElementById("userinputbox").value;

//   if(!userFindWord) {
//     toastifyError("Please type your word to find")
//   }
//   console.log("userFindWord", userFindWord)
//   let replaceWord = prompt("Please type your word to replace")
//   if(!replaceWord) {
//     toastifyError("Please type word to replace")
//   } 
//   console.log("replaceword")
//   let regex = new RegExp (userFindWord, "gi")
//   let finalWord = originalstring.replace(regex, replaceWord);
//   document.getElementById("outputbox").innerHTML = (finalWord)
    
// }





function replaceThisWord () {
  let userWord = document.getElementById("userinputbox").value;

  if(!userWord) {
    toastifyError("Please type your word for find")
    return;
  }
   console.log("userWord", userWord)
  let userReplaceWord = prompt("Please type your replace word")
   
  if(!userReplaceWord) {
    toastifyError("Please type your word");
    return;
  }
  console.log("userReplaceWord", userReplaceWord)
  let regex = new RegExp (userWord, "gi")
  let finalWord = originalstring.replace(regex, userReplaceWord)
  console.log("finalwoed", finalWord)
  document.getElementById("outputbox").innerHTML = (finalWord)
}