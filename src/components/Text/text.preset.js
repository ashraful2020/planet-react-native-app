import { color } from "../../theme/color";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.signature,
  fontSize: 16,
  color: color.white,
};
const BOLD = {
  fontFamily: typography.bold,
  color: color.white,
};
export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BASE,
    fontSize: 32,
  },
  h2: {
    color: color.white,
    fontSize: 24,
  },
  h3: {
    ...BASE,
    fontSize: 20,
  },
  h4: {
    ...BASE,
    fontSize: 16,
  },
  small: {
    ...BOLD,
    fontSize: 12,
  },
  center: {
    ...BOLD,
    textAlign: "center",
  },
};
