const menuNav = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.replaceChildren();
    const welcomeHeading = document.createElement("h1");
    welcomeHeading.classList.add("welcome-heading");
    welcomeHeading.textContent = "Our Menu - Choose 2 from each section.";
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");
    const appetizers = document.createElement("div");
    appetizers.classList.add("appetizers-container");
    const appetizerHeader = document.createElement("h2");
    appetizerHeader.textContent = "Start with one of our tasty appetizers";
    const appetizerOneTitle = document.createElement("h3");
    appetizerOneTitle.textContent = "Mozorella sticks";
    const appetizerOneDescr = document.createElement("p");
    appetizerOneDescr.textContent = "This delicious appetizer comes with 6 cheesy mozorella sticks fried to perfection!"
    const appetizerTwoTitle = document.createElement("h3");
    appetizerTwoTitle.textContent = "Buffalo Wings";
    const appetizerTwoDescr = document.createElement("p");
    appetizerTwoDescr.textContent = "This delicious appetizer comes with 6 wings with your choice of bbq, mild, or hot sauce."
    const appetizerThreeTitle = document.createElement("h3");
    appetizerThreeTitle.textContent = "House Salad";
    const appetizerThreeDescr = document.createElement("p");
    appetizerThreeDescr.textContent = "Our house salad with greens, tomatoes, cheese, croutons, and your choice of dressing."
    const entrees = document.createElement("div");
    entrees.classList.add("entrees-container");
    const entreeHeader = document.createElement("h2");
    entreeHeader.textContent = "Choose on of our delicious and filling entrees next. Each entree served with your choice of baked potato or steamed veggies.";
    const entreeOneTitle = document.createElement("h3");
    entreeOneTitle.textContent = "Steak";
    const entreeOneDescr = document.createElement("p");
    entreeOneDescr.textContent = "Choose from a 4oz fillet, 8oz strip, or 10oz ribeye - cooked to your liking."
    const entreeTwoTitle = document.createElement("h3");
    entreeTwoTitle.textContent = "Burger";
    const entreeTwoDescr = document.createElement("p");
    entreeTwoDescr.textContent = "A delicious half pound burger cooked to your liking and with your choice of toppings."
    const entreeThreeTitle = document.createElement("h3");
    entreeThreeTitle.textContent = "Fish";
    const entreeThreeDescr = document.createElement("p");
    entreeThreeDescr.textContent = "A beautiful cod or halibut fillet cooked perfectly."
    const desserts = document.createElement("div");
    desserts.classList.add("desserts-container");
    const dessertHeader = document.createElement("h2");
    dessertHeader.textContent = "Finish your meal with one of our incredible and sweet desserts!";
    const dessertOneTitle = document.createElement("h3");
    dessertOneTitle.textContent = "Triple Chocolate Brownie";
    const dessertOneDescr = document.createElement("p");
    dessertOneDescr.textContent = "A decadent chocolate brownie, topped with chocolate ice cream, with fudge dripping!"
    const dessertTwoTitle = document.createElement("h3");
    dessertTwoTitle.textContent = "Slice of Pie";
    const dessertTwoDescr = document.createElement("p");
    dessertTwoDescr.textContent = "A large slice of apple, cherry, or pumpkin pie topped with whipped cream."
    const dessertThreeTitle = document.createElement("h3");
    dessertThreeTitle.textContent = "Ice Cream Sundae";
    const dessertThreeDescr = document.createElement("p");
    dessertThreeDescr.textContent = "Just a delicious sundae with your choice of ice cream flavors and toppings."
    appetizers.appendChild(appetizerHeader);
    appetizers.appendChild(appetizerOneTitle);
    appetizers.appendChild(appetizerOneDescr);
    appetizers.appendChild(appetizerTwoTitle);
    appetizers.appendChild(appetizerTwoDescr);
    appetizers.appendChild(appetizerThreeTitle);
    appetizers.appendChild(appetizerThreeDescr);
    entrees.appendChild(entreeHeader);
    entrees.appendChild(entreeOneTitle);
    entrees.appendChild(entreeOneDescr);
    entrees.appendChild(entreeTwoTitle);
    entrees.appendChild(entreeTwoDescr);
    entrees.appendChild(entreeThreeTitle);
    entrees.appendChild(entreeThreeDescr);
    desserts.appendChild(dessertHeader);
    desserts.appendChild(dessertOneTitle);
    desserts.appendChild(dessertOneDescr);
    desserts.appendChild(dessertTwoTitle);
    desserts.appendChild(dessertTwoDescr);
    desserts.appendChild(dessertThreeTitle);
    desserts.appendChild(dessertThreeDescr);
    menuContent.appendChild(appetizers);
    menuContent.appendChild(entrees);
    menuContent.appendChild(desserts);
    contentContainer.appendChild(welcomeHeading);
    contentContainer.appendChild(menuContent);
};

export default menuNav;