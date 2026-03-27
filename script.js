



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
    delay: 0.5,
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





gsap.from(".up,.h5,.h3,.btnsect,.scrlldwn,.carousel", {
    skewX: 10,
    delay: 0.1,
    scale: 1.5,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4
});

gsap.from(".left,.right", {
    y: -100,
    delay: 0.1,
    opacity: 0,
    stagger: 0,
    duration: 1
});

gsap.from(".ul>li", {
    y: -100,
    delay: 0.1,
    opacity: 0,
    stagger: 0.2,
    duration: 0.4
});




gsap.from(".vid", {
    z: -100,
    delay: 0.1,
    opacity: 0,
    stagger: true,
    duration: 2
});


gsap.from(".lft,.rght", {
    x: -50,
    scale:0.9,
    delay: 0.1,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scrub:1,
        start: "top 40%",
        end: "bottom 90%",
        
    }
});

gsap.from(".pics", {
    z: 100,
    scale:0.89,
    delay: 0.2,
    opacity: 0,
    stagger: 0.7,
    duration: 1,
    scrollTrigger: {
        trigger: "#wrkgllry",
        scrub:1,
        start: "top 80%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#cntimg1,#cntimg", {
    x: -100,
    scale:0.95,
    delay: 0.2,
    opacity: 0,
    stagger: 0.19,
    duration: 1,
    scrollTrigger: {
        trigger: "#cntimg",
        scrub:1,
        start: "top 70%",
        end: "bottom 60%",
        markers:false
        
    }
});


gsap.from(".div2", {
    y: -50,
    scale:0.8,
    delay: 0.2,
    opacity: 0,
    stagger: 0.9,
    duration: 1,
    scrollTrigger: {
        trigger: ".div2",
        scrub:1,
        start: "top 70%",
        end: "bottom 0%",
        markers:false
        
    }
});

gsap.from("#ser", {
    y: 40,
    scale:0.7,
    delay: 0.2,
    opacity: 0,
    stagger: 0.19,
    duration: 1,
    scrollTrigger: {
        trigger: "#ser",
        scrub:1,
        start: "top 95%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#cli", {
    y: 40,
    scale:0.7,
    delay: 0.2,
    opacity: 0,
    stagger: 0.19,
    duration: 1,
    scrollTrigger: {
        trigger: "#cli",
        scrub:1,
        start: "top 95%",
        end: "bottom 50%",
        markers:false
        
    }
});
gsap.from("#grone1", {
    y: 50,
    delay: 0.1,
    scale:0.5,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".grone",
        scrub:1,
        start: "top 80%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#grone2", {
    y: -50,
    delay: 0.1,
    scale:0.5,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".grone",
        scrub:1,
        start: "top 80%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#crslup", {
    x: 500,
    delay: 0.1,
    scale:0.8,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#crslup",
        scrub:1,
        start: "top 80%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#crsldn", {
    x: -500,
    delay: 0.1,
    scale:0.8,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#crsldn",
        scrub:1,
        start: "top 80%",
        end: "bottom 40%",
        markers:false
        
    }
});

gsap.from("#clicrsl", {
    x: 100,
    delay: 0.1,
    scale:0.8,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#clicrsl",
        scrub:1,
        start: "top 80%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#main-box", {
    y: -50,
    delay: 0.1,
    scale:0.5,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#main-box",
        scrub:1,
        start: "top 80%",
        end: "bottom 50%",
        markers:false
        
    }
});

gsap.from("#child-box", {
    y: -200,
    delay: 0.1,
    scale:0.5,
    opacity: 0,
    stagger: 0.7,
    duration: 1,
    scrollTrigger: {
        trigger: "#main-box",
        scrub:1,
        start: "top 80%",
        end: "bottom 40%",
        markers:true
        
    }
});