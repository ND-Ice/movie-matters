import React from "react";
import { Grid } from "@chakra-ui/react";

export default function GridWrapper({ children }) {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(auto-fill, minmax(250px, 1fr))",
      }}
      gap="1rem"
    >
      {children}
    </Grid>
  );
}
