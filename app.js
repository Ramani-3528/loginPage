function login(){
  const user = document.getElementById("Username").value;
  const pass = document.getElementById("Password").value;

  if (user === "siva" && pass === "0269") {
    document.getElementById("output");
    window.location.href="./login.html";
  }
  else if (user === "" || pass === "") {
    alert("Please fillout both boxes");
  } else {
    alert("Invalid username or password!");
  }
}