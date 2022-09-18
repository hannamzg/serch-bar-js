let dropdownMenuButton2 = document.getElementById('dropdownMenuButton2');
let takeInput = document.getElementById("takeInput");
let dropDownMenu = document.getElementById("dropDownMenu");
let inputTakeContsries = document.getElementById("inputTakeContsries");
let addTooArr = document.getElementById("addTooArr");
let showAllCity = document.getElementById("showAllCity");
let BtnShowAllCity = document.getElementById("BtnShowAllCity")
let arr = [];


dropdownMenuButton2.addEventListener("input", showTheResult);
let comFromLocal = JSON.parse(localStorage.getItem("country"));


addTooArr.addEventListener("click" , ()=>{
    arr.push(inputTakeContsries.value);
    arr.sort();
    localStorage.setItem("country", JSON.stringify(arr));
    restiNP()
});

function showTheResult(){
    let comFromLocal = JSON.parse(localStorage.getItem("country"));
    comFromLocal.find((element) => {
        let found = element.charAt(0) === dropdownMenuButton2.value.charAt(0);
        if (!found) {
            console.log("if");
            if(dropdownMenuButton2.value.length === 0){
            dropDownMenu.innerHTML = "";
        }
        } 
        else {
            dropDownMenu.innerHTML += `<li><a class="dropdown-item" href="#">${element}</a></li>`;
           console.log("eles");
           if(dropdownMenuButton2.value === dropdownMenuButton2.value){
            return
           }
        }
      });
}



function restiNP(){
    inputTakeContsries.value = ""
}


BtnShowAllCity.addEventListener("click" ,()=>{
    for(let key of comFromLocal){
    showAllCity.innerHTML += ` <h3>${key}</h3>`
    }
    
})
