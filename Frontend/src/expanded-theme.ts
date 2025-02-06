
import { Palette } from "@mui/material";
import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        tertiary: PaletteColor;
    }
    interface PaletteColor {
        [key:number]:string;
    }
}