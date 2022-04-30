
var password = "OCOGAMECODES";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;
var correct = false;

while(response != password && !error){
 if(entryCount < entryLimit){
 response = window.prompt("Enter Code!"); 
  entryCount++;
 } else {
  error = true;
   alert("To Many Attemps. Reload to contiune")
 }
  
}
 if(!error){
alert("Correct Password")
   correct = true;
 }