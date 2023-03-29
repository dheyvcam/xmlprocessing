document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      if (username === 'xmladmin' && password === 'elevate2023') {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to your main page
      } else {
        alert('Invalid username or password.');
      }
    });


