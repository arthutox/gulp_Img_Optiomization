var gulp = require('gulp');
var del = require('del');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var image = require('gulp-image');


var path = {
    original: "app/original/**/*",
    result: "dist/result/"
};

gulp.task('optimization-run', function(cb){
    gulp.src( path.original )
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe( gulp.dest( path.result ) );
});

gulp.task('clean', function(){
    del([path.result]);
});

gulp.task( 'default', ['clean', 'optimization-run'] );