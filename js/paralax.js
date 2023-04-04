$(document).ready(function () {
  console.log("Hello World!");
  //ScrollMagic controller init
  let controller = new ScrollMagic.Controller();

  let pinHeaderScene = new ScrollMagic.Scene({
    triggerElement: "#project1",
    offset: 1, // start scene after scrolling for 100px
    duration: 5400, // pin the element for 400px of scrolling
    triggerHook: 0.3,
  }).setPin("#project1"); // the element we want to pin

  // Add Scene to ScrollMagic Controller
  controller.addScene(pinHeaderScene);

  // Parallax Scene
  let slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: "#parallax1",
    triggerHook: 0.7,
    duration: "200%",
  })
    .setTween(".bcg1", 1, { y: "80%", ease: Linear.easeNone })
    .addIndicators()
    .addTo(controller);

  let slideParallaxScene2 = new ScrollMagic.Scene({
    triggerElement: ".parallax2",
    triggerHook: 0.7,
    duration: "200%",
  })
    .setTween(".bcg2", 1, { y: "80%", ease: Linear.easeNone })
    .addIndicators()
    .addTo(controller);

  let slideParallaxScene3 = new ScrollMagic.Scene({
    triggerElement: ".parallax3",
    triggerHook: 0.7,
    duration: "150%",
  })
    .setTween(".bcg3", 1, { y: "60%", ease: Linear.easeNone })
    .addIndicators()
    .addTo(controller);
});
