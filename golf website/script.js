gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1.2,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start:"top -30%",
        end:"top -70%",
        
        scrub:2,

    }
})

  