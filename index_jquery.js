var counter1= 0
var counter2= 0


var select = '';
for (i=3; i<=11; i++){
    select += '<option val=' + i + '>' + i + '</option>';
    $('#dropdown').html(select);
}

function playerOne(){
    counter1+= 1
    $("#score1").html(counter1) 
    if(counter1==document.getElementById('dropdown').value){
        $("#score1").css("color", "green")
        $("#score2").css("color", "red") 
        $(".btn")[0].disabled= true 
        $(".btn")[1].disabled= true 
       
    }
}

function playerTwo(){
    counter2+= 1
    $("#score2").html(counter2)
    if(counter2==document.getElementById('dropdown').value){
        $("#score2").css("color", "green")
        $("#score1").css("color", "red")
        $(".btn")[0].disabled= true 
        $(".btn")[1].disabled= true 
       
    }
}

function gameReset(){
    counter1= 0
    counter2= 0
    $("#score1").html(counter1)
    $("#score2").html(counter2)
    $(".btn")[0].disabled= false 
    $(".btn")[1].disabled= false 
    $("#score1").css("color", "black") 
    $("#score2").css("color", "black")
    
    
}
