require("gulp");

function holamundo(cb){
    console.log("Hello world");
    cb();
}

exports.default= holamundo;

function watch(cb){
    watch("css/*.css", holamundo);
    cb();
}

exports.watch = watch;