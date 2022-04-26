function Successful() {
  let username = document.getElementById("User").value;
  let password = document.getElementById("pwd").value;

  if (username.includes("@gmail") && password.includes("@")) {
    alert("Your are Succesfully Login");
    return true;
  } else if (username == null || password != "") {
    alert("Please enter Your Email");
    return false;
  } else if (username != "" || password == null) {
    alert("Please enter Your Password");
    return false;
  }
  alert("Please Enter Your Credentials");
  return false;
}
