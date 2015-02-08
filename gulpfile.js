process.env.DEBUG = process.env.DEBUG || 'sp:gulp';
var gulp = require('gulp'),

    // ## Style
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    swiss  = require('kouto-swiss'),

    // ## Bundle
    browserify = require('browserify'),
    watchify   = require('watchify'),
    envify     = require('envify/custom'),
    bundleName = require('vinyl-source-stream'),

    // ## utils
    plumber = require('gulp-plumber'),
    watch   = require('gulp-watch'),
    debug   = require('debug')('sp:gulp'),

    // ## React
    react = require('gulp-react'),

    // serve
    nodemon = require('gulp-nodemon'),
    lr      = require('gulp-livereload');

var reloadDelay = 7000;

var paths = {
  main: './client/Routes.js',
  jsx: './client/**/*.jsx',
  stylusMain: './client/app.styl',
  stylusAll: './client/**/*.styl',
  css: './public/css/',
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    'node_modules/',
    'client/'
  ],
  publicJs: './public/js'
};

gulp.task('default', [
  'jsx-watch',
  'bundle',
  'stylus',
  'serve',
  'watch'
]);

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.js',
    ignore: paths.serverIgnore,
    env: {
      'NODE_ENV': 'development',
      'DEBUG': 'sp:*'
    }
  })
    .on('start', function() {
      debug('Starting server');
      if (!called) {
        called = true;
        setTimeout(function() {
          cb();
        }, reloadDelay);
      }
    });
});

gulp.task('stylus', function() {
  return gulp.src(paths.stylusMain)
    .pipe(plumber())
    .pipe(stylus({
      use: [
        swiss()
      ],
      'include css': true
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
  lr.listen();
  gulp.watch(paths.stylusAll, ['stylus']);
  gulp.watch(paths.css + '/main.css', function() {
    console.log('hey you changed that file bro!');
    lr.changed(paths.css + '/main.css');
  });
});

gulp.task('jsx', function() {
  return gulp.src(paths.jsx)
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./client'));
});

gulp.task('jsx-watch', function() {
  return gulp.src(paths.jsx)
    .pipe(watch(paths.jsx))
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./client'));
});

gulp.task('bundle', function(cb) {
  browserifyCommon(cb);
});

function browserifyCommon(cb) {
  cb = cb || noop;
  var config;

  config = {
    basedir: __dirname,
    debug: true,
    cache: {},
    packageCache: {}
  };

  var b = browserify(config);
  b.transform(envify({
    NODE_ENV: 'development'
  }));

  debug('Watching bundle');
  b = watchify(b);
  b.on('update', function() {
    debug('bundling updating');
    bundleItUp(b);
  });

  /*if (production) {
    debug('Uglifying bundle');
    b.transform({ global: true }, uglifyify);
  }*/

  b.add(paths.main);
  debug('Bundling');
  bundleItUp(b);
  cb();
}

function bundleItUp(b) {
  return b.bundle()
    .pipe(plumber())
    .pipe(bundleName('bundle.js'))
    .pipe(gulp.dest(paths.publicJs));
}

function noop() { }
