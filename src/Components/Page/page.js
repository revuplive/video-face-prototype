import React from "react";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./page.css";

function Page() {
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: "#c4c4c4",
          color: "#f9a1a1",
          p: 1,
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
    <Card className="pageComp">
      <Typography gutterBottom variant="h5" component="h2">
        Select Your Character
      </Typography>
      <Box
        sx={{
          display: "grid",
          columnGap: 10,
          rowGap: 10,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        className="videos"
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
    </Card>
  );
}
export default Page;
