function cleartext() {
    document.getElementById("input").value = "";
    
}
function press(value){
    document.getElementById("input").value += value;

}
function ans(){
     var a = document.getElementById("input").value;
     var p = eval(a);
     document.getElementById("input").value = p;


}