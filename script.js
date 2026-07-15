const stats = document.querySelectorAll(".stat h2");

stats.forEach(stat => {

    const target =
        parseInt(stat.innerText);

    let count = 0;

    const update = () => {

        if (count < target) {

            count++;

            stat.innerText = count + "+";

            setTimeout(update, 80);

        }

    };

    update();

});
const cards = document.querySelectorAll(".skill-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {
        card.style.transition = "0.8s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 250);

});
const boxes = document.querySelectorAll(".skill-box");
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

boxes.forEach(box => {

    box.style.opacity = "0";
    box.style.transform = "translateY(50px)";
    box.style.transition = "0.8s ease";

    observer.observe(box);

});
function filterItems(category, button) {

    let items =
        document.querySelectorAll(".gallery-item");

    let buttons =
        document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    items.forEach(item => {

        if (category === "all") {

            item.style.display = "block";

        }
        else if (item.classList.contains(category)) {

            item.style.display = "block";

        }
        else {

            item.style.display = "none";
        }

    });

}
const formBox = document.querySelector(".contact-form-box");

if (formBox) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                formBox.style.opacity = "1";
                formBox.style.transform = "translateX(0)";

            }

        });

    });

    formBox.style.opacity = "0";
    formBox.style.transform = "translateX(100px)";
    formBox.style.transition = "1s";

    observer.observe(formBox);
}
const readBtn = document.getElementById("readBtn");
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");

readBtn.addEventListener("click", () => {

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        readBtn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        readBtn.innerHTML = "Read More";
    }

});
const detailsBtn = document.querySelector(".details-btn");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const backBtn = document.querySelector(".back-btn");

cardBack.style.display = "none";

detailsBtn.onclick = () => {
    cardFront.style.display = "none";
    cardBack.style.display = "block";
};

backBtn.onclick = () => {
    cardFront.style.display = "block";
    cardBack.style.display = "none";
};
function openImage(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("popupImage").src = src;
}
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}


