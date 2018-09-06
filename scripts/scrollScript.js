
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
        triggerElement: "#projectsContainer",
        triggerHook: "1",
        duration: "100%"
    })
    .setTween("#myWork", {y: "400", ease:Linear.easeNone}) // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
        triggerElement: "#aboutContainer",
        triggerHook: "1",
        duration: "100%"    // the scene should last for a scroll distance of 100px
    })
    .setTween("#aboutMe", {y: "400", ease:Linear.easeNone}) // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); // assign the scene to the controller

