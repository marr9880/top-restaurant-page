const menuNav = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.replaceChildren();
    const welcomeHeading = document.createElement("h1");
    welcomeHeading.classList.add("welcome-heading");
    welcomeHeading.textContent = "Welcome To Noah's Ark Restaurant";
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");
    const menuPara1 = document.createElement("p");
    menuPara1.textContent = "Does this work?";
    menuContent.appendChild(menuPara1);
    contentContainer.appendChild(welcomeHeading);
    contentContainer.appendChild(menuContent);
};

export default menuNav;