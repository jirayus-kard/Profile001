var x = Math.floor(Math.random()*100)+1;

var dao = 1;
let daolaw;

document.getElementById("Submitguess").onclick = function(){
    var y = document.getElementById("GuessField").value;
        if(dao < 11){
            if(y > 100 || y < 0){
            document.querySelector('.Result').textContent = "Your number is not between 1-100 please try again!!!";
            }else{
                if(y == x ){
                    document.querySelector('.Result').textContent = "CONGRATULATION YOU GUESS IT RIGHT IN " + dao + "GUESS";
                    dao = 12;
                }else if (y > x){
                    document.querySelector('.Result').textContent = "Too High";
                    dao++;
                }else{
                    document.querySelector('.Result').textContent = "Too Low";
                    dao++;
                }
                if (dao == 2){
                    daolaw = y;
                }else{ 
                    daolaw += ", "+y;
                }
                document.querySelector('.History').textContent = daolaw;
                }
            if (dao == 11){
                    document.querySelector('.Result').textContent = "You Lost!!! THE NUMBER IS "+ x + ".";
            }
        }
    
}

document.getElementById("Submitguess").onkey13 = function(){
    var y = document.getElementById("GuessField").value;
        if(dao < 11){
            if(y > 100 || y < 0){
                document.querySelector('.Result').textContent = "Your number is not between 1-100 please try again!!!";
            }else{
                if(y == x ){
                    document.querySelector('.Result').textContent = "CONGRATULATION YOU GUESS IT RIGHT IN " + dao + " GUESS";
                    dao = 12;
                }else if (y > x){
                    document.querySelector('.Result').textContent = "Too High";
                    dao++;
                }else{
                    document.querySelector('.Result').textContent = "Too Low";
                    dao++;
                }
                if (dao == 2){
                    daolaw = y;
                }else{
                    daolaw += ", "+y;
                }
                document.querySelector('.History').textContent = daolaw;
            }
        if (dao == 11){
            document.querySelector('.Result').textContent = "You Lost!!! THE NUMBER IS "+ x + ".";
        }
        }   
}