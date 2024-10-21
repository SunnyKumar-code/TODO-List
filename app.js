let index = document.querySelector("#taskInput");
let addbtn = document.querySelector("#btn");
let ul = document.querySelector("#taskList");

addbtn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = index.value;

    let delbtn = document.createElement("i");
    delbtn.classList.add("fa-solid", "fa-xmark", "del-btn");
    li.appendChild(delbtn);
    ul.appendChild(li);
    index.value = "";
   
});

index.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addbtn.click();
    }
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("del-btn")) {
        event.target.parentElement.remove();
    }
});


