var gulp = require('gulp'),

    // ## Style
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    swiss = require('kouto-swiss'),

    // ## Bundle
    browserify = require('browserify'),
    watchify = require('watchify'),
    envify = require('envify/custom'),
    bundleName = require('vinyl-source-stream'),

    // ## utils
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    debug = require('debug')('sp:gulp'),

    // ## React
    react = require('gulp-react'),

    // serve
    nodemon = require('gulp-nodemon');

var watching = false;
var reloadDelay = 7000;

var paths = {
  main: './client/app.js',
  jsx: './clients/**/**.jsx',
  stylusMain: './clients/app.styl',
  stylusAll: './clients/**/*.styl',
  css: './public/css/',
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    'node_modules/'
  ],
  publicJs: './public/js'
};

gulp.task('default', [
  'setWatch',
  'jsx-watch',
  'bundle',
  'stylus',
  'serve',
  'watch'
]);

gulp.task('setWatch', function() {
  watching = true;
});

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.js',
    ignore: paths.serverIgnore,
    env: {
      'NODE_ENV': 'development',
      'DEBUG': 'r3dm:*'
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
    })
    .on('restart', function(files) {
      if (files) {
        debug('Files that changed: ', files);
      }
      setTimeout(function() {
        debug('server restart delay');
        // reload();
      }, reloadDelay);
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
  gulp.watch(paths.stylusAll, ['stylus']);
});

gulp.task('jsx', function() {
  return gulp.src('./components/**/*.jsx')
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./components'));
});

gulp.task('jsx-watch', function() {
  return gulp.src(paths.jsx)
    .pipe(plumber())
    .pipe(watch(paths.jsx))
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./components'));
});

gulp.task('bundle', function(cb) {
  browserifyCommon(cb);
});

function browserifyCommon(cb) {
  cb = cb || noop;
  var config;

  if (watching) {
    config = {
      basedir: __dirname,
      debug: true,
      cache: {},
      packageCache: {}
    };
  } else {
    config = {
      basedir: __dirname
    };
  }

  var b = browserify(config);
  b.transform(envify({
    NODE_ENV: 'development'
  }));

  debug('Watching bundle');
  b = watchify(b);
  b.on('update', function() {
    bundleItUp(b);
  });

  /*if (production) {
    debug('Uglifying bundle');
    b.transform({ global: true }, uglifyify);
  }*/

  b.add(paths.main);
  bundleItUp(b);
  cb();
}

function bundleItUp(b) {
  debug('Bundling');
  return b.bundle()
    .pipe(plumber())
    .pipe(bundleName('bundle.js'))
    .pipe(gulp.dest(paths.publicJs));
}

function noop() { }
