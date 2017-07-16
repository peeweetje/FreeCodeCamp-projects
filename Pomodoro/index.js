$(document).ready(function () {
    //global variables
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 1500; 
    var audio = new Audio('sound3.mp3');
    var stopTime = false;//makes sure the clocks runs
    var breakTime = 300;
    var timeBreak;


    //will add a 0 for the last 10 sec
    function addZero(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }


    function breakTimer() {
        // Will ececute breakTimer function every second =1000
        var timeBreak = setInterval(breakClock, 1000);
        stopTime = false;

        function breakClock() {
            $('#sessionTime').html('Have a break!');
            $('#stopButton').hide(1000);
            $('#startButton').hide(1000);

            breakTime--;
            secondsLabel.innerHTML = addZero(breakTime % 60);
            minutesLabel.innerHTML = addZero(parseInt(breakTime / 60));
            if (breakTime === 0) {
                clearInterval(timeBreak);
                audio.play();

                $('#sessionTime').html('Lets start again!');
                $('#resetButton').show(1000);
                $('#stopButton').show(1000);
                $('#stopButton').hide(1000);

            }
        }
    }


    $('#startButton').click(function () {

        $('#resetButton').hide(1000);
        // Will ececute clock function every second =1000
        var timer = setInterval(clock, 1000);
        stopTime = false;

        $("#startButton").attr("disabled", true);
        $('#sessionTime').html('Session');


        function clock() {
            if (stopTime == true) {
                clearInterval(timer);
                return;
            }

            totalSeconds--;
            secondsLabel.innerHTML = addZero(totalSeconds % 60);
            minutesLabel.innerHTML = addZero(parseInt(totalSeconds / 60));
           
            $('#session').hide(1000);
            $('#break').hide(1000);

            if (totalSeconds === 0) {
                clearInterval(timer);
                audio.play();
                breakTimer();

            }

        }

    });



    $('#resetButton').click(function () {
        $('#session').show(1000);
        $('#break').show(1000);

        stopTime = true;//makes sure the clocks stops
        totalSeconds = 1500;

        $('#minutes').html(25);
        $('#seconds').html(addZero(0));
        $("#startButton").attr("disabled", false);
        $('#stopButton').show(1000)
        $('#startButton').show(1000)

    });


    $('#stopButton').click(function () {

        stopTime = true;
        $("#startButton").attr("disabled", false);
    });



    // break sessions
    //Handles the - button
    $('#breakSub').click(function () {
        if (breakTime > 60) {
            breakTime -= 60;
            $('#breakVal').html(breakTime / 60);
        }
    });
    //Handles the + button
    $('#breakAdd').click(function () {
        breakTime += 60;
        $('#breakVal').html(breakTime / 60);
    });


    //pomodoro sessions
    //Handles the - button
    $('#sessionSub').click(function () {
        if (totalSeconds > 60) {
            totalSeconds -= 60;
            $('#sessionVal').html(totalSeconds / 60);
        }
    });
    //Handles the + button
    $('#sessionAdd').click(function () {
        totalSeconds += 60;
        $('#sessionVal').html(totalSeconds / 60);
    });


   


}); // end of document