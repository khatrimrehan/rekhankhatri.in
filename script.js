


var csr = document.querySelector("#cursor")


document.addEventListener("mousemove", function (dets) {

    setTimeout(function () {

        csr.style.left = dets.x + 0 + "px"
        csr.style.top = dets.y - 3 + "px"



    }, 90) // delay in milliseconds (100ms)

})







gsap.to("#nav", {
    backgroundColor: "#0e0e0e9e",
    backdropFilter: "blur(10px)",
    duration: 1,
    delay:0.5,
    height: "65.27px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -15%",
        end: "top -16%",
        scrub: 1
    }
})



var csr = document.querySelector("#cursor")
var blr = document.querySelector("#blur")

document.addEventListener("mousemove", function (dets) {

    setTimeout(function () {

        csr.style.left = dets.x + 0 + "px"
        csr.style.top = dets.y - 3 + "px"



    }, 130) // delay in milliseconds (100ms)

})
document.addEventListener("mousemove", function (dets) {

    setTimeout(function () {
        blr.style.left = dets.x - 150 + "px"
        blr.style.top = dets.y - 150 + "px"



    }, 90) // delay in milliseconds (100ms)

})








