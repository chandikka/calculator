function displayvalue(val){
    document.getElementById("dispbox").value=document.getElementById("dispbox").value+val;

}
function cleardisplay(){
    document.getElementById("dispbox").value=""
}
function calculate(){
   var userInput= document.getElementById("dispbox").value;
   var result= eval(userInput);


   document.getElementById("dispbox").value=result;
}