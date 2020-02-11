var time = 0;
var running = false;

function start(){
    if(!running){
        running = true;
        increment();

        document.getElementById("start").innerHTML = "Pause";
    }
}

function reset(){
    running = false;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("output").innerHTML = "0:00:00:00";
}

function increment(){
    if(running){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60);
            var tenths = time % 10;
            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10){
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
            increment();
        },100)
    }
}