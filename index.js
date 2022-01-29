var counter1=0
var counter2=0


var select = '';
for (i=3;i<=11;i++){
    select += '<option val=' + i + '>' + i + '</option>';

document.getElementById('dropdown').innerHTML= select;}


function playerOne(){
    counter1+=1
    document.getElementById("score1").innerHTML= counter1 
    if(counter1==document.getElementById('dropdown').value){
        document.getElementById("score1").style.color= "green" 
        document.getElementById("score2").style.color= "red" 
        document.getElementsByClassName("btn")[0].disabled= true 
        document.getElementsByClassName("btn")[1].disabled= true 
       
    }
}


function playerTwo(){
    counter2+=1
    document.getElementById("score2").innerHTML= counter2
    if(counter2==document.getElementById('dropdown').value){
        document.getElementById("score2").style.color= "green" 
        document.getElementById("score1").style.color= "red" 
        document.getElementsByClassName("btn")[0].disabled= true 
        document.getElementsByClassName("btn")[1].disabled= true 
       
    }
}

function gameReset(){
    counter1=0
    counter2=0
    document.getElementById("score1").innerHTML= counter1
    document.getElementById("score2").innerHTML= counter2
    document.getElementsByClassName("btn")[0].disabled= false 
    document.getElementsByClassName("btn")[1].disabled= false 
    document.getElementById("score1").style.color= "black" 
     document.getElementById("score2").style.color= "black" 
    
    
}

