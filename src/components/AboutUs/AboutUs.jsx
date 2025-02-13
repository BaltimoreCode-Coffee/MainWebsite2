import "./AboutUs.css";

export default function AboutUs() {
  return <section className="about-us">
     <h1 className="about-us">Our Mission</h1>
        <div className="about-us_top">
          <p>Foster learning and building meaningful relationships within Baltimore&apos;s tech community.</p>
        </div>

        <div className=" gallery-container">
        {/*First Row*/ }
          <div className="row-1">
            <h2 className="about-us contributor-title">Our Team</h2>
                    <div className="gallery-items-container">
                      <div className="gallery-item1">
                          <img src="src/assets/memberphotos/HeadValentineO-2.jpg" alt="Valentine Okundaye"/>
                            <div className="namelink">
                              <div className="name">Valentine Okundaye</div>
                              <div className="name">Organizer</div>
                              <a href="https://www.linkedin.com/in/valentine-okundaye-290893174" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                            </div>  
                      </div>
                      <div className="gallery-item1">
                          <img src="src/assets/memberphotos/HeadJaeY.jpeg" alt="Jae Yoo"/>
                          <div className="namelink" id="jae-namelink">
                              <div className="name">Jae Yoo</div>
                              <div className="name">Organizer</div>
                              <a href="https://www.linkedin.com/in/jaewoong-yoo-7a28a152/" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                          </div>
                      </div>
                    </div> 
          </div>

          {/*Second Row*/ }
          <div className="row-2">
              <h2 className="about-us contributor-title">Web Team Contributors</h2>
                    
              <div className="gallery-items-container">
                      <div className="gallery-item2">
                          <img src="src/assets/memberphotos/HeadBricesonR-2.jpg" alt="Briceson Roy"/>
                          <div className="namelink2" id="brice-namelink">
                              <div className="name">Briceson Roy</div>
                              <div className="name">Contributor</div>
                              <a href="https://www.linkedin.com/in/bricesonroy/" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                            </div>
                      </div>
                      <div className="gallery-item2">
                          <img src="src/assets/memberphotos/HeadMark.jpg" alt="Mark Reed"/>
                          <div className="namelink2" id="mark-namelink">
                              <div className="name">Mark Reed</div>
                              <div className="name">Contributor</div>
                              <a href="https://www.linkedin.com/in/mark-reed-958750172/" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                          </div>

                      </div>
                      <div className="gallery-item2">
                          <img src="src/assets/memberphotos/HeadTannerA.jpeg" alt="Tanner An"/>
                          <div className="namelink2" id="tanner-namelink">
                              <div className="name">Tanner An</div>
                              <div className="name">Contributor</div>
                              <a href="https://www.linkedin.com/in/huiyian/" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                          </div>
                      </div>
                      <div className="gallery-item2">
                          <img src="src/assets/memberphotos/HeadBezaM2.png" alt="Beza Mogese"/>
                          <div className="namelink2" id="beza-namelink">
                              <div className="name">Beza Mogese</div>
                              <div className="name">Contributor</div>
                              <a href="https://www.linkedin.com/in/beza-mogese/" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                          </div>
                      </div>
                      <div className="gallery-item2">
                          <img src="src/assets/memberphotos/HeadBrentG-2.jpg" alt="Brent Gauthier"/>
                          <div className="namelink2" id="brent-namelink">
                              <div className="name">Brent Gauthier</div>
                              <div className="name">Contributor</div>
                              <a href="https://www.linkedin.com/in/brentgauthier/" target="_blank" rel="noopener noreferrer">
                                          Profile
                              </a>
                          </div>
                      </div>

              </div>
            
          </div>
        </div>    
    
  </section>;
}

