gsap.registerPlugin(ScrollTrigger);

function homeAnimation() {
  gsap.set(".slidem", {
    scale: 6,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top ",
      end: "bottom bottom",

      scrub: 3,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".slidem",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".row-lft",
    {
      xPercent: -5,
      ease: Power4,
      stagger: 0.2,
    },
    "b"
  );

  tl.to(
    ".row-rht",
    {
      xPercent: 5,
      ease: Power4,
      stagger: 0.2,
    },
    "b"
  );
}



function horizontalAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",

      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function teamAnimation() {
    document.querySelectorAll(".list-elem").forEach(function (el) {
        el.addEventListener("mousemove", function (detail) {
          gsap.to(this.querySelector(".pic"), {
            opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, detail.clientX),
            ease: Power4,
            duration: 0.5,
            innerHeight:100
          });
        
        });
        el.addEventListener("mouseleave",function(detail){
          gsap.to(this.querySelector(".pic"),{
      opacity:0,
      ease:Power4,
      duration:0.5
      
          });
        });
      });
}


function para1Animation() {
  var adder ="";
document.querySelector(".text-para1").textContent.split("").forEach(function(e){
  if(e ===" ")adder+=`<span>&nbsp;</span>`
  adder += `<span>${e}</span>`
})
document.querySelector(".text-para1").innerHTML=adder;

gsap.to(".text-para1 span",{
  scrollTrigger:{
    trigger:".text-para1",
    start:"top 60% ",
    end:"bottom 90%",
    scrub:0.5
  },
  color:"#2544EE",
  stagger:1,
  ease:Power1
})
}

function para2Animation() {
  var adder ="";
  document.querySelector(".text-para2").textContent.split("").forEach(function(e){
    if(e ===" ")adder+=`<span>&nbsp;</span>`
    adder += `<span>${e}</span>`
  })
  document.querySelector(".text-para2").innerHTML=adder;
  
  gsap.to(".text-para2 span",{
    scrollTrigger:{
      trigger:".text-para2",
      start:"top 60% ",
      end:"bottom 90%",
      scrub:0.5
    },
    color:"#2544EE",
    stagger:1,
    ease:Power1
  })
}

function locomotiveScroll() {
  
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}


function capsuleAnimation() {
  gsap.to(".rht",{
    scrollTrigger:{
      trigger:".rht",
      start:"top 70%",
      end:"bottom bottom",
      scrub:1
    },
    y:-100,
    ease:Power4
  })
}
function footerAnimation() {
  gsap.from(".foot h1",{
    scrollTrigger:{
      trigger:".footer",
      start:"top 90%",
      end:"bottom bottom",
      scrub:1,

    },
    y:100,
    stagger:0.3,
    duration:2,
    opacity:0,
    ease:Power4
  })
}

document.querySelectorAll(".section").forEach(function(e){
  ScrollTrigger.create({
    trigger:e,
    start:"top 50%",
    end:"bottom 50%",
    onEnter:function(){
      document.body.setAttribute("theme",e.dataset.color);
    },
    onEnterBack:function(){
      document.body.setAttribute("theme",e.dataset.color);
    }
  })
})


locomotiveScroll();
homeAnimation();
horizontalAnimation();
teamAnimation();
para1Animation();
para2Animation();
capsuleAnimation();
footerAnimation();

