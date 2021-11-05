var headStyle = document.getElementById("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headStyle.classList.add("active");
  } else {
    headStyle.classList.remove("active");
  }
}

