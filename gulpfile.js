'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const ignore = require('gulp-ignore');

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

gulp.task('compile', ['tsc']);

gulp.task('watch', ['compile'], () => {
  gulp.watch(tscTargetGlobs, ['tsc']);
});
