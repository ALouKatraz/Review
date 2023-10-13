const reviews = [
    {
        image: "https://picsum.photos/400",
        name1: "Louise",
        job: "Codeuse",
        info: "Louise, codeuse en formation. Elle apprend chaque jour et ne lâche pas car elle a enfin trouvé sa voie!.",
    },
    {
        image: "https://picsum.photos/300",
        name1: "Leïa",
        job: "Informaticienne",
        info: "Jean, Informaticien depuis <<le début de l'internet>> comme il aime à le dire.",
    },
    {
        image: "https://picsum.photos/200",
        name1: "Lydia",
        job: "cheffe RH",
        info: "Lydia, j'aime placer les gens au bon endroit.",
    },
];
const nbr = reviews.length;
const image = document.getElementById("image");
const name1 = document.getElementById("name1");
const job = document.getElementById("job");
const info = document.getElementById("info");

let currentReview = 0

function displayReview(currentReview) {
    console.log("currentReview", currentReview);
    image.src = currentReview.image;
    name1.innerHTML = currentReview.name1;
    job.innerHTML = currentReview.job;
    info.innerHTML = currentReview.info;
    }

function test(){
    const randomNumber = Math.floor(Math.random()* nbr);
    displayReview(reviews[randomNumber]);
    }
const Surprise = document.getElementById("button");
Surprise.addEventListener("click", test);
