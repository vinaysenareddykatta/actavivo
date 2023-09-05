import { Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Stack backgroundColor={"#32AE79"} minHeight={"50px"} alignItems={"center"} justifyContent={"center"}>
      <Typography color={"#fff"}>
        @ 2023 Actavivo. All rights reserved.
      </Typography>
    </Stack>
  );
}

export default Footer;
