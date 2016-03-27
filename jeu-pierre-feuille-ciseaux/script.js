$(document).ready(function () {
    
    var arms = [
        {
            name: 'Pierre',
            win: 'Ciseaux',
            lose: 'Feuille',
        },
        {
            name: 'Feuille',
            win: 'Pierre',
            lose: 'Ciseaux',
        },
        {
            name: 'Ciseaux',
            win: 'Pierre',
            lose: 'Feuille',
        }
    ];
    
    function setOptions(){
        for(i=0; i<arms.length; i++){
            var armName = arms[i].name;
            $('select').append('<option value="'+armName+'">'+armName+'</option>');
        }
    }
    
    var randomId = getRandomIntInclusive(0, arms.length-1);
    var button = $('#submit');
    var resetButton = $('#reset');
    var score = $('#score');
    var message = $('#message');
    var resultat = '';
    var classes = '';
    var scoreUser = 0;
    
    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min +1)) + min;
    }
    
    function updateScore(){
        scoreUser++;
        score.html(scoreUser);
    }
    
    function check(){
        var choiceUser = $('select').val();
        var randomName = arms[randomId].name;
        var result = $.grep(arms, function(e){ return e.name == choiceUser; })[0];
        if(choiceUser == randomName){
            classes = "alert alert-info";
            resultat = "Egalité !";
        }else if(result.win == randomName){
            classes = "alert alert-success";    
            resultat = "Gagné !";
            updateScore();
        }else{
            classes = "alert alert-danger";
            resultat = "Perdu !";
        }
        message.removeClass().addClass(classes).html(randomName+" : "+resultat);
    }
    
    function reset(){
        message.removeClass().html('');
        randomId = getRandomIntInclusive(0, arms.length-1);
    }
    
    button.click(function(){
        check();
    });
    
    resetButton.click(function(){
        reset();
    });
    
    setOptions();
    
});