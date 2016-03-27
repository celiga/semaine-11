$(document).ready(function () {
    
    var number = getRandomIntInclusive(1, 100);
    var button = $('#submit');
    var resetButton = $('#reset');
    var score = $('#score');
    var message = $('#message');
    var resultat = '';
    var classes = '';
    var tentatives = 0;
    var bestScore = '';
    var manches = 0;
    
    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min +1)) + min;
    }
    
    function updateScore(){
        if(manches == 1 || tentatives < bestScore){
            bestScore = tentatives;
        }
        score.html(bestScore);
    }    
    
    function check(){
        var tentative = $('input').val();
        if(Math.floor(tentative) == tentative && $.isNumeric(tentative) && tentative >= 1 && tentative <= 100){
            tentatives++;
            if(tentative == number){
                classes = "alert alert-success";    
                resultat = "Trouvé ("+tentatives+" tentatives) !";
                manches++;
                updateScore();
            }else if(tentative > number){
                classes = "alert alert-danger";
                resultat = tentative+" : C'est moins";
            }else{
                classes = "alert alert-danger";
                resultat = tentative+" : C'est plus";
            }
        }else{
            classes = "alert alert-info";
            resultat = "Saisissez un nombre entier entre 1 et 100.";
        }
        message.removeClass().addClass(classes).html(resultat);
    }
    
    function reset(){
        $('input').val('');
        tentatives = 0;
        number = getRandomIntInclusive(1, 100);
    }
    
    button.click(function(){
        check();
    });
    
    $(document).keypress(function(e) {
        if(e.which == 13) {
            check();
        }
    });
    
    resetButton.click(function(){
        reset();
        check();
    });
    
});