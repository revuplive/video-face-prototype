import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

import "./errInfo.css";
function ErrInfo() {
  return (
    <Card className="errInfoComp">
      <Typography gutterBottom variant="h5" component="p">
        *tip if you get a crazy result our AI mechanics didn’t get a good
        <br />
        view of your beautiful face. Try retaking with better lighting.
      </Typography>
      <CardMedia className="errPic" />
      <FiberManualRecordRoundedIcon
        className="circul"
        style={{ fontSize: 180 }}
      />

      <CardActions className="btns">
        <Button
          href="/swapping/45"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Take Again
        </Button>
        <Button
          href="/swapping"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Swap
        </Button>
      </CardActions>
    </Card>
  );
}
export default ErrInfo;
