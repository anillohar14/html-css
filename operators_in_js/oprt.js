/////operations in js
// type of operators :-
//1) Assignment :- +=, -=, *=, /=, %=
//2) Logical :- &&, ||
//3) Rrelational or Comparison :- <, >, <=, >=, ==, !=
//4) 


function length (){
   let str = document.getElementById("t").value;
   alert(str.length)
   document.getElementById("ans").innerText = `the length is ${str.length}`
}

function Upper (){
    let str = document.getElementById("t").value;
    // alert(str.length)
    document.getElementById("ans").innerText = `Value: ${str.toUpperCase()}`
 }

 function Lower (){
    let str = document.getElementById("t").value;
    // alert(str.length)
    document.getElementById("ans").innerText = `Vlaue: ${str.toLowerCase()}`
 }

 function checkVowels(){
    let srt=document.getElementById("t").value;
    let isVowels = false;
    for(let i =0; i<str.length; i++){
        let c = str.charAt(i)
        if(c == "a"||"A"||"e"||'E'||"I"||"i"||"O"||"o"||"U"||"u"){
            isVowels = true
            break;
        }
    }
        if(isVowels){
            document.getElementById("ans").innerText = "This String Contain Vowels"
        }
        else{
             document.getElementById("ans").innerText = "This String Dose not Contain Vowels"
        }
    
 }

 function checkVowelsCount(){
    let str = document.getElementById("t").value;
    let vowelsCount =0;
    for(let i =0; i<str.length; i++){
        let c = str.charAt(i)
        if(c == "a"||"A"||"e"||'E'||"I"||"i"||"O"||"o"||"U"||"u"){
            vowelsCount ++
        }
    }
    

    document.getElementById("ans").innerText = `Vowels: ${vowelsCount}`
 }
