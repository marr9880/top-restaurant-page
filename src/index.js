import "./styles.css";

(function () {
    const contentContainer = document.querySelector("#content");
    const welcomeHeading = document.createElement("h1");
    welcomeHeading.classList.add("welcome-heading");
    welcomeHeading.textContent = "Welcome To Noah's Ark Restaurant";
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    const homePara1 = document.createElement("p");
    homePara1.textContent = "Here at Noah's Ark, bring your significant other or your friend but bring big appetites because all meals come with 2 of everything!"
    const homePara2 = document.createElement("p");
    homePara2.textContent = "Choose 2 each of appetizers, main courses, and desserts. See our menu page for the options."
    const homePara3 = document.createElement("p");
    homePara3.textContent = "Stay til you're full, but unlike in Noah's day it won't take 40 days and 40 nights."
    homeContent.appendChild(homePara1);
    homeContent.appendChild(homePara2);
    homeContent.appendChild(homePara3);
    contentContainer.appendChild(welcomeHeading);
    contentContainer.appendChild(homeContent);
})();