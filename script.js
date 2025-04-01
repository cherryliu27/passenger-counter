// document.getElementById("count-el").innerText=5


let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment(){
    console.log("button is clicked")
    count += 1
    countEl.innerText = count
}

function save(){
    console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr

}