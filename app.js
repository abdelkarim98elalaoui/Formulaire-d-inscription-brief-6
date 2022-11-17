const btn = document.getElementById("btn");
const output = document.getElementById("output");
const prenomP = document.getElementById("prenomP");
let nameInp = document.querySelector("#name");
let prenomInp = document.querySelector("#prename");
let emailInp = document.querySelector("#email");
let emailP = document.querySelector("#emailP");
let phoneInp = document.querySelector("#number");
let phoneP = document.querySelector("#numberP");

//events

btn.addEventListener("click", check);
//function
function check() {
  //variables
  let name = nameInp.value;
  let prename = prenomInp.value;
  let email = emailInp.value;
  let phone = phoneInp.value;
  // conditions
  if (name.match(/[0-9]/g)) {
    output.innerHTML = " its num ";
    nameInp.style.border = "1px red solid";
    output.style.color = "red";
  } else if (name.length > 30) {
    output.innerHTML = "its big bitch";
    nameInp.style.border = "1px red solid";
    output.style.color = "red";
  } else if (name.length < 3) {
    output.innerHTML = "its short ";
    nameInp.style.border = "1px red solid";
    output.style.color = "red";
  } else {
    nameInp.style.border = "1px green solid";
    output.style.color = "green";
    output.innerHTML = "";
  }
  //   prename
  if (prename.match(/[0-9]/g)) {
    prenomP.innerHTML = " its num ";
    prenomInp.style.border = "1px red solid";
    prenomP.style.color = "red";
  } else if (prename.length > 30) {
    prenomP.innerHTML = "its big bitch";
    prenomInp.style.border = "1px red solid";
    prenomP.style.color = "red";
  } else if (prename.length < 3) {
    prenomP.innerHTML = "its short ";
    prenomInp.style.border = "1px red solid";
    prenomP.style.color = "red";
  } else {
    prenomInp.style.border = "1px green solid";
    prenomP.style.color = "green";
    prenomP.innerHTML = "";
  }
  //email
  if (emailInp.value === name + "." + prename + "@ofppt.ma") {
    console.log(name, prename);
    console.log("im here");
    emailInp.style.border = "1px green solid";
    emailP.style.color = "green";
    emailP.innerHTML = "";
  } else {
    emailInp.style.border = "1px red solid";
    emailP.style.color = "red";
    emailP.innerHTML = "its must be nom.prenom@ofppt.ma";
  }
  //phone
  let two = phone.slice(0, 2);
  console.log(two);
  if ((two === "05" || two === "06" || two === "07") && phone.length == 10) {
    phoneP.innerHTML = "";
    phoneInp.style.border = "1px green solid";
    phoneP.style.color = "green";
    if (phone.match(/[a-z]/g)) {
      phoneInp.style.border = "1px red solid";
      phoneP.style.color = "red";
      phoneP.innerHTML = "its must have just numbers ";
    }
  } else {
    phoneP.innerHTML =
      "its must start with 05 or 06 or 07 and more than 9 numbers";
    phoneP.style.color = "red";
    phoneInp.style.border = "1px red solid";
  }

  // genre
  let feminin = document.querySelector("#feminin");
  let masculin = document.querySelector("#masculin");
  let genreRadio = document.querySelector(".genreRadio");
  if (feminin.checked || masculin.checked) {
    genreRadio.style.color = "green";
  } else {
    console.log("its not");
    genreRadio.style.color = "red";
  }
}
