// Tostify Error
function toastifyError(message = 'No message' , type) {

   let bgColor;

   switch (type) {
    case "success":
        bgColor = "linear-gradient(to right, #1d976c, #93f9b9)"
        break;
    case "error":
        bgColor = "linear-gradient(to right, #93291e, #ed213a)"
        break;
    default:
        bgColor = "#000"
        break;
   }

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
      background:  bgColor,      //"linear-gradient(to right, #ff416c, #ff4b2b)"
      // background: "linear-gradient(to right, #b00a8f, #02191a)",
    }
  }).showToast();
  return;
}

const users = []
const user = {
    firstName: "Ali",
    lastName: "Ahmad",
    fullName: "Ali Ahmad",
    city: "Faisalabad",
    age: 20,
}

 users.push(user)
 console.log("user",user)
 console.log("users", users)

const getFieldValue = (id) => {
    return document.getElementById(id).value
}
function printUsers() {
  if(!users.length) {
    toastifyError("There is not a single user available.", "error")
    return;
  }
  console.log(users)
}

 const handleSubmit = () => {

    event.preventDefault()

    let firstName = getFieldValue("firstName")
    let lastName = getFieldValue("lastName")
    let email = getFieldValue("email")
    let dob = getFieldValue("dob")
    
    firstName = firstName.trim()
    lastName = lastName.trim()
    let fullName = (firstName + " " + lastName).trim();
    if (firstName.length < 3) {return toastifyError("Please enter your first name", "error")}
    if (email.length < 6) {return toastifyError("Please type your email", "error")}
    if (!dob) {return toastifyError("Please type a date of birth", "error")}
    console.log('firstName', firstName)
    console.log('lastName', lastName)
    console.log("fullName", fullName)
    console.log('email', email)
    console.log('dob', dob)
    
    const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    const user2 = {
       id, firstName, lastName, fullName, email, dob
    }
    user2.status = "active"
    user2.createdAt = new Date().getTime()

    users.push(user2)   // ✅ YAHAN likhna hai

    console.log("Updated users:", users)
                                                
    console.log("id", id)
    console.log("user2", user2)
    
 }

 const user3 = {
      firstName: "Bilal",
      lastName: "Ahmad",
      fullName: function () {
        return (user3.firstName + " " + user3.lastName).trim()
      }
    }
    
    user3.status = "active"
    user3.firstName = "Moiz"
     
    console.log("user3", user3.fullName())
    delete user3.fullName 

    var user4 = [];

    function User(firstName, lastName, email, dob)  {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.dob = dob;
    }

    const user5 = {firstName, lastName, email, dob}              // ye simple teiqa ha mazeed information ka lie chatgpt ke help la
    const user6 = new User("Ali", "Bilal", "email", "2021")      // ye constructor ha is ke mazeed information ka lie chatgpt se help la