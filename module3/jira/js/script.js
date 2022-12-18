let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".toolbox-main-cont");
let textCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let priortyColor = document.querySelectorAll(".priorty-color");
let removeBtn = document.querySelector(".remove-btn");
let ticket = document.querySelectorAll(".ticket-cont");
let addModal = true;
let color = ["lightpink","lightblue","lightgreen","lightblack"];
let modalPriortyColor = color[color.length-1];
let addBtnColor = true;
var uid = new ShortUniqueId();


addBtn.addEventListener("click", () => {
    if(addModal){ 
        modal.style.display = "flex";
    }else{
        modal.style.display = "none";
    }
    addModal = !addModal;  
})

removeBtn.addEventListener('click', ()=>{
    console.log("remove btn clicked");
    if(addBtnColor){
        removeBtn.style.color = "red"; 
    }
    else{
        removeBtn.style.color = "black"
    }
    addBtnColor = !addBtnColor
})

for(let i=0; i<priortyColor.length; i++){
    let allPriortyColor = priortyColor[i];
    allPriortyColor.addEventListener('click', ()=>{
        for(let j=0; j<priortyColor.length; j++){
            priortyColor[j].classList.remove('active')
        }
        allPriortyColor.classList.add('active');
        modalPriortyColor = allPriortyColor.classList[1];
        console.log(modalPriortyColor);
    })
}

modal.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key == "Enter"){
        createTicket(modalPriortyColor, textCont.value);
        textCont.value =" ";
        modal.style.display = "none";
        addModal = !addModal;
    }
})

createTicket = (ticketColor,task)=>{
let ticketCont = document.createElement("div");
ticketCont.setAttribute("class","ticket-cont");
ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
                 <div class="ticket-id">#${uid()}</div>
                 <div class="task-area">${task}</div>
                 <div class="lock-unlock"><i class="icon-lock"></i></div>`
mainCont.appendChild(ticketCont);

//lock unlock handle 
let lockunlockBtn = ticketCont.querySelector(".lock-unlock i");
let taskArea = ticketCont.querySelector(".task-area");
lockunlockBtn.addEventListener('click',()=>{
    console.log("clicked");
    if(lockunlockBtn.classList.contains("icon-lock")){
        lockunlockBtn.classList.remove("icon-lock");
        lockunlockBtn.classList.add("icon-unlocked");
        taskArea.setAttribute("contentEditable", "true");
    }
    else{
        lockunlockBtn.classList.remove("icon-unlocked");
        lockunlockBtn.classList.add("icon-lock");
        taskArea.setAttribute("contentEditable", "false");
    }
})

//handle delete
ticketCont.addEventListener('click',()=>{
    if(!addBtnColor){
        ticketCont.remove();
    }
})

//handle color
let ticketBandColor = ticketCont.querySelector(".ticket-color");
 ticketBandColor.addEventListener('click',function(){
    let currentTicketColor = ticketBandColor.classList[1];
    let currentTicketColorIdx = -1;
    for(let i=0; i<color.length; i++){
        if(currentTicketColor == color[i]){
            currentTicketColorIdx = i;
            break;
        }
        
    }
    let nextTicketColorIdx = (currentTicketColorIdx+1)%color.length;
    let nextTicketColor = color[nextTicketColorIdx];
    ticketBandColor.classList.remove(currentTicketColor);
    ticketBandColor.classList.add(nextTicketColor);

 })
}