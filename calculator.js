let result=document.getElementById("inputext");

let calculate=(number)=>{
result.value=result.value+number; // or result.value+=number (both mean same thing)

}

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Enter the valid input");
    }
}

function clr(){
    result.value="";
}

function del(){
    result.value=result.value.slice(0,-1);
}