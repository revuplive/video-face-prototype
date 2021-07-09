import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import "./ready.css";
function Ready() {
  return (
    <Card className="readyComp">
      <Typography gutterBottom variant="h5" component="h2">
        Your Action Debut is Ready!
      </Typography>
      <CardMedia className="readyVid" />
      <PlayCircleFilledWhiteRoundedIcon
        className="playIcon"
        style={{ fontSize: 120 }}
      />
      <CardActions className="readyBtns">
        <Button
          href="/swapping/45"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Take Again
        </Button>
        <Button
          href="/"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
export default Ready;
