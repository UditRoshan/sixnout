// Lenis Smooth Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Menu
const menuBtn = document.querySelector("header h2")
const menu = document.querySelector(".menu")

menuBtn.addEventListener('click', ()=>{
  if (menu.style.right == "0%") {
    menu.style.right = "-100%"
  } else {
    menu.style.right = "0%"
  }
})

// GSAP
gsap.to("header h1", {
  scale: 100,

  scrollTrigger: {
      trigger: "header .et1",
      scroller: "body",
      markers: false,
      start: "top 28%",
      end: "top 0%",
      scrub: 1
  }
})

gsap.to("header h2", {
  color: "crimson",

  scrollTrigger: {
    trigger: ".et1",
    scroller: "body",
    markers: false,
    start: "top 10%",
    end: "top 0%",
    scrub: 1
  }
})

gsap.to("header h3", {
  opacity: "0",
  pointerEvents: "none",

  scrollTrigger: {
    trigger: ".et1",
    scroller: "body",
    markers: false,
    start: "top 10%",
    end: "top 0%",
    scrub: 1
  }
})

gsap.from("#sec1 .card", {
  opacity: "0",
  stagger: 0.3,

  scrollTrigger: {
    trigger: "#sec1",
    scroller: "body",
    markers: false,
    start: "top 25%",
    end: "top 0%",
    scrub: 1,
  }
})

gsap.from("#sec2 img", {
  y: 200,

  scrollTrigger: {
    trigger: "#sec2",
    scroller: "body",
    markers: false,
    start: "top 25%",
    end: "top 0%",
    scrub: 1,
  }
})

gsap.from("#sec2 .ut-details .tab", {
  opacity: "0",
  stagger: 0.3,

  scrollTrigger: {
    trigger: "#sec2",
    scroller: "body",
    markers: false,
    start: "top 25%",
    end: "top 0%",
    scrub: 1,
  }
})

gsap.from("#sec3 img", {
  x: 300,
  opacity: "0",

  scrollTrigger: {
    trigger: "#sec3",
    scroller: "body",
    markers: false,
    start: "top 25%",
    end: "top 0%",
    scrub: 1,
  }
})

gsap.to("#sec3 .pt-box .card", {
  opacity: "1",
  stagger: 0.3,

  scrollTrigger: {
    trigger: "#sec3",
    scroller: "body",
    markers: false,
    start: "top 25%",
    end: "top 0%",
    scrub: 1,
  }
})

gsap.to("#sec4 h1", {
  x: -1200,

  scrollTrigger: {
    trigger: "#sec4",
    scroller: "body",
    markers: false,
    start: "top 45%",
    end: "top -50%",
    scrub: 1,
  }
})

gsap.from("#sec5 .left form .form-elem", {
  x: -200,
  opacity: "0",
  stagger: 0.3,

  scrollTrigger: {
    trigger: "#sec5",
    scroller: "body",
    markers: false,
    start: "top 45%",
    end: "top 0%",
    scrub: 1,
  }
})

gsap.from("#sec5 .right .social-medias i", {
  y: -200,
  stagger: 0.3,

  scrollTrigger: {
    trigger: "#sec5",
    scroller: "body",
    markers: false,
    start: "top 45%",
    end: "top 0%",
    scrub: 1,
  }
})