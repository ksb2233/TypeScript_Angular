function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Somethis failed");
}
function infiniteLoop() {
    while (true) {
    }
}
