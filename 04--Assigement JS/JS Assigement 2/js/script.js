// document.body.style.background = "#e9ecef" 

// Alert Name
document.getElementById("alertname").onclick = () => {
    let firstname = ("Moiz")
    let lastname = ("Gujjar")
    let fullname = (firstname +" "+ lastname)
    alert(fullname)
    document.getElementById("statement").innerHTML = (fullname)
}
document.getElementById("clear statement").onclick = () => {
    document.getElementById("statement").innerHTML = "";
}

// Alert Number
document.getElementById("alertnumber").onclick = () => {
    let num1 = ("123456789")
    alert(num1)
    document.getElementById("statement").innerHTML = (num1)
}
document.getElementById("clear statement").onclick = () => {
    document.getElementById("statement").innerHTML = "";
}

// Show Variable names
document.getElementById("show var name").onclick = () => {
    document.getElementById("output").innerHTML = ("<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>")
    document.getElementById("output").style.textAlign = ("left")
    document.getElementById("statement").innerHTML = ("")
}
document.getElementById("clear output").onclick = () => {
    document.getElementById("output").innerHTML = "";
}

// Show camelCase 
document.getElementById("camelCase").onclick = () => {
    let camel = ("<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>")
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = (camel)
    document.getElementById("output").style.textAlign = ("left")
}

// Sum Number
document.getElementById("sum").onclick = () => {
    let num1 = (10)
    let num2 = (5)
    let sum = (num1 + num2)
    document.getElementById("statement").innerHTML = ("let num1 = 10 <br /> let num2 = 5 <br /> let sum = (num1 + num2)")
    document.getElementById("output").innerHTML = (sum)
    document.getElementById("output").style.textAlign = ("center")
}

// Subctract Number
document.getElementById("subctract").onclick = () => {
    let num1 = (10)
    let num2 = (5)
    let subctract = (num1 - num2)
    document.getElementById("statement").innerHTML = ("let num1 = (10) <br /> let num2 = (5) <br /> let subctract = (num1 - num2)")
    document.getElementById("output").innerHTML = (subctract)
    document.getElementById("output").style.textAlign = ("center")
}

// Multiply Number
document.getElementById("multiply").onclick = () => {
    let num1 = (10)
    let num2 = (5)
    let multiply = (num1 * num2)
    document.getElementById("statement").innerHTML = ("let num1 = (10) <br /> let num2 = (5) <br /> let multiply = (num1 * num2)")
    document.getElementById("output").innerHTML = (multiply)
    document.getElementById("output").style.textAlign = ("center")
}

// Divide Number
document.getElementById("divide").onclick = () =>{
    let num1 = 10;
    let num2 = 5;
    let divide = num1 / num2;
    document.getElementById("statement").innerHTML = ("let num1 = 10; <br /> let num2 = 5; <br /> let divide = num1 / num2;")
    document.getElementById("output").innerHTML = (divide)
    document.getElementById("output").style.textAlign = ("center")
}

// BODMAS Rule wale value
// Calculate Some Number
document.getElementById("calculate some number").onclick = () => {
    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("statement").innerHTML = ("let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);")
    document.getElementById("output").innerHTML = (someCalculation)
    document.getElementById("output").style.textAlign = ("center")
}