const ratingValues = document.querySelectorAll(".rating_value");
const submitButton = document.querySelector(".rating_submit");

let ratingSelected = 0;

ratingValues.forEach((rating, index) => {
    rating.addEventListener("click", () => {
        ratingValues.forEach(rating => {
            rating.style.color = `var(--clr-medium-grey)`;
            rating.style.backgroundColor = `var(--clr-medium-blue)`;
        });
        
        rating.style.color = `var(--clr-white)`;
        rating.style.backgroundColor = `var(--clr-orange)`;
        ratingSelected = index + 1;
    })
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    const ratingBox = document.querySelector(".rating");
    const thankyouBox = document.querySelector(".thankyou");
    const thankyouRating = document.querySelector(".thankyou_rating");

    if (ratingSelected) {
        ratingBox.style.display = "none";
        thankyouBox.style.display = "flex";
        thankyouRating.textContent = `${ratingSelected}`;
    }
});