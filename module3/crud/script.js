let name = document.querySelector("#name");
let submitButton = document.querySelector("#submitValue");
let message = document.querySelector(".message");
let tableContainer = document.querySelector("#root");
let id="no";
//localStorage.clear();
showData();
submitButton.addEventListener('click',manageData)
function manageData(){
    //console.log("hi")
    message.innerHTML="";
    let nameContainerValue = name.value;
    if(nameContainerValue ==""){
        message.innerHTML = "Please enter your name";
    }
    else{
        if(id == "no"){
            let arr = getCrudData();
            //console.log(arr);
            if(arr == null){
                let data = [nameContainerValue];
                setCrudData(data)
            }
            else{
                arr.push(nameContainerValue)
                setCrudData(arr)
            }
        }
        else{
            let arr = getCrudData();
            arr[id] = nameContainerValue;
            setCrudData(arr);
            message.innerHTML = "Data Updated";
        }
    }
    name.value="";
    showData();
}

function showData (){
    let arr = getCrudData();
    let html = "";
    for(let i=0; i<arr.length; i++){
        html+=`<tr>
                 <td>${i+1}</td>
                 <td>${arr[i]}</td>
                 <td><a href="javascript:void(0)" onclick="handleEditData(${i})">Edit</a>&nbsp<a href="javascript:void(0)" onclick="handleDeleteData(${i})">Delete</a></td>
               </tr>`
    }
    tableContainer.innerHTML=html;
}

let handleDeleteData=(rid)=>{
    let arr = getCrudData();
    arr.splice(rid,1);
    setCrudData(arr);
    showData();
    message.innerHTML = "Data deleted";
}

let handleEditData=(rid)=>{
    id = rid;
    let arr = getCrudData();
    name.value = arr[id];

}

function getCrudData(){
    let arr = JSON.parse(localStorage.getItem("crud"));
    return arr;
}

function setCrudData(arr){
    localStorage.setItem("crud",JSON.stringify(arr));
}