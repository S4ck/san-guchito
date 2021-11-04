import {extendTheme, theme, ChakraProvider} from "@chakra-ui/react";

import {INFORMATION} from "./app/constants";

export default extendTheme({
  colors: {
    primary: theme.colors[INFORMATION.color],
  },
});
