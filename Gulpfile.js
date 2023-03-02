// dependencia
const gulp = require('gulp')
const bs = require('browser-sync').create()

// serviços

gulp.task('default', ()=>{
    bs.init({
        server:{
            baseDir:"./"
        }
    })

    gulp.watch('./**/*.html').on('change', bs.reload)
})

