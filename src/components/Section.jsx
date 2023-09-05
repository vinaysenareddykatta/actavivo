import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Section({
  header,
  content,
  bgImage,
  bgcolor = "#7a7a7a4f",
  direction = "row",
}) {
  return (
    <Stack
      bgcolor={bgcolor}
      flex={1}
      minHeight={["calc(100vh - 60px)"]}
      gap={[1, 2]}
      flexDirection={["column", direction, direction]}
      alignItems={"center"}
      px={[0, 2, 20]}
      py={[2]}
    >
      <Box flex={1}>
        <Box maxWidth={"490px"} height={"300px"}>
          <img src={bgImage} alt="" width={"100%"} height={"100%"} />
        </Box>
      </Box>
      <Box
        flex={1}
        p={1}
        alignSelf={"center"}
        justifySelf={"center"}
        paddingY={2}
      >
        <Typography
          textAlign={"left"}
          fontWeight={600}
          fontSize={["1.6rem"]}
          mb={1}
        >
          {header}
        </Typography>
        <Typography textAlign={"justify"} >{content}</Typography>
      </Box>
    </Stack>
  );
}
