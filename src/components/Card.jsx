import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Card({cardImage, name, content}) {
  return (
   
      <Stack
       flex={1}
        backgroundColor={"#000000d6"}
        // borderRadius={2}
        border={"1px solid #bgbgbg"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        // p={4}
        gap={1}       
        paddingX={5}  
        paddingY={2}
  
      >
        <Typography fontSize={"1.5rem"} fontWeight={600} color={"primary"} lineHeight={2}>
          {name}
        </Typography>
        <Box width={"100%"}>
          <img src={cardImage} alt="" width={"100%"} />
        </Box>
        <Typography color={"secondary"} textAlign={"justify"}>
        {content}
        </Typography>
      </Stack>
   
  );
}

export default Card;
