const flightPath = {
    curviness: 10,
    autoRotate: false,
    values: [{x: 10, y: -10},
        {x: 30, y: -70},
        {x: 50, y: -20},
        {x: 90, y: -40},
        {x: 130, y: -30},
        {x: 150, y: -20},
        {x: 130, y: -20},
        {x: 120, y: -40},
        {x:110, y: -80},
        {x: 80, y: -100},
        
     ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.air-plane',25, {
        bezier: flightPath,
        ease: Power3.easeInOut
        
    })
);

