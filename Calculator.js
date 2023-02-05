
document.getElementById("button").onclick = function calc(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var oper = document.getElementById("operators").value;

    
    if (oper === '+')
    {
        document.getElementById("result").value = n1 + n2;
    }
    if (oper === '-')
    {
        document.getElementById("result").value = n1 - n2;
    }
    if (oper === '/')
    {
        document.getElementById("result").value = n1 / n2; 
    }
    if (oper === 'x')
    {
        document.getElementById("result").value = n1 * n2;
    }

};