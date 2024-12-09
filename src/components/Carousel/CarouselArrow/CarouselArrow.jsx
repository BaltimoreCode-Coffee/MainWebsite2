function Arrow(props) {
    return ( 
        <button className={"custom splide__arrow splide__arrow--" + props.direction}>
            <div className={"arrow " + props.direction + "-arrow one"}></div>
            <div className={"arrow " + props.direction + "-arrow two"}></div>
        </button>
     );
}

export default Arrow;