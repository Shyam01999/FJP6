
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let addressInput = document.querySelector("#address");
let allCells = document.querySelectorAll(".cell");

cellsContentDiv.addEventListener("scroll",function(e){
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    
    topRow.style.top = scrollFromTop+"px";
    leftCol.style.left = scrollFromLeft+"px";
    topLeftCell.style.top = scrollFromTop+"px";
    topLeftCell.style.left = scrollFromLeft+"px";
})

let db ;
function initDb(){
    db =[];
    for(let i=0; i<100; i++){
        let row = [];
        for(let j=0; j<26; j++){
            let name = String.fromCharCode(65+j)+(i+1)+"";
            let cellObject = {
                name:name,
                value:""
            }
            row.push(cellObject);
        }
        db.push(row);
    }

}
initDb();

// console.log(db);

for(let i=0; i<allCells.length; i++){
    allCells[i].addEventListener("click",function(e){
        let rowId = Number(e.target.getAttribute("rowid"));
        let colId = Number(e.target.getAttribute("colid"));
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";
        // console.log(address)
        addressInput.value = address;
    })

    allCells[i].addEventListener('blur',function(e){
        let cellValue = e.target.textContent;
        let rowId = e.target.getAttribute("rowid");
        console.log(rowId)
        let colId = e.target.getAttribute("colid");
        let cellObject = db[rowId][colId];
        if(cellObject.value == cellValue){
            return;
        }
        cellObject.value = cellValue;
        console.log("After update",cellObject)
    })





}



