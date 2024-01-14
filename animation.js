
// Gsap Logo Animation
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


// initialize Lenis Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)