const btnPlay = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')

btnPlay.addEventListener('click', function() {
    const click = document.getElementById('click')
    click.play()
    const audio = document.getElementById('page1C1')
    audio.play()
})

btnPause.addEventListener('click', function() {
     const click = document.getElementById('click')
    click.play()
    const audio = document.getElementById('page1C1')
    audio.pause()
})