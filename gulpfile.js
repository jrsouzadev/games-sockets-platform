/** import gulp from 'gulp'
import del from 'del'

function cleanOldDistFiles() {
    return gulp.src('./dist', {read: false})
    .pipe(clean({ force: true }))
}

function createNewFolderStructure() {
    //await execaCommand('mkdir dist && mkdir ./dist/public')
}

async function buildServer() {
    //await execaCommand('yarn --cwd ./server build')
}

async function buildClient() {
    //await execaCommand('yarn --cwd ./client build')
}

async function moveBuilds() {
    
}

export default gulp.series(
    cleanOldDistFiles,
    createNewFolderStructure,
    gulp.parallel(
        buildServer,
        buildClient
        ),
    moveBuilds
)





    
import gulp from 'gulp'
import { execaCommand } from 'execa'
import { deleteSync } from 'del'

gulp.task('clean', async function() {
    return await deleteSync([
        `/dist/**\/**.*`,
        './dist/public/**.*',
        './dist/**\/*',
        './dist/public/*',
        '!./dist',
        '!./dist/public'
    ])
})

gulp.task('build_server', async function() {
    await execaCommand('yarn --cwd ./server build')
})

gulp.task('build_client', async function() {
    await execaCommand('yarn --cwd ./client build')
})

gulp.task('move_client', async function() {
    await gulp.src([
        './client/build/*.*',
        './client/build/**\/*.*'
    ]).pipe(gulp.dest('./dist/public'))
})

gulp.task('default', gulp.series(
    'clean',
    'build_client',
    'build_server',
    'move_client'
))

**/

const gulp = require("gulp");
const { exec } = require("child_process");
const fs = require("fs");

gulp.task("clean", async function () {
  if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist");
  }

  if (!fs.existsSync("./dist/public")) {
    fs.mkdirSync("./dist/public");
  }

  return await import("del").then((del) =>
    del.deleteSync([
      `/dist/**\/**.*`,
      "./dist/public/**.*",
      "./dist/**/*",
      "./dist/public/*",
      "!./dist",
      "!./dist/public",
    ])
  );
});

gulp.task("build_server", async function () {
  await exec("yarn --cwd ./server build");
});

gulp.task("build_client", async function () {
  await exec("yarn --cwd ./client build");
});

gulp.task("copy_server", async function () {
  await gulp
    .src(["./server/dist/**.*", "./server/dist/**/**.*"])
    .pipe(gulp.dest("./dist"));
});

gulp.task("copy_client", async function () {
  await gulp
    .src(["./client/build/**.*", "./client/build/**/**.*"])
    .pipe(gulp.dest("./dist/public"));
});

gulp.task(
  "default",
  gulp.series(
    "clean",
    "build_server",
    "build_client",
    "copy_server",
    "copy_client"
  )
);
