function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="happy"&&password=="happy")
{
    alert("login successful");
    return;
}
else{
    alert("login failed");
}




}