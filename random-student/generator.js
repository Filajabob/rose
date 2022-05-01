const STUDENTS = ["Elliot", "Saad", "Aisha", "Lana", "Lamees", "Raber", "Spencer", "Xander",
                    "Tanmeet", "Milix", "Muhammad", "Malik", "Vissar", "Phosa", "Daryn", "Sam", "Turner", "Bushra",
                    "Huda", "Nosa", "Emama", "Jackson", "Maryam", "Sabiq", "Ky", "Asim", "Angela", "Lucas", "Liiamm"];

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(array) {
    return array[randint(0, array.length - 1)];
}

function sleep(secs) {
    return new Promise(resolve => setTimeout(resolve, secs * 100));
}

function hide(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
}

document.getElementById("generate-input").addEventListener("submit", async function(e) {
    e.preventDefault();
    var result = document.getElementById("result");

    for (var i = 0; i <= 20; i++) {
        result.innerText = choice(STUDENTS)
        await sleep(i * 0.3)
    }
})