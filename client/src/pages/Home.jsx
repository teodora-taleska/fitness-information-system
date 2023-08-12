import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
           <section className="header">

                <div className="overlay"> <div className="scroll-indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 5v13M5 12l7 7 7-7" />
                        </svg>
                    </div></div> 
                <div className="content">
                    <h2>BUILD <span>YOUR</span> BODY <br/>
                TRANSFORM <span>YOUR</span> MIND</h2>

                    <p>Are you ready to embark on a journey towards a stronger, fitter, and healthier version of yourself? Look no further than FusionFit. Our state-of-the-art fitness facility is designed to be your ultimate destination for achieving your wellness goals and transforming your lifestyle.</p>
                   
                    <Link to="/home/contact"><button >CONTACT</button></Link>
                    <button >READ MORE</button>

                  
                    
                </div>
               
           </section>

           <section className="about-section">
                <h2>About FusionFit</h2>
                <p>
                At FusionFit, we're all about bringing together the best of various fitness disciplines to create a unique and effective workout experience. Our goal is to help you achieve optimal fitness and well-being through a fusion of techniques that challenge your body and mind.
                </p>
                <p>
                Whether you're looking to improve your strength, flexibility, cardiovascular health, or overall vitality, our FusionFit classes have got you covered. Our certified trainers are passionate about guiding you on your fitness journey and helping you discover the power of combining different fitness modalities.
                </p>
            </section>

            <section className="classes-section">
                <h2>Our FusionFit Classes</h2>
                <p>Experience the excitement of diverse workouts in a single session!</p>
                <ul>
                <li>Yoga + High-Intensity Intervals</li>
                <li>Dance + Strength Training</li>
                <li>Pilates + Cardio Sculpt</li>
                <li>Boxing + Yoga Flow</li>
                </ul>
                <p>Join us to discover the endless possibilities of FusionFit!</p>
            </section>

            <section className="membership-section">
                <h2>Join the FusionFit Family</h2>
                <p>Ready to elevate your fitness game? Join us today!</p>
                <p>Experience the benefits of FusionFit:</p>
                <ul>
                <li>Personalized fusion workouts</li>
                <li>Certified trainers for guidance</li>
                <li>A supportive community of fitness enthusiasts</li>
                <li>Flexible membership options</li>
                </ul>
                <button className="join-button">Join Now</button>
            </section>

            <footer className="footer">
                <p>&copy; 2023 FusionFit Fitness Center. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home