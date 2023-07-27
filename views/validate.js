document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
  
    // Get the user name and password from the form
    const usernamefrom = document.getElementById('username').value;
    const passwordfrom = document.getElementById('password').value;
  
    if(usernamefrom ==="" || passwordfrom.value===""){
        event.preventDefault();
        alert("please fill the form");
        return false;
    }
})

