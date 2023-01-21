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
