let input = document.querySelector("input");
let ulTag = document.querySelector("ul")

input.addEventListener("keydown", function (e){
    // console.log(e);
    let key = e.key;
    // console.log(key);
    if(key == "Enter"){
        let value = input.value;
        // console.log(value);
        input.value = ""
        let liTag = document.createElement("li");
        liTag.innerText = value;
        ulTag.appendChild(liTag);
    }
})