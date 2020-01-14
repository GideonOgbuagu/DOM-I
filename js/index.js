const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav Links 

const link1 = document.querySelectorAll("a")[0];
const link2 = document.querySelectorAll("a")[1];
const link3 = document.querySelectorAll("a")[2];
const link4 = document.querySelectorAll("a")[3];
const link5 = document.querySelectorAll("a")[4];
const link6 = document.querySelectorAll("a")[5];

link1.textContent = siteContent["nav"]["nav-item-1"];
link2.textContent = siteContent["nav"]["nav-item-2"];
link3.textContent = siteContent["nav"]["nav-item-3"];
link4.textContent = siteContent["nav"]["nav-item-4"];
link5.textContent = siteContent["nav"]["nav-item-5"];
link6.textContent = siteContent["nav"]["nav-item-6"];


// DOM is Awesome section

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent["cta"]['h1'];

// cta Image section

const ctaImage = document.getElementById("cta-img");

ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaButton = document.querySelector('.cta-text button');

ctaButton.innerText = siteContent["cta"]["button"];

// Features section

const features = document.querySelector(".top-content .text-content h4");

features.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector(".top-content .text-content p");

featuresContent.textContent = siteContent["main-content"]["features-content"]

// About section

const about = document.querySelector(".top-content .text-content:nth-child(2) h4");

about.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(".top-content .text-content:nth-child(2) p");

aboutContent.textContent = siteContent["main-content"]["about-content"]

// Middle Image

const middleImage = document.getElementById("middle-img");

middleImage.src = siteContent["main-content"]["middle-img-src"];


// Services

const services = document.querySelector(".bottom-content .text-content:nth-child(1) h4");

services.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector(".bottom-content .text-content:nth-child(1) p");

servicesContent.textContent = siteContent["main-content"]["services-content"]

// Products

const product = document.querySelector(".bottom-content .text-content:nth-child(2) h4");

product.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector(".bottom-content .text-content:nth-child(2) p");

productContent.textContent = siteContent["main-content"]["product-content"]

// Vision

const vision = document.querySelector(".bottom-content .text-content:nth-child(3) h4");

vision.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector(".bottom-content .text-content:nth-child(3) p");

visionContent.textContent = siteContent["main-content"]["vision-content"]

// Contact section

const contact = document.querySelector('.contact');

contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

// Footer section

const footer = document.getElementsByTagName('footer')[0];

footer.children[0].innerText = siteContent["footer"]["copyright"];


// create, prepend() and appendChild() two links

const newLink1 = document.createElement("a");
const newLink2 = document.createElement("a");

newLink1.innerText = "Home";
newLink1.href = "";
newLink2.innerText = "Blog";
newLink2.href = "";

const navParent = document.querySelector("nav");

navParent.prepend(newLink1);
navParent.appendChild(newLink2);


// Styling Links green

const allLinks = document.querySelectorAll("nav a");

allLinks.forEach(function(link){
  link.style.color = "green";
})











