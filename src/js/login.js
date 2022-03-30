function Successful() {
  let username = document.getElementById("User").value;
  let password = document.getElementById("pwd").value;

  if (username.includes("@gmail") && password.includes("abc@123")) {
    alert("Succesfully Login");
    return true;
  }
  alert("Please enter Correct email");
  return false;
}
