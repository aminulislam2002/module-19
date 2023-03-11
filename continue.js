var numbers = [20, 10, 25, 45, 70, 85, 45, 60, 110, 30, 90, 15, 28];
for (var l = 0; l < numbers.length; l++) {
  var num = numbers[l];
  if (num > 50) {
    continue;
  }
  console.log(num);
}
