let name = document.querySelector('#name');
let message = document.querySelector(".message");
let addButton = document.querySelector("#addButton");
let tableData = document.querySelector(".container tbody");
//console.log(tableData);
let id = 'no';
//localStorage.clear();
selectData();
addButton.addEventListener('click',manageData);
function manageData(){
    message.innerHTML=" ";
    let nameValue = name.value;
    if(nameValue == ''){
        message.innerHTML = "Please enter you name";
    }
    else if(id == 'no'){
        //console.log(id)
            let arr = getCrudData();
            //console.log(arr);
            if(arr == null){
                let data = [nameValue];
                setCrudData(data);
            }
            else{
                arr.push(nameValue)
                setCrudData(arr)
            }
            message.innerHTML = "Data added"
        }
        else{
             let arr =getCrudData();
             arr[id]=nameValue;
             setCrudData(arr);
             message.innerHTML = "Data Updated"

        }
        name.value="";
        selectData();
}

 function selectData(){
     let arr = getCrudData();
     console.log(arr);
     let html = "";
     for(let i=0; i<arr.length; i++){
         html+=`<tr>
                <td>${i+1}</td>
                <td>${arr[i]}</td>
                <td><a href="javascript:void(0)" onclick="editData(${i})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${i})">Delete</a></td>
                </tr>`
     }
     tableData.innerHTML= html;
 }

 function editData(rid){
 id = rid;
 console.log(id)
 let arr = getCrudData();
 name.value= arr[id];
 }

function deleteData(rid){
    let arr = getCrudData();
    arr.splice(rid,1);
    setCrudData(arr);
    selectData();
}

function getCrudData(){
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr;
}

function setCrudData(arr){
    localStorage.setItem("crud",JSON.stringify(arr))
}