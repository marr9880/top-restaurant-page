const reviewsNav = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.replaceChildren();
    const welcomeHeading = document.createElement("h1");
    welcomeHeading.classList.add("welcome-heading");
    welcomeHeading.textContent = "Customer Reviews";
    const reviewsContent = document.createElement("div");
    reviewsContent.classList.add("reviews-content");
    const reviewOne = document.createElement("p");
    reviewOne.textContent = "Great food, better service, amazing atmosphere, and the stories are just incredible! - Moses";
    const reviewTwo = document.createElement("p");
    reviewTwo.textContent = "The food was very good. The service was spot on and the people are so friendly. You can't beat it in my opinion. - Joshua";
    const reviewThree = document.createElement("p");
    reviewThree.textContent = "The food was pretty good and the service was ok. The experience is amazing and you can bring the whole family. - Jacob";
    reviewsContent.appendChild(reviewOne);
    reviewsContent.appendChild(reviewTwo);
    reviewsContent.appendChild(reviewThree);
    contentContainer.appendChild(welcomeHeading);
    contentContainer.appendChild(reviewsContent);
};

export default reviewsNav;