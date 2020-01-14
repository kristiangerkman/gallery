export const imageChecker = (url, setBool) => {

    function imageExists(url, callback) {
        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    }
    let asd;
    asd = imageExists(url, setBool);

    console.log(asd)
}