var bgc = document.getElementsByClassName("bgc")[0]
var titleEnd = document.getElementsByClassName("Title")[0]


bgc.addEventListener("animationend",function(){
    bgc.style.display = 'none'
})

titleEnd.addEventListener("animationend",function(){
    var video1 = document.getElementById("video1")
    var video2 = document.getElementById("video2")
    var audio = document.getElementById("audio")
    video1.style.display = 'block'
    audio.load()
    video1.play()
    video1.addEventListener("ended",function(){
        video1.style.display = "none"
        video2.style.display = "block"
        video2.play()
    })

})

