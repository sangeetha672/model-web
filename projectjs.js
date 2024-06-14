gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
gsap.fromTo(".btn1",{
    x:50,
    opacity:0,
},{
    x:0,
    opacity:1,
    duration:3,
    ease: "elastic.inOut(1,0.3)",
})
gsap.fromTo(".con3head",{
    y:50,
    opacity:0,
},{
    scrollTrigger:{
        trigger:".container3",
        start:"top center",
        end:"bottom center",
        toggleActions:"restart none restart none",
    },
    y:0,
    opacity:1,
    duration:3,
    ease: "elastic.inOut(1,0.3)",
})
gsap.fromTo(".con3para",{
    x:50,
    opacity:0,
},{
    scrollTrigger:{
        trigger:".container3",
        start:"top center",
        end:"bottom center",
        toggleActions:"restart none restart none",
    },
    x:0,
    opacity:1,
    duration:3,
    ease: "elastic.inOut(1,0.3)",
},">")
gsap.fromTo(".c5data",{
    y:50,
    opacity:0,
},{
    scrollTrigger:{
        trigger:".container5",
        start:"top center",
        end:"bottom center",
        toggleActions:"restart none restart none",
    },
    y:0,
    opacity:1,
    duration:3,
    ease: "elastic.inOut(1,0.3)",
})
const role=[" Kosciuszko national park ."]
let master= gsap.timeline({repeat:-1})
role.forEach(role=>{
    let tl =gsap.timeline({
        repeat:1,
        yoyo:true,
        repeatDelay:1
    })
    tl.to(".txt",{
        duration:4,
        text:role,
    })
    master.add(tl)
},">")

gsap.fromTo(".c7data",{
    x:100,
    opacity:0,
},{
    scrollTrigger:{
        trigger:".oct",
        start:"bottom center",
        // end:"bottom center",
        // toggleActions:"restart none restart none",
    },
    y:0,
    opacity:1,
    duration:3,
},">")
gsap.fromTo(".plant",{
    opacity:0,
},{
    scrollTrigger:{
        trigger:".oct",
        start:"bottom center",
        // end:"bottom center",
        // toggleActions:"restart none restart none",
    },
    opacity:1,
    duration:3,
},">")
gsap.fromTo(".elep",{
    opacity:0,
},{
    scrollTrigger:{
        trigger:".oct",
        start:"bottom center",
        // end:"bottom center",
        // toggleActions:"restart none restart none",
    },
    opacity:1,
    duration:3,
},">")
gsap.fromTo(".chimpz",{
    opacity:0,
},{
    scrollTrigger:{
        trigger:".oct",
        start:"bottom center",
        // end:"bottom center",
        // toggleActions:"restart none restart none",
    },
    opacity:1,
    duration:3,
},">")
gsap.fromTo(".eagl",{
    opacity:0,
},{
    scrollTrigger:{
        trigger:".oct",
        start:"bottom center",
        // end:"bottom center",
        // toggleActions:"restart none restart none",
    },
    opacity:1,
    duration:3,
},">")