function showOutput(output) {
  document.getElementById("outputBox").innerHTML = output
}

function clearOutput() {
  document.getElementById("outputBox").innerHTML = "";
}

// Get if else
function ifelse1() {
  const now = new Date();
  let today = now.getDay();


  //  Switch Satement 
  // switch(today) {
  //   case 0: alert ("It is a Sunday"); break;
  //   case 1: alert ("It is a Monday"); break;
  //   case 2: alert ("It is a Tuesday"); break;
  //   case 3: alert ("It is a Wednesday"); break;
  //   default: alert ("It is some other day")
  // }


  // ------------------------------------------------------------ //

  // if (today === 0 || today === 1) {
  //   alert ("It is a Sunday or Monday")
  // } 
  // else if (today === 2 || today === 3) {
  //   alert ("It is a Tuesday or Wednesday")
  // }
  // else {
  //   alert ("It is a Some other Days")
  // }

  //-----------------// switch (today) {
  //   case 0: case 1:  alert ("It is a Sunday or Monday"); break;
  //   case 3: case 4:  alert ("It is a Tuesday or Wednesday"); break;
  //   default: alert ("It is some Other days")
  // }

  // ------------------------------------------------------------- //

  // today = 3;
  if (today === 0) {
    alert("It is a Sunday")
  }
  else if (today === 1) {
    alert("It is a Monday")
  }
  else if (today === 2) {
    alert("It is a Tuesday")
  }
  else if (today === 3) {
    alert("It is a Wednesday")
  }
  else if (today === 4) {
    alert("It is a Thursday")
  }
  else if (today === 5) {
    alert("It is a Friday")
  }
  else if (today === 6) {
    alert("It is a Saturday")
  }
  else {
    alert("It is some a Many days.")
  }

}

function switch2() {
  let now = new Date()
  let day = now.getDay()

  switch (day) {
    case 0: case 6:
      showOutput("It is a Sunday or Saturday")
      break;

    case 1:
      showOutput("It's Monday");
      break;

    case 2:
      showOutput("It's Tuesday");
      break;

    case 3:
      showOutput("It's Wednesday");
      break;

    case 4:
      showOutput("It's Thursday");
      break;

    case 5:
      showOutput("It's Friday");
      break;

    default: showOutput("It's  Some other day");
  }
  
}
//----------------------------------------//
//  For Examples 
//  For loop

for (let i = 0; i < 5; i++) {
 console.log(i)
}
// ---- //

// while loop

let i = 0;
while(i < 5) {
  console.log(i)
  i++
}

//--------------------------------------------//

// Keeep Asking the Name
function askingName () {
  
  do{
    
    var name = prompt("Enter Your Name")
    console.log(name)
  } while (name === null || name === "" || name.length < 3)
    showOutput(name)
}



// ---------------------------------- //
// const divs = document.getElementsByClassName("btn")
// console.log(divs)
// console.log(divs[4].style= "background-color: black")