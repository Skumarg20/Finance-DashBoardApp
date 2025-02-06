import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLargeScreens = `
  "a b b"
  "a b b"
  "c d e"
  "c d e"
  "f g h"
  "f g h"
  "i j j"
  "i j j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "b"
  "b"
  "c"
  "c"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "g"
  "g"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const DashBoard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 700px)");

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      pb="3rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(400px, 1fr))", // Increased width
              gridTemplateRows: "150px 150px 200px 200px 150px 150px 80px 80px", // Specific row heights
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "200px", // Increased row height for small screens
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default DashBoard;