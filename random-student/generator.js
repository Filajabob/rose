const STUDENTS = ["Elliot", "Saad", "Aisha", "Lana", "Lamees", "Raber", "Spencer", "Xander",
                "Tanmeet", "Milix", "Muhammad", "Malik", "Vissar", "Phosa", "Daryn", "Sam", "Turner", "Bushra",
                "Huda", "Nosa", "Emama", "Jackson", "Maryam", "Sabiq", "Ky", "Asim", "Angela", "Lucas", "Liiamm"];

var removeButton = document.createElement("button");
removeButton.innerText = "Remove Student";
removeButton.className = "fancy-button";
removeButton.onClick = "removeStudent();";
removeButton.style.textAlign = "center";

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(array) {
    return array[randint(0, array.length - 1)];
}

function sleep(secs) {
    return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

function hide(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
}

function removeStudent() {
    var index = STUDENTS.indexOf(document.getElementById("result").innerText)

    if (index !== -1) {
        STUDENTS.splice(index, 1);
    }
}

function promptRemoveStudent() {
    var buttonDiv = document.getElementById("remove-student");
    buttonDiv.appendChild(removeButton);
}

async function generate() {
    removeStudentDiv = document.getElementById("remove-student")

    if (removeStudentDiv.firstChild) {
        removeStudentDiv.removeChild(removeButton)
    }

    var result = document.getElementById("result");

    for (var i = 0; i <= 20; i++) {
        result.innerText = choice(STUDENTS);
        await sleep(i * 0.03);
    }

    await sleep(1);

    promptRemoveStudent();
    console.log(STUDENTS)

    document.body.style.backgroundColor = "rgb(2, 209, 2)";
    document.body.style.color = "white";

    await sleep(3);

    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
}