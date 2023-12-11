function printStar() {
  for (let i = 0; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
}
const numofRows = 5;
printStar(numofRows);
