var result = "";
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0 && i < 100) {
        result += "".concat(i, ", ");
    }
    else if (i % 2 === 0 || i % 3 === 0) {
        result += "".concat(i, ". ");
    }
}
console.log(result);
