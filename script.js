let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.getElementById("new");
let result = document.getElementById("result");
let res = document.querySelector(".result");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 5],
    [6, 7, 8],
    [3, 4, 5],
];

const resetGame = () => {
    turnO = true;
    enableBox();
    res.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner=(winner) => {
    res.classList.remove("hide");
    result.innerHTML=`Winner is ${winner}`;
    disableBox();
};

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos1 === pos3){
                showWinner(pos1);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);