
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 500    // the scene should last for a scroll distance of 100px
    })
    .setPin("#layer3") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
        duration: 500    // the scene should last for a scroll distance of 100px
    })
    .setTween("#layer2", {y: "200", ease:Linear.easeNone}) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


new ScrollMagic.Scene({
        triggerElement: "#myWorkTitle",
        triggerHook: "1",
        duration: "110%"    // the scene should last for a scroll distance of 100px
    })
    .setTween("#myWorkTitle", {y: "100", ease:Linear.easeNone}) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
        triggerElement: "#aboutTitle",
        triggerHook: "1",
        duration: "110%"    // the scene should last for a scroll distance of 100px
    })
    .setTween("#aboutTitle", {y: "100", ease:Linear.easeNone}) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


new ScrollMagic.Scene({
        triggerElement: "#resumeTitle",
        triggerHook: "1",
        duration: "110%"    // the scene should last for a scroll distance of 100px
    })
    .setTween("#resumeTitle", {y: "100", ease:Linear.easeNone}) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


