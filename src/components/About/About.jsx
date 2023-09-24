import { Link } from "react-router-dom";
import './About.css';
import Carousel from "../Carousel/Carousel";
import * as Constants from "../../constants/data";
export default function About() {

    return (
      <main className="container-sm">
        <h1 className="text-center">Welcome to <b><i>In The Loop</i></b> - Your Crochet & Knit Companion</h1>
        <Link to={'/login'}><center>Click here to Login</center></Link> {/* This is will link to the login page*/}

        {/* put in screenshots and pictures of the app in action */}

        <h3><strong>What is In The Loop?</strong></h3>
        <p>In the loop is the perfect companion for your crochet and knit projects. You can track your projects, what you have in your yarn stash (coming soon), keep track of all your patterns in our Pattern Library (coming soon) and even explore new stiches in our Swatch Library (coming soon).</p>
        
        <h3>Project Tracking</h3>
        <Carousel name={"ProjectCarousel"} screenshots={Constants.projectScreenshots}/>

        <h3>Yarn Stash</h3>
        <Carousel name={"YarnCarousel"} screenshots={Constants.yarnStashScreenshots}/>

        <h3>Pattern Library</h3>
        <Carousel name={"PatternCarousel"} screenshots={Constants.patternScreenshots}/>

        <h3>Swatch Library</h3>
        <Carousel name={"SwatchCarousel"} screenshots={Constants.swatchScreenshots}/>

        <h4 className="text-center">Please login to access all the features of the app</h4>
        <Link to={'/login'}><center>Click here to Login</center></Link> {/* This is will link to the login page*/}
      </main>
    );
  }