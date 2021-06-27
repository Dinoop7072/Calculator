function clicked(num)
{
    
document.getElementById("ayin").value+=num;
}
function clearDisplay()
{
    document.getElementById("ayin").value=" "
}
function equalsto()
{
    var text=document.getElementById("ayin").value;
    var result=eval(text);
    document.getElementById("ayin").value=result;
}
function welcome()
{
    document.getElementById("ayin").value="Welcome!!!"
    
}

