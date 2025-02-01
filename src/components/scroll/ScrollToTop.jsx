import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => window.scrollTo(0, 0)}
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 20 }}
        color="text.secondary"
        aria-label="scroll-to-top-button"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
