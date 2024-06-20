function prepareTea(task, delay, cb) {
    console.log(task);
    setTimeout(function () {
        cb();
    }, delay);
}
prepareTea("add Water", 0, function () {
    prepareTea("add tea leaves", 5000, function () {
        prepareTea("add milk", 10000, function () {
            prepareTea("add sugar", 2000, function () {
                prepareTea("tea is ready", 3000, function () {
                    console.log("Tea is Fantastic");
                });
            });
        });
    });
});
