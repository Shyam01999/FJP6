let input = document.querySelector("input");
let ulTag = document.querySelector("ul")

input.addEventListener("keydown", function (e){
    // console.log(e);
    let key = e.key;
    // console.log(key);
    if(key == "Enter"){
        let value = input.value;
        // console.log(value);
        if(value.length == 0){
            return
        }
        input.value = ""
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div>${value}</div>
                           <div class="delete"><i class="fa fa-trash"></i></div>`;
        ulTag.appendChild(liTag);
        handleDelete(liTag);
    }
})

function handleDelete(liTag){
    let deleteDiv = liTag.querySelector(".delete");
    deleteDiv.addEventListener("click", function(){
        liTag.remove();
    })
}