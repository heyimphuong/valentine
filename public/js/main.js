// Thay đổi nội dung búc thư ở đây
var letterContent =`Chúc cậu một Valentine thật ngọt ngào, tràn đầy yêu thương và hạnh phúc! 💖 Dù cậu đang ở bên cạnh ai hay tận hưởng ngày này theo cách riêng của mình, hãy luôn nhớ rằng cậu xứng đáng được yêu thương và trân trọng. 💫 

Hy vọng mỗi ngày của cậu đều đẹp như một bài hát tình yêu, luôn có những khoảnh khắc ấm áp và ý nghĩa! 🌹✨

Happy Valentine’s Day! ❤️

AnhThợCode.!🧑‍💻`

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})