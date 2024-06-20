function prepare(taskName, delay) {
    var promise = new Promise(function (resolve, reject) {
        var error = true;
        if (!error) {
            setTimeout(function () {
                console.log(taskName);
                resolve();
            }, delay);
        }
        else {
            reject();
        }
    });
    return promise;
}
prepare("add Water", 0)
    .then(function () { return prepare("add tea leaves", 5000); })
    .then(function () { return prepare("add milk", 10000); })
    .then(function () { return prepare("add sugar", 2000); })
    .then(function () { return prepare("tea is ready", 0); })
    .catch(function () { return console.log("Some error"); });
