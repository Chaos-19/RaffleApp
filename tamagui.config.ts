import { config as configBase } from "@tamagui/config";

import { createTamagui } from "tamagui";
import { themes } from "./components/Theme";

const config = createTamagui({
  ...themes,
  ...configBase,
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
