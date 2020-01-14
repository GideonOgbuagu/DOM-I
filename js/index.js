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

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent["cta"]['h1'];

const ctaImage = document.getElementById("cta-img");

ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaButton = document.querySelector('.cta-text button');

ctaButton.innerText = siteContent["cta"]["button"];

// const features = querySelector(".top-content >.text-content h4");

// features.textContent = siteContent["main-content"]["features-h4"];

// const featuresContent = querySelector(".top-content .text-content p");

// featuresContent.textContent = siteContent["main-content"]["features-content"]







