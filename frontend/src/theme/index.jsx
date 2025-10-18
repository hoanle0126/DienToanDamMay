import { createTheme } from "@mui/material";
import { Palette } from "./elements/palette";
import { typography } from "./elements/typography";
import { Shadows } from "./elements/shadow";
import ComponentsCustom from "./elements/components";

export function MuiTheme() {
  const palette = Palette();
  const shadows = Shadows(palette);

  return createTheme({
    palette: Palette(),
    typography: typography,
    shadows,
    components: ComponentsCustom(shadows, palette, typography),
  });
}
