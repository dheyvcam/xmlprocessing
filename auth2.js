document.getElementById('login-form').addEventListener('submit', function(validate) {
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



<!-- http://www.spacegun.co.uk -->

var message = "function disabled";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck;

 /*function check(e)
    {
    alert(e.keyCode);
    }*/
    document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
                alert('not allowed');
            }
            return false;
    };
