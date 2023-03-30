const seaCont = document.getElementById("top-search");
const serHide = document.getElementById("topsercross-icon");
const serShow = document.getElementById("ser-btn-icon");

serShow.addEventListener("click", () => {
  seaCont.style.padding = "5px 5%";
  seaCont.style.height = "50px";
  seaCont.style.transition = "all 0.5s";
});

serHide.addEventListener("click", () => {
  seaCont.style.height = "0";
  seaCont.style.padding = "0 5%";
})


// =============Navbar Hide and Show==============

const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
})


// =============submenu====================

const droptog = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submanu");

for (let x = 0; x < droptog.length; x++) {
  droptog[x].addEventListener("click", () => {
    submenu[x].classList.toggle("submenushow");
  });
}

// ============sub=sub=dropdown=================

const subsubtog = document.querySelectorAll(".sub-sub-drop");
const subSubMenu = document.getElementsByClassName("sub-sub-menu");


for (let y = 0; y < subsubtog.length; y++) {
  subsubtog[y].addEventListener("click", () => {
    subSubMenu[y].classList.toggle("show-sub-sub-menu");
  })
}


// function([string1, string2],target id,[color1,color2])    
 consoleText(['Welcome.', 'XML Processing Files', '#Elevate2023.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
