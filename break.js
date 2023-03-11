for (var i = 1; i <= 20; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}
var j = 1;
while (j <= 10) {
  console.log(j);
  j++;
  if (j > 5) {
    break;
  }
}

var names = ["Aminul", "Emon", "Tamima", "Ema", "Mithun", "Miraj"];
for (var k = 0; k < names.length; k++) {
  var naam = names[k];
  console.log(naam);
  if (naam == "Ema") {
    break;
  }
}
var numbers = [20, 10, 25, 45, 70, 85, 45, 60, 110, 30, 90, 15, 28];
for (var l = 0; l < numbers.length; l++) {
  var num = numbers[l];
  if (num > 100) {
    break;
  }
  console.log(num);
}
