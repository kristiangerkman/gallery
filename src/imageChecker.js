
function imageExists(url, callback) {
    var img = new Image();
    console.log("asd")
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = url;
}


export const imageChecker = (url) => {
    let loads;
    imageExists(url, function (exists) {
        console.log('RESULT: url=' + url + ', exists=' + exists);
        loads = exists;
        console.log(loads)
    });
    return loads;
}