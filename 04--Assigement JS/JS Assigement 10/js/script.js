// localStorage.setItem("FirstName", "Bilal")
// localStorage.setItem("LastName", "Ahmad")
// const data = localStorage.getItem("FirstName")
// console.log("FirstName", data)

// localStorage.removeItem("")


// ----------------- ------------------- //
// CRUD Operation
// C = Create setItem()
// R = Read getItem()
// U = Update setItem()
// D = Delete removeItem()

// ------------------------- ------------- //
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

const create = () => {
    let fullName = "Sakindar"
    
    localStorage.setItem("fullName", fullName)
}

const read = () => {
    let fullName = localStorage.getItem("fullName")
    document.getElementById("fullName").innerHTML = fullName
}

const update = () => {
    let fullName = "Sultan"

    localStorage.setItem("fullName", fullName)
}

const delete0 = () => {
    localStorage.removeItem("fullName")
    
}


// JavaScript Array section

const createArray = () => {
    let users = [{firstName: "Aslam"},{firstName: "Wahab"}]

    localStorage.setItem("users", JSON.stringify(users))
}

const readArray = () => {
    let users = JSON.parse(localStorage.getItem("users"))   
    console.log("users", users)
}

const updateArray = () => {
    let newUser = {firstName: "Sultan Durrani"}

    const users = JSON.parse(localStorage.getItem("users"))
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
}

const deleteArray = () => {
    localStorage.removeItem("users")
}

const users =  [
    { id: "1", firstName: "Ahmad", city: "Faisalabad" },
    { id: "2", firstName: "Faizan", city: "Lahore" },
    { id: "3", firstName: "Ali", city: "Islamabad" },
    { id: "4", firstName: "Haroon", city: "Multan" },
    { id: "5", firstName: "Zubair", city: "Dubai" },
    { id: "6", firstName: "Kadwani", city: "Dubai"}
]

//   const user = users.find((users, i) => {return users.city === "Dubai"})
//   const user = users.filter((users, i) => {return users.city === "Dubai"})
  const user = users.includes((users, i) => {return users.city === "Dubai"})

  
//   if(!user) { toastifyError ("user not found") }

  console.log("user", user)