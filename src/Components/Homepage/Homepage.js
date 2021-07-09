import { Link } from "react-router-dom";
import "./homepage.css";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
function Homepage() {
  return (
    <Card className="homepageComp">
      <CardMedia className="videoComp" />
      <PlayCircleFilledWhiteRoundedIcon
        className="playIcon"
        style={{ fontSize: 120 }}
      />
      <CardActions>
        <Button
          href="page/45"
          className="btn"
          variant="contained"
          style={{ background: "#CFFAA4" }}
        >
          Let's Go
        </Button>
      </CardActions>
    </Card>
  );
}
export default Homepage;
