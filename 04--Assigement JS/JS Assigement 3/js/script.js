// btn 1 
/*************************************document.getElementById("condate string").onclick = () => {

    let message = ("Good Evevning")
    let name = ("Moiz Gujjar")
    let banger = ("!")

    alert(message + " "+ name +" "+ banger)
}***************************************/
//  btn 2
/*********************************document.getElementById("from user").onclick = () => {
    let message = ("Good Evening")
    let user = prompt("Please Enter Your Name")

    alert(message +" "+ user)
   document.getElementById("output").innerHTML = (message +" "+ user)
}*********************************/
/*document.getElementById("from user").onclick = () => {
     let message = +prompt("Enter calculation Value")
    let user = +prompt("second calculation value")
    alert(message + user)
 }*/

// Comparsion Operator
/***************************document.getElementById("comparison operator").onclick = () => {
    let num1 = 10
    let num2 = 20
   
    if(num1 >= num2) {
        alert("Yes is condition is false")
    } else if(num1 == num2) {
        alert("NO, your condition is not true. The 10 >= 20")
    } else {
        alert("10 less than 20")
    }
}*********************************/
/*document.getElementById("comparison operator").onclick = () => {
    let num1 = 10
    let num2 = 20

    if (num1 < num2) {
        alert("10 is less than. 20")
    } else if (num1 === num2) {
        alert("Both numbers are equal")
    } else {
        alert("10 is less than 20")
    }
}*/



/************************************000 
document.getElementById("ifelse").onclick = function () {
    var num1 = +prompt("Please enter num 1 value for checking comditions.")
    var num2 = 15
    var result = ""
    document.getElementById("statement").innerHTML = (num1 +" "+">=15")
    if (num1 < num2) {
        alert("Yes your condition is True")
        result = ("Result : true")
    } else if (num1 == num2) {
        alert("Yes your condition is value for Equal")
        result = ("Result : Value is Equal")
    } else if (num1 >= num2) {
        alert("Not, equal for value = 15")
        result = ("Result : Not Value Equal")
    }
    else {
        alert("Not value for false")
        result = ("Result : Value for False")
    }
    document.getElementById("output").innerHTML = result
}
document.getElementById("testing user").onclick = () => {
    let user = prompt("Enter Your number")
    let result = ""
    
    if(user > 90){
        alert("Grade A+")
        result = ("Result = A+")
    } else if(user > 80) {
        alert("Grade A")
        result = ("Result = A")
    } else if(user > 70) {
    alert("Grade B+")
     result = ("Result = B+")
    } else if(user > 60) {
    alert("Grade B")
     result = ("Result = B")
    } else if(user > 50) { 
    alert("Grade C")
     result = ("Result = C")
    } else if(user > 40) {
    alert("Grade C")
     result = ("Result = C")
    } else if(user > 30) {
    alert("Grade E")
     result = ("Result = E")
    }else if(user > 20) {
    alert("Grade F / <code>Fail</code>")
}
}*********************/

// Concatenate String 
document.getElementById("condate string").onclick = () => {
    let message = ("Good Evening")
    let name = ("Moiz Gujjar")
    let banger = ("!")
    alert(message +" "+ name +" "+ banger)
}

// Name From User
document.getElementById("from user").onclick = () => {
    let message = ("Good Evening")
    let user = prompt("Please Enter Your Name")
    alert(message +" "+ user)
    document.getElementById("output").innerHTML = (message +" "+ user)
}
document.getElementById("clear output").onclick = () => {
    document.getElementById("output").innerHTML = "";
}

// Coomparizon Operator
document.getElementById("comparison operator").onclick = () => {
    let num1 = 10
    let num2 = 20
    let result = "";
    document.getElementById("statement").innerHTML = ("let = 10 < 20")
    if(num1 < num2) {                                                                                               
        alert("Yes Your Condition is True")
        result = ("Yes Your Condition is True")                                           
    } else {
        alert("The value invalid for condition False")
    }
    document.getElementById("output").innerHTML = (result)
}
document.getElementById("clear statement").onclick = () => {
    document.getElementById("statement").innerHTML = "";
}

// if else if
document.getElementById("if else").onclick = () => {
    let user = prompt("Enter Your Marks")
    if(user >= 90) {
        alert("You got A+")
    } else if(user >= 80) {
        alert("You got A")
    } else if(user >= 70){
        alert("You got B")
    } else if(user < 70) {
        alert("You are Fail")
    } else {
        alert("Value invalid for Condition False")
    }
}

// Testing Sets Of Condition
document.getElementById("testing user").onclick = () => {
    let age = 35
    let result = "";
    if(age <= 60 && age <= 80) {
        alert("You are value True")
        result = ("You are value True")
    }
    document.getElementById("statement").innerHTML = ("let = (age <= 60 && age <= 80)")
    document.getElementById("output").innerHTML = (result)
}

// if statement Nested
document.getElementById("if nested").onclick = () => {
    let num = 10
    let result = "";

    if(num > 0) {
        if(num % 2 === 0) {
            alert("Positive even number")
            result = ("Positive even number")
        }
    }
    document.getElementById("statement").innerHTML = ("let = (num > 0) <br /> let = (num % 2 === 0)")
    document.getElementById("output").innerHTML = (result)
}

// Login
document.getElementById("login").onclick = () => {
    let user = prompt("Please Enter Your Username")
    let password = prompt("Please Enter Your Password")

    if(user === "moiz" && password === "123"){
        alert("User successful Login ✅")
    } else {
        alert("invalid username or password ❌")
    }
}

// Check
/*document.getElementById("check").onclick = () => {
    let userage = prompt("Enter your age")
    let userweight = prompt("Enter your weight")
    if(userage < 18) {
        alert("You re Bady")
    }else if(userage >= 18 && userweight <= 70) {
        alert("You re Smart Man")
    } else if(userweight > 70) {
        alert("You re Fat man")
    } else {
        alert("❌ Invalid condition only for Number")
    }

}*/
document.getElementById("check").onclick = () => {
    let age =+prompt("Enter Your Age")
    if(age < 18){        
      alert("You a very very very Bady")
    }
    let weight =+prompt("Enter your weight")
    if(weight <= 70){
        alert("you re smart man")
    } else if(weight > 70){
        alert("you re uncle g")
    } else{
        alert("you re not a boy i think to man is conform")
    }
}