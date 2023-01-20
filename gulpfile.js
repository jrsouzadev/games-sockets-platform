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
    ) **/
    
import gulp from 'gulp'
import { execaCommand } from 'execa'
import { deleteSync } from 'del'

gulp.task('clean', async function() {
    return await deleteSync([
        './dist/**/**.*',
        './dist/public/**.*',
        './dist/**/*',
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
        './client/build/**/*.*'
    ]).pipe(gulp.dest('./dist/public'))
})

gulp.task('default', gulp.series(
    'clean',
    'build_client',
    'build_server',
    'move_client'
))