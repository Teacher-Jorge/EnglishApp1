const btnPlay = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')

const inputA1 = document.getElementById('inputA1')
const inputA2 = document.getElementById('inputA2')
const inputA3 = document.getElementById('inputA3')
const inputA4 = document.getElementById('inputA4')
const inputA5 = document.getElementById('inputA5')
const inputA6 = document.getElementById('inputA6')
const inputA7 = document.getElementById('inputA7')
const inputA8 = document.getElementById('inputA8')

let translate = document.getElementById('translate')


const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
const t4 = document.getElementById('t4')
const t5 = document.getElementById('t5')
const t6 = document.getElementById('t6')
const t7 = document.getElementById('t7')
const t8 = document.getElementById('t8')

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

inputA1.addEventListener('keyup', (e) => {
    if (inputA1.value === "are") {
        const audio = document.getElementById('right')
        audio.play()
        inputA1.style.color = 'green'
        translate.innerHTML = "Como está você?"
        document.getElementById('inputA2').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA2.addEventListener('keyup', (e) => {
    if (inputA2.value === "am" || inputA2.value === "'m") {
        const audio = document.getElementById('right')
        audio.play()
        inputA2.style.color = 'green'
        translate.innerHTML = "Eu estou bem."
        document.getElementById('inputA3').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA3.addEventListener('keyup', (e) => {
    if (inputA3.value === "Are") {
        const audio = document.getElementById('right')
        audio.play()
        inputA3.style.color = 'green'
        translate.innerHTML = "Você é nova aqui?"
        document.getElementById('inputA4').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA4.addEventListener('keyup', (e) => {
    if (inputA4.value === "am") {
        const audio = document.getElementById('right')
        audio.play()
        inputA4.style.color = 'green'
        translate.innerHTML = "Sim, eu sou."
        document.getElementById('inputA5').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA5.addEventListener('keyup', (e) => {
    if (inputA5.value === "Is") {
        const audio = document.getElementById('right')
        audio.play()
        inputA5.style.color = 'green'
        translate.innerHTML = "Esta é uma boa escola?"
        document.getElementById('inputA6').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA6.addEventListener('keyup', (e) => {
    if (inputA6.value === "is") {
        const audio = document.getElementById('right')
        audio.play()
        inputA6.style.color = 'green'
        translate.innerHTML = "O professor é divertido."
        document.getElementById('inputA7').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA7.addEventListener('keyup', (e) => {
    if (inputA7.value === "is") {
        const audio = document.getElementById('right')
        audio.play()
        inputA7.style.color = 'green'
        translate.innerHTML = "Qual é seu nome?"
        document.getElementById('inputA8').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

inputA8.addEventListener('keyup', (e) => {
    if (inputA8.value === "is") {
        const audio = document.getElementById('right')
        audio.play()
        inputA8.style.color = 'green'
        translate.innerHTML = "A aula já vai começar."
        document.getElementById('inputA8').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})