document.getElementById("submit-btn").addEventListener("click", () => {
  const email = getInputFromInputField("email-field");
  const password = getInputFromInputField("pass-field");

  if (email === "admin@gmail.com" && password === "admin") {
    window.location.href = "/othersHTML/myAccount.html";
  } else if (email === "" && password === "") {
    alert("Please login");
  } else {
    alert(
      `Use this Email and Password\nEmai: admin@gmail.com\npassword: admin`
    );
  }
});
