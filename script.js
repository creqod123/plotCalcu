document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('first').addEventListener('input', calculate);
    document.getElementById('second').addEventListener('input', calculate);
});

function calculate() {
    var first = parseFloat(document.getElementById('first').value);
    var second = parseFloat(document.getElementById('second').value);

    document.getElementById('squareMeter').value = (first * second) + ' Sq meter';
    document.getElementById('squareFoot').value = ((first * second) * 10.7639).toFixed(2) + ' Sq foot';
    document.getElementById('var').value = ((first * second) * 10.7639 / 9).toFixed(2) + ' Var';
    document.getElementById('inch').value = (first * 39.3701) + ' Inch';
    document.getElementById('inchToFoot').value = ((first * 39.3701) * 12) + ' Inch to Foot';
    document.getElementById('subtract').value = (first - second).toFixed(2);
    document.getElementById('half').value = (first / 2).toFixed(2);
    document.getElementById('divide').value = (first / second).toFixed(2);
}
