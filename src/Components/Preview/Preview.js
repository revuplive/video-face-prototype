import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import "./preview.css";
function Preview() {
  return (
    <Card className="previewComp">
      <Typography gutterBottom variant="h5" component="h2">
        Swap With Jimmy the Body Builder
      </Typography>
      <CardMedia className="video" />
      <PlayCircleFilledWhiteRoundedIcon
        className="playIcon"
        style={{ fontSize: 120 }}
      />
      <CardActions className="btns">
        <Button
          href="/page/45"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Go Back
        </Button>
        <Button
          href="/swapping/45"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Start Swapping
        </Button>
      </CardActions>
    </Card>
  );
}
export default Preview;
