const btnPlay = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')

const inputB1 = document.getElementById('inputB1')
const inputB2 = document.getElementById('inputB2')
const inputB3 = document.getElementById('inputB3')
const inputB4 = document.getElementById('inputB4')
const inputB5 = document.getElementById('inputB5')
const inputB6 = document.getElementById('inputB6')


let translate = document.getElementById('translate')


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

inputB1.addEventListener('keyup', (e) => {
    if (inputB1.value === "are") {
        const audio = document.getElementById('right')
        audio.play()
        inputB1.style.color = 'green'
        translate.innerHTML = "Você está certo."
        document.getElementById('inputB2').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputB2.addEventListener('keyup', (e) => {
    if (inputB2.value === "is") {
        const audio = document.getElementById('right')
        audio.play()
        inputB2.style.color = 'green'
        translate.innerHTML = "O professor é bom!"
        document.getElementById('inputB3').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputB3.addEventListener('keyup', (e) => {
    if (inputB3.value === "are") {
        const audio = document.getElementById('right')
        audio.play()
        inputB3.style.color = 'green'
        translate.innerHTML = "As aulas são interessantes."
        document.getElementById('inputB4').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputB4.addEventListener('keyup', (e) => {
    if (inputB4.value === "am") {
        const audio = document.getElementById('right')
        audio.play()
        inputB4.style.color = 'green'
        translate.innerHTML = "Eu estou feliz."
        document.getElementById('inputB5').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputB5.addEventListener('keyup', (e) => {
    if (inputB5.value === "have") {
        const audio = document.getElementById('right')
        audio.play()
        inputB5.style.color = 'green'
        translate.innerHTML = "Eu tenho que ir agora."
        document.getElementById('inputB6').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputB6.addEventListener('keyup', (e) => {
    if (inputB6.value === "Have") {
        const audio = document.getElementById('right')
        audio.play()
        inputB6.style.color = 'green'
        translate.innerHTML = "Tenha uma boa noite/um bom fim de semana, etc."
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})



