function validate() {
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let passwd = document.getElementById("pwd").value;
  let repasswd = document.getElementById("repwd").value;

  if (!name == "" && !email == "" && !passwd == "" && !repasswd == "") {
    alert("Your Account is Created");
    return true;
  } else if (email == !email.includes("@gmail.com")) {
    alert("Please Enter Correct Email");
    return false;
  } else if (passwd == "") {
    alert("please Enter Your Password");
    return false;
  } else if (passwd != repasswd) {
    alert("please Enter Correct password");
    return false;
  } else if (name == "") {
    alert("please Enter Your fullname");
    return false;
  }
  alert("Enter Your Details");
  return false;
}
