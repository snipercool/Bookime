const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();

/*
 * Add compressor from sass to css files
 * Sass is not browser supported.
 */

function sass2css(done) {
  src(["./assets/src/sass/style.scss", "./assets/src/sass/page.scss"])
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename(function(path) {
        path.basename += ".min";
      }))
    .pipe(dest("./assets/dist/css/"))
    .pipe(browserSync.stream());
  done();
}

/*
 * Compress all jpeg, png and svg files.
 */

function compressImages(done) {
  src("./assets/src/images/*")
    .pipe(imagemin({ progressive: true }))
    .pipe(dest("./assets/dist/images/"))
    .pipe(browserSync.stream());
  done();
}

/**
 * Minify all js files.
 */

function minifyJs(done) {
  src("./assets/src/js/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest("./assets/dist/js/"))
    .pipe(browserSync.stream());
  done();
}

watch("./assets/src/sass/**", sass2css);
watch("./assets/src/images/*", compressImages);
watch("./assets/src/js/*", minifyJs);

module.exports.default = parallel(
  sass2css,
  compressImages,
  minifyJs
);