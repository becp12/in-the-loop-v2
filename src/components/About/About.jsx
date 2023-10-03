import './About.css';
import Login from '../../components/Login/Login';
import Carousel from "../Carousel/Carousel";
import * as Constants from "../../constants/data";
export default function About() {


    return (
      <main className="container-sm">
        <h1 className="text-center">Welcome to <b><i>In The Loop</i></b> - Your Crochet & Knit Companion</h1>
        <Login />

        {/* put in screenshots and pictures of the app in action */}

        <h3><strong>What is In The Loop?</strong></h3>
        <p><center>In the loop is the perfect companion for your crochet and knit projects. You can track your projects, what you have in your yarn stash (coming soon), keep track of all your patterns in your Pattern Library (coming soon) and even explore new stiches in our Stitch Library (coming soon).</center></p>
        
        <h3>Project Tracking</h3>
        <p><center>Keep track of all your projects, including needle size, row counter, pattern used, etc.</center></p>
        <Carousel name={"ProjectCarousel"} screenshots={Constants.projectScreenshots}/>

        <h3>Yarn Stash</h3>
        <p><center>Keep track of all the yarn in your stash rather than searching through your collection, or, more likely, buying yarn you already have plenty of already. Keep track of weight/skiens, brand, color name, dye lot number and even photos if you want.</center></p>
        <Carousel name={"YarnCarousel"} screenshots={Constants.yarnStashScreenshots}/>

        <h3>Pattern Library</h3>
        <p><center>Here you can find all the patterns you are currently using or would like to make in the future.</center></p>
        <Carousel name={"PatternCarousel"} screenshots={Constants.patternScreenshots}/>

        <h3>Stitch Library</h3>
        <p><center>Ever wanted to try a new stitch but don't know what to look for? Here's a great place to find your new favorite stitch!</center></p>
        <Carousel name={"SwatchCarousel"} screenshots={Constants.swatchScreenshots}/>

        {/* <h4 className="text-center">Please login to access all the features of the app</h4>
        <Link to={'/login'}><center>Click here to Login</center></Link> This is will link to the login page */}
      </main>
    );
  }