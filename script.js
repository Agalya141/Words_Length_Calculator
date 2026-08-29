
function calculate(){
let sentence = document.getElementById("sentence");
let result = document.getElementById("result")
let value = sentence.value.trim()
    if (value === ''){
        result.innerHTML = "No Words are entered"
    }
    else{
   let word = sentence.value.split(/[ ,.\-]+/)
   result.innerHTML = word.length;
    }
}
