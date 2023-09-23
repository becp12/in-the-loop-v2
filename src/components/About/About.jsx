import { Link } from "react-router-dom";
import './About.css';
import Carousel from "../Carousel/Carousel";
export default function About() {

    const projectScreenshots = [
        {
            placeholderImage: "images/placeholder1.png",
            isActive: true
        },{
            placeholderImage: "images/placeholder2.jpg",
            isActive: false
        },{
            placeholderImage: "images/placeholder3.png",
            isActive: false
        },{
            placeholderImage: "images/placeholder3.png",
            isActive: false
        }]

    const yarnStashScreenshots = [
        {
            placeholderImage: "images/yarn-stash/grey.jpg",
            isActive: true
        },{
            placeholderImage: "images/yarn-stash/pink.jpg",
            isActive: false
        },{
            placeholderImage: "images/yarn-stash/purple.jpg",
            isActive: false
        },{
            placeholderImage: "images/yarn-stash/red.jpg",
            isActive: false
        },{
            placeholderImage: "images/yarn-stash/teal.jpg",
            isActive: false
        },{
            placeholderImage: "images/yarn-stash/yellow.jpg",
            isActive: false
        }]

    const patternScreenshots = [
        {
            placeholderImage: "images/patterns/pillow1.jpg",
            isActive: true
        },{
            placeholderImage: "images/patterns/pillow2.jpg",
            isActive: false
        },{
            placeholderImage: "images/patterns/pillow3.jpg",
            isActive: false
        }
    ]

    const swatchScreenshots = [
        {
            placeholderImage: "images/stitches/stitch2.webp",
            isActive: true
        },{
            placeholderImage: "images/stitches/stitch3.webp",
            isActive: false
        }
    ]

    return (
      <main className="container-sm">
        <h1 className="text-center">Welcome to <b><i>In The Loop</i></b> - Your Crochet & Knit Companion</h1>
        <Link to={'/login'}><center>Click here to Login</center></Link> {/* This is will link to the login page*/}

        {/* put in screenshots and pictures of the app in action */}

        <h3><strong>What is In The Loop?</strong></h3>
        <p>In the loop is the perfect companion for your crochet and knit projects. You can track your projects, what you have in your yarn stash (coming soon), keep track of all your patterns in our Pattern Library (coming soon) and even explore new stiches in our Swatch Library (coming soon).</p>
        
        <h3>Project Tracking</h3>
        <Carousel name={"ProjectCarousel"} screenshots={projectScreenshots}/>

        <h3>Yarn Stash</h3>
        <Carousel name={"YarnCarousel"} screenshots={yarnStashScreenshots}/>

        <h3>Pattern Library</h3>
        <Carousel name={"PatternCarousel"} screenshots={patternScreenshots}/>

        <h3>Swatch Library</h3>
        <Carousel name={"SwatchCarousel"} screenshots={swatchScreenshots}/>

        <h4 className="text-center">Please login to access all the features of the app</h4>
        <Link to={'/login'}><center>Click here to Login</center></Link> {/* This is will link to the login page*/}
      </main>
    );
  }