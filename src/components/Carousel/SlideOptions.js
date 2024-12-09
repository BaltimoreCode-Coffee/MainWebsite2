
const Options = { 
    type: 'loop', 
    autoScroll: { 
    
    pauseOnFocus: false, // For continous sliding
    perPage: 3, 
    perMove: 1, 
    rewind: true, // Rewind to start when the end is reached 
    focus: 1, 
    speed: 1 },
    
    gap: 25, 
    height: 350, 
    fixedWidth: 550,

    breakpoints: {
        960: {
            perPage: 2,
        },
        640: {
            perPage: 1,
        },
    
    }
}

export default Options


