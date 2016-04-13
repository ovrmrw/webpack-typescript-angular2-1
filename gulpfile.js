'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const ignore = require('gulp-ignore');
const browserSync = require('browser-sync').create();

/////////////////////////////////////////////////////////////////////////
// TypeScript Compile

const tscTargetGlobs = ['*.ts'];

gulp.task('tsc', () => {
  const tsProject = ts.createProject('tsconfig.json', { noExternalResolve: true });
  tsProject.src()
    .pipe(plumber())
    .pipe(ignore.exclude(['src-client/**/*', 'views/**/*', 'node_modules/**/*', 'typings/**/*', '**/*.d.ts']))
    //.pipe(ignore.include(tscTargetGlobs))
    .pipe(ts(tsProject))
    .pipe(babel())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['tsc'], () => {
  gulp.watch(tscTargetGlobs, ['tsc']);
});


/////////////////////////////////////////////////////////////////////////
// EXPRESS

gulp.task('browsersync', function () {
  browserSync.init({
    files: ['views/**/*', 'app/**/*', 'src-client/**/*'], // BrowserSyncにまかせるファイル群
    proxy: 'http://localhost:3000',  // express の動作するポートにプロキシ
    port: 4000,  // BrowserSync は 4000 番ポートで起動
    open: true,  // ブラウザ open する
    reloadDelay: 1000 * 2,
    //reloadDebounce: 1000 * 2,
    ghostMode: false
  });
});