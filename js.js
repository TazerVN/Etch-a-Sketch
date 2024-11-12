const container = document.querySelector(".container")
const userContainer = document.querySelector(".user")
const textContainer = document.querySelector(".text")
const guide = document.createElement("div")

const userInputRow = document.createElement("INPUT");
const userInputCollumn = document.createElement("INPUT");  
const submitButton = document.createElement("button");
submitButton.textContent = "Submit"
submitButton.addEventListener('click', () =>{
    createNewGrid()
})

let m = 0

userInputRow.setAttribute("type", "number");
userInputCollumn.setAttribute("type", "number");

const newGridButton = document.createElement("button")
newGridButton.classList.add("new")
newGridButton.addEventListener("click", () => {
    createNewGrid()
})





userInput()

function createGrid(row, collumn){
    const gridRow = document.createElement("div")
    gridRow.classList.add("row")

    for(i = 0;i < row; i++){
        const gridCollum = document.createElement("div");
        gridCollum.classList.add("collumn");

        for(r = 0; r < collumn; r++){
        const box = document.createElement("div")
        box.classList.add("grid")
        gridCollum.appendChild(box)

        box.addEventListener("mouseover", () =>{
            box.style.background = "black";
        })
    }
    gridRow.appendChild(gridCollum)
}
    container.appendChild(gridRow)

}

function userInput(){
    const x = document.createElement("div")
    guide.textContent = "Choose your canvas size: "
    x.textContent = " x "


    userContainer.appendChild(userInputRow)
    userContainer.appendChild(x)
    userContainer.appendChild(userInputCollumn)
    userContainer.appendChild(submitButton)
    textContainer.appendChild(guide)
    console.log(userInputRow)
    console.log(userInputCollumn)

}

function createNewGrid(){
    const rowValue = userInputRow.value
    const collumnValue = userInputCollumn.value
    if((rowValue > 0 && rowValue < 100) && (collumnValue > 0 && collumnValue < 100)){
            if(container.hasChildNodes()){
                while(container.firstChild){
                    container.removeChild(container.lastChild)
                }
            }
            container.style.visibility = "visible";
            m = 0
            createGrid(rowValue,collumnValue)
            guide.textContent = "Hover on one of the square and see what happen!"
        
    }
    else{
        m++
        if (m == 1){
            wrongWay("Dude! that's way too big. Spare your browser man. More than 0 and less than 100 my guy")
        }

        if (m == 2){
            wrongWay("Idk man...less than 100! I hope you can read.")
        }

        if (m == 3){
            wrongWay("I already told...Ok you just want to see if I coded extra interaction huh")
        }

        if (m == 4){
            wrongWay("Well jokes on you I did!")
        }

        if (m == 5){
            wrongWay("what the fuck am I doing with my life")
        }

        if (m == 6){
            wrongWay("ok you know what...I'm just not gonna talk")
        }
        
        if (m == 7){
            wrongWay("...")
        }

        if (m == 8){
            wrongWay("....")
        }

        if (m == 9){
            wrongWay(".....")
        }

        if (m == 10){
            wrongWay("can you just leave me alone!")
        }

        if (m == 11){
            wrongWay("you know what..fuck you i'm gonna reload your webpage")
            var timeout = setTimeout(() => {
                location.reload()
            },3000) 
        }

    }
}

function wrongWay(text){
        container.style.visibility = "hidden";
        submitButton.disabled = true;
        guide.textContent = text
        var timeout = setTimeout(() => {
            guide.textContent = "Choose your canvas size: "
            submitButton.disabled = false
        }, 3000);
}