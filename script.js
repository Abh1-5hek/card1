var t=gsap.timeline()
t.from("#block2 img",{
    y:30,
    opacity:0,
    repeat:-1,
    duration:0.8,
    yoyo:true
})
t.from("#block1 img",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})
t.from("#block3 img",{
    y:30,
    repeat:-1,
    duration:0.8,
    yoyo:true
})