import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import "./swap.css";

function Swap() {
  return (
    <Card className="swapComp">
      <div className="instruction">
        <Typography gutterBottom variant="h5" component="h2">
          Instructions
        </Typography>

        <ul className="instUl">
          <p>Instructions</p>
          <li>Good lighting</li>
          <li>Straight face, don’t smile</li>
          <li>NO Glasses, hats </li>
          <li>Beards may interfere</li>
        </ul>
        <div className="example">
          <Typography gutterBottom variant="h5" component="h3">
            Example
          </Typography>
          <CardMedia className="exPic" />
        </div>
      </div>
      <div className="showPic">
        <div className="takePic">
          <div className="circul"></div>
        </div>
        <label className="cond">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Agree to terms and conditions*
        </label>
        <CardActions>
          <Button
            href="/error"
            className="btn"
            variant="contained"
            style={{ background: "#CFFAA4" }}
          >
            Take Photo
          </Button>
        </CardActions>
      </div>
    </Card>
  );

  // <div className='swapComp'>
  //   <div className='instruction'>
  //       <h2>Instructions</h2>

  //       <ul className='instUl'>
  //       <p>Instructions</p>
  //           <li>Good lighting</li>
  //           <li>Straight face, don’t smile</li>
  //           <li>NO Glasses, hats </li>
  //           <li>Beards may interfere</li>
  //       </ul>
  //       <div className='example'>
  //           <h3>Example</h3>
  //           <div className='exPic'></div>
  //       </div>
  //   </div>
  //   <div className='showPic'>
  //       <div className='takePic'>
  //           <div className='circul'></div>
  //       </div>
  //       <label className='cond'>
  //           <input type="checkbox"  ></input>
  //            Agree to terms and conditions*
  //       </label>
  //       <Link to='/error'>
  //           <button className='takePhotoBtn'>Take Photo</button>
  //       </Link>
  //   </div>
  //     </div>
}
export default Swap;
