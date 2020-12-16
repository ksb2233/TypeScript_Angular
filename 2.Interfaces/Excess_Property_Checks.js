function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.clor) {
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var squareOptions = { colour: "red", width: 100 };
var mySquare2 = createSquare(squareOptions);
