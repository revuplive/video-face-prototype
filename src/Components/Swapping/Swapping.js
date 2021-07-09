import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import "./swapping.css";
function Swapping() {
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: "#c4c4c4",
          color: "#f9a1a1",
          p: 3,
          borderRadius: 1,
          textAlign: "center",
          fontSize: 19,
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  Item.propTypes = {
    sx: PropTypes.object,
  };
  return (
    <Card className="swappingComp">
      <Typography gutterBottom variant="h5" component="p">
        Check out these other swaps while our
        <br />
        AI mechanics are working on your Swap
      </Typography>
      <Box
        sx={{
          display: "grid",
          columnGap: 10,
          rowGap: 10,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        className="swapVideos"
      >
        <Link to="/preview/45" className="link">
          <Item>
            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 40 }} />
          </Item>
        </Link>
        <Link to="/preview/45" className="link">
          <Item>
            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 40 }} />
          </Item>
        </Link>
        <Link to="/preview/45" className="link">
          <Item>
            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 40 }} />
          </Item>
        </Link>
        <Link to="/preview/45" className="link">
          <Item>
            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 40 }} />
          </Item>
        </Link>
        <Link to="/preview/45" className="link">
          <Item>
            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 40 }} />
          </Item>
        </Link>
        <Link to="/preview/45" className="link">
          <Item>
            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 40 }} />
          </Item>
        </Link>
      </Box>

      <CardActions className="quest">
        <div className="perc">
          <p>47%</p>
        </div>
        <div className="inp">
        <InputLabel className='emailLab'>
            Can’t wait? Enter your email and we 
            will send it when ready
        </InputLabel>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:250}} />
        </div>
      </CardActions>
    </Card>
  );
}
export default Swapping;
