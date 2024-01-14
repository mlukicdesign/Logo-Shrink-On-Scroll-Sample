
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


ScrollTrigger.create({
   animation: gsap.from(".logo", {
        y: "50vh",
        scale: 6,
        yPercent: -50,
   }),
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center",
});




// Pre Loader Animation



gsap.from(".clip-top, .clip-bottom", 2, {
    delay: 0.5,
    height: "50vh",
    ease: "power4.inOut",
});


gsap.to(".marquee", 3.5, {
    delay: 0.2,
    top: "50%",
    ease: "power4.inOut",
});

gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
    delay: 0.5,
    top: "100%",
    ease: "power4.inOut",
});

gsap.from(".clip-center .marquee", 5, {
    delay: 0.5,
    top: "-50%",
    ease: "power4.inOut",
});


gsap.to(".clip-top", 2, {
    delay: 2,
    clipPath: "inset(0 0 100% 0)",
    ease: "power4.inOut",
});

gsap.to(".clip-bottom", 2, {
    delay: 2,
    clipPath: "inset(100% 0 0 0)",
    ease: "power4.inOut",
});

gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 2, {
    delay: 6,
    opacity: 0,
    ease: "power2.inOut",
})



// initialize Lenis Scroll
const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




// gsap.from(".logo", {
//     y: 200,
//     ease: "power4.inOut",
//     duration: 1.5,
// });


// gsap.to(".logo", {
//     clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
//     ease: "power4.inOut",
//     duration: 2,
//     delay: 10,
// });