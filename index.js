const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password_length = 8
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const genBtnEl = document.getElementById("genbtn")
function generatePasswords(){
    let password = "";
    for(let i=0;i<password_length;i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}
function copyText(){

}
function colorChange(){
    
}
genBtnEl.addEventListener("click",function(){
    //password1El.innerHTML = `<input type="text" id="1" value="${generatePasswords()}" onclick="display(1)">`
    //password2El.innerHTML = `<input type="text" id="2" value="${generatePasswords()}" onclick="display(2)">`
    password1El.textContent = generatePasswords()
    password2El.textContent = generatePasswords()

})


