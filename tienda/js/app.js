window.addEventListener("scroll", closeMenu);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos ) {
          $(this).addClass("fadeIn");
      }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
  showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.star');
});

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

function fun1() {
  document.getElementById("select").style.display = "none";
  document.getElementById("2010").style.backgroundColor = "darkgreen";
  document.getElementById("a2012").classList.remove("show");
  document.getElementById("a2014").classList.remove("show");
  document.getElementById("2012").style.backgroundColor = "lightskyblue";
  document.getElementById("2014").style.backgroundColor = "lightskyblue";
  location.href = "#";
  location.href = "#2010";
}

function fun2() {
  document.getElementById("select").style.display = "none";
  document.getElementById("2012").style.backgroundColor = "lightgreen";
  document.getElementById("a2010").classList.remove("show");
  document.getElementById("a2014").classList.remove("show");
  document.getElementById("2010").style.backgroundColor = "lightskyblue";
  document.getElementById("2014").style.backgroundColor = "lightskyblue";
  location.href = "#";
  location.href = "#2012";
}

function fun3() {
  document.getElementById("select").style.display = "none";
  document.getElementById("2014").style.backgroundColor = "lightgreen";
  document.getElementById("a2010").classList.remove("show");
  document.getElementById("a2012").classList.remove("show");
  document.getElementById("2010").style.backgroundColor = "lightskyblue";
  document.getElementById("2012").style.backgroundColor = "lightskyblue";
  location.href = "#";
  location.href = "#2014";
}

function fun4() {
  document.getElementById("select").style.display = "none";
  document.getElementById("2014").style.backgroundColor = "lightgreen";
  document.getElementById("a2010").classList.remove("show");
  document.getElementById("a2012").classList.remove("show");
  document.getElementById("2010").style.backgroundColor = "lightskyblue";
  document.getElementById("2012").style.backgroundColor = "lightskyblue";
  location.href = "#";
  location.href = "#2014";
}

function fun5() {
  document.getElementById("select").style.display = "none";
  document.getElementById("2014").style.backgroundColor = "lightgreen";
  document.getElementById("a2010").classList.remove("show");
  document.getElementById("a2012").classList.remove("show");
  document.getElementById("2010").style.backgroundColor = "lightskyblue";
  document.getElementById("2012").style.backgroundColor = "lightskyblue";
  location.href = "#";
  location.href = "#2014";
}