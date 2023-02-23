// typing animation

const text = document.querySelector(".sec-text")




const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Software Engineer'
    },0)
    setTimeout(() => {
        text.textContent = 'Data Scientist'
    },4000)
    setTimeout(() => {
        text.textContent = 'Full stack Developer'
    },8000)
}

textLoad()
setInterval(textLoad,12000)