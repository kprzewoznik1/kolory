function Color(){
    var x = document.getElementById("colorValue");
    var r0d0 = document.getElementById("r0d0");
    var r1d0 = document.getElementById("r1d0");
    var r1d1 = document.getElementById("r1d1");
    var r1d2 = document.getElementById("r1d2");
    var r1d3 = document.getElementById("r1d3");

    r0d0.style.backgroundColor = "hsl("+x.value+", 100%, 50%)";
    r1d0.style.backgroundColor = "hsl("+x.value+", 80%, 50%)";
    r1d1.style.backgroundColor = "hsl("+x.value+", 60%, 50%)";
    r1d2.style.backgroundColor = "hsl("+x.value+", 40%, 50%)";
    r1d3.style.backgroundColor = "hsl("+x.value+", 20%, 50%)";
    

 }