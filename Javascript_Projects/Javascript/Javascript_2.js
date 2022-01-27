function validateForm() {
    let x = document.getElementById("password").value;
    console.log(x);
    if (x !== "password") {
      alert("Password required");
      return false;
    }
}