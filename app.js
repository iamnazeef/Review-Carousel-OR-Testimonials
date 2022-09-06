let testimonialEl = document.getElementById("testimonial-el")
let testimonialNamesEl = document.getElementById("testimonialNames-el")
let testimonialDesignationsEl = document.getElementById("testimonialDesignations-el")
let moveLeftEl = document.getElementById("moveLeft-el")
let moveRightEl = document.getElementById("moveRight-el")
let surpriseEl = document.getElementById("surprise-el")
let userImageEl = document.getElementById("userImage-el")


// CAROUSEL / TESTIMONIALS OF USERS
let carousel = ['"I love clothing. Dude, your stuff is the bomb!"', '"Clothing did exactly what you said it does. Man, this thing is getting better and better as I learn more about it. You wont regret it."', '"Needless to say we are extremely satisfied with the results. I could probably go into sales for you. Clothing has completely surpassed our expectations. Your company is truly upstanding and is behind its product 100%."', '"Needless to say we are extremely satisfied with the results. Your company is truly upstanding and is behind its product 100%. Really good."']

// IMAGES OF USERS
let carouselUserImages = ['images/user1.jpg', 'images/user2.jpg', 'images/user3.jpg', 'images/user4.jpg']

// NAMES OF USERS
let carouselNames = ['Rick F', 'John C', 'Natasha R', 'Steve P']

// DESIGNATIONS OF USERS
let carouselDesginations = ['DevOps', 'UI/UX Designer', 'Backend Developer', 'Fashion Designer']


//DEFAULT TESTIMONIALS
let testimonial = carousel.length / 2

testimonialEl.innerHTML = carousel[testimonial]
testimonialNamesEl.innerHTML = carouselNames[testimonial]
testimonialDesignationsEl.innerHTML = carouselDesginations[testimonial]
userImageEl.src = carouselUserImages[testimonial]

//MOVE LEFT ARROW BUTTON
moveLeftEl.onclick = () => {

    if (testimonial > 0) {
        --testimonial   //CHANGING TESTIMONIAL INDEX INDEX NUMBER
        testimonialEl.innerHTML = carousel[testimonial]  // CHANGING TESTIMONIAL
        testimonialNamesEl.innerHTML = carouselNames[testimonial]
        testimonialDesignationsEl.innerHTML = carouselDesginations[testimonial]
        userImageEl.src = carouselUserImages[testimonial]
    }

    // THIS CAN BE USED IF YOU WANT TO HIDE THE ARROW WHEN THERE IS NO MORE TESTIMONIALS LEFT

    moveRightEl.style.display = "block"
    if (testimonial == 0) {
        moveLeftEl.style.display = "none"
    }
}


//MOVE RIGHT ARROW BUTTON
moveRightEl.onclick = () => {

    if (testimonial < carousel.length - 1) {
        ++testimonial
        testimonialEl.innerHTML = carousel[testimonial]
        testimonialNamesEl.innerHTML = carouselNames[testimonial]
        testimonialDesignationsEl.innerHTML = carouselDesginations[testimonial]
        userImageEl.src = carouselUserImages[testimonial]
    }

    // THIS CAN BE USED IF YOU WANT TO HIDE THE ARROW WHEN THERE IS NO MORE TESTIMONIALS LEFT

    moveLeftEl.style.display = "block"
    if (testimonial == carousel.length - 1) {
        moveRightEl.style.display = "none"
    }
}

//SURPISE ME BUTTON

let previousTestimonial = null
surpriseEl.onclick = () => {

    let surpriseTestimonial = Math.floor(Math.random() * carousel.length)

    while (surpriseTestimonial == previousTestimonial) {
        surpriseTestimonial = Math.floor(Math.random() * carousel.length)
    }

    moveRightEl.style.display = "block"
    moveLeftEl.style.display = "block"

    if (surpriseTestimonial == 0) {
        moveRightEl.style.display = "block"
        moveLeftEl.style.display = "none"
    } else if (surpriseTestimonial == carousel.length - 1) {
        moveLeftEl.style.display = "block"
        moveRightEl.style.display = "none"
    }

    testimonialEl.innerHTML = carousel[surpriseTestimonial]
    testimonialNamesEl.innerHTML = carouselNames[surpriseTestimonial]
    testimonialDesignationsEl.innerHTML = carouselDesginations[surpriseTestimonial]
    userImageEl.src = carouselUserImages[surpriseTestimonial]

    testimonial = surpriseTestimonial

    previousTestimonial = surpriseTestimonial
}