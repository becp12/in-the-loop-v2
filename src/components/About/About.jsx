import { Link } from "react-router-dom";
import './About.css';
export default function About() {

    return (
      <main className="container-sm">
        <h1 className="text-center">Welcome to <b><i>In The Loop</i></b> - Your Crochet & Knit Companion</h1>
        <Link to={'/login'}><center>Click here to Login</center></Link> {/* This is will link to the login page*/}

        {/* put in screenshots and pictures of the app in action */}

        <h3><strong>What is In The Loop?</strong></h3>
        <p>In the loop is the perfect companion for your crochet and knit projects. You can track your projects, what you have in your yarn stash (coming soon), keep track of all your patterns in our Pattern Library (coming soon) and even explore new stiches in our Swatch Library (coming soon).</p>
        
        <h3>Project Tracking</h3>

        <div id="ProjectTrackingCarousel" class="carousel slide carousel-dark container-sm">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/placeholder1.png" class="d-block w-100" alt="Screenshot #1 of Project Tracking Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder2.jpg" class="d-block w-100" alt="Screenshot #2 of Project Tracking Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder3.png" class="d-block w-100" alt="Screenshot #3 of Project Tracking Feature" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h3>Yarn Stash</h3>

        <div id="YarnStashCarousel" class="carousel slide carousel-dark container-sm">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#YarnStashCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#YarnStashCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#YarnStashCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/placeholder1.png" class="d-block w-100" alt="Screenshot #1 of Yarn Stash Tracking Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder2.jpg" class="d-block w-100" alt="Screenshot #2 of Yarn Stash Tracking Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder3.png" class="d-block w-100" alt="Screenshot #3 of Yarn Stash Tracking Feature" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#YarnStashCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#YarnStashCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h3>Pattern Library</h3>

        <div id="PatternLibraryCarousel" class="carousel slide carousel-dark container-sm">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#PatternLibraryCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#PatternLibraryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#PatternLibraryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/placeholder1.png" class="d-block w-100" alt="Screenshot #1 of Pattern Library Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder2.jpg" class="d-block w-100" alt="Screenshot #2 of Pattern Library Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder3.png" class="d-block w-100" alt="Screenshot #3 of Pattern Library Feature" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#PatternLibraryCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#PatternLibraryCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h3>Swatch Library</h3>
        
        <div id="SwatchLibraryCarousel" class="carousel slide carousel-dark container-sm">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#SwatchLibraryCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#SwatchLibraryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#SwatchLibraryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/placeholder1.png" class="d-block w-100" alt="Screenshot #1 of Swatch Library Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder2.jpg" class="d-block w-100" alt="Screenshot #2 of Swatch Library Feature" />
                </div>
                <div class="carousel-item">
                    <img src="images/placeholder3.png" class="d-block w-100" alt="Screenshot #3 of Swatch Library Feature" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#SwatchLibraryCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#SwatchLibraryCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h4 className="text-center">Please login to access all the features of the app</h4>
        <Link to={'/login'}><center>Click here to Login</center></Link> {/* This is will link to the login page*/}
      </main>
    );
  }