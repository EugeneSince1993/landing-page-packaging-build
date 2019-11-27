// Mobile Menu - Start
function myFunction1 () {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Mobile Menu - End

// Google Maps API - Start
function initMap() {
  var myLatLng = {lat: 55.882508, lng: 36.654970};
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Наш офис'
  });
}
// Google Maps API - End

// Range Input - Start
window.onload = function () {
  var theDiv = document.getElementById("value-of-range");
  var valueOfRange = document.getElementById("input-range").value;
  var content = document.createTextNode(valueOfRange);
  theDiv.appendChild(content);
}

document.getElementById("input-range").onclick = changeRange;
document.getElementById("input-range").ontouchstart = changeRange;

function changeRange () {
  for (var i = 0; i < 100; i++) {
    var theDiv = document.getElementById("value-of-range");
    theDiv.innerHTML = "";
    var valueOfRange = document.getElementById("input-range").value;
    var content = document.createTextNode(valueOfRange);
    theDiv.appendChild(content);
  }
}
// Range Input - End

// Select Input - Start
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "entire-custom-select": */
x = document.getElementsByClassName("entire-custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element , create new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element, create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box, and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes, and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document, except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box, then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// Select Input - End

