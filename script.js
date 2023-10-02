document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('first').addEventListener('input', calculate);
    document.getElementById('second').addEventListener('input', calculate);
});

function calculate() {
    var first = parseFloat(document.getElementById('first').value);
    var second = parseFloat(document.getElementById('second').value);

    document.getElementById('squareMeter').value = (first * second).toFixed(2) + ' Sq meter';
    document.getElementById('squareFoot').value = ((first * 3.25)* (second * 3.25)).toFixed(2) + ' Sq foot';
    document.getElementById('var').value = ((first * 3.25)* (second * 3.25) / 9).toFixed(2) + ' Var';
    document.getElementById('toFoot').value = (first ( 3.25)).toFixed(2);
    // document.getElementById('inch').value = (first * 39.3701).toFixed(2) + ' Inch';
    // document.getElementById('inchToFoot').value = ((first * 39.3701) * 0.0833).toFixed(2) + ' Inch to Foot';

    document.getElementById('subtract').value = (first - second).toFixed(2);
    document.getElementById('half').value = (first / 2).toFixed(2);
    document.getElementById('divide').value = (first / second).toFixed(2);
}
