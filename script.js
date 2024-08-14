const btnsEle = document.querySelectorAll("button")
//console.log(btnsEle);
const inputele = document.getElementById("result")

for(let i =0; i<btnsEle.length; i++){
    btnsEle[i].addEventListener("click", ()=>{
        //console.log(btnsEle[i].textContent);
        const btnvalue = btnsEle[i].textContent
        if(btnvalue === "C"){ 
            clearResult()
        }
        else if (btnvalue === "="){
            calculateresult()
        }
        else{
            appendvalue(btnvalue)
        }
        

    })
}
function clearResult(){
    inputele.value = ""
}
function calculateresult(){
    inputele.value = eval(inputele.value)
}
function appendvalue(btnvalue){inputele.value
+= btnvalue}