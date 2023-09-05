import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/hero-7.png";
export default function Hero() {
  return (
    <Stack
      flex={1}
      flexDirection={["column-reverse", "row"]}
      justifyContent={["center"]}
      alignItems={["center"]}
      // minHeight={["calc(80vh - 3.1rem)"]}
      height={["100vh"]}
      gap={2}
      px={[0, 2, 20]}
      // bgcolor={["#000"]} //,"green","red","blue","purple"]}
      sx={{
        background: "linear-gradient(90deg,rgba(0,0,0), rgba(0, 0, 0, 0.5))",
      }}
      //           <600mobile    <900tab  dsktop s<1200   lg-1440  xl-2560
    >
      <Stack
        flex={1}
        p={1}
        // alignItems={["center"]}
        // justifySelf={"center"}
      >
        <Typography
          color={"#32AE79"}
          // fontWeight={600}
          // fontSize={["2rem", "2.5rem"]}
          lineHeight={"4rem"}
          textAlign={"left"}
          variant="h2"
          // fontWeight={400}
        >
          Welcome to Actavivo
        </Typography>
        <Typography
          fontSize={["1.2rem"]}
          textAlign={"left"}
          color={"#f4e732c9"}
        >
          The app for every activity
        </Typography>
        <Box width={300} marginTop={5}>
          <Button variant="">
            <img
              src={require("../assets/apple-store.png")}
              alt=""
              width={"50px"}
            />
          </Button>
          <Button>
            <img
              src={require("../assets/play-store.png")}
              alt=""
              width={"65px"}
            />
          </Button>
        </Box>
        
      </Stack>

      <Box p={1} flex={1}>
        <Box minWidth={["100%"]}>
          <img src={heroImg} alt="" width={"100%"} />
        </Box>
      </Box>
    </Stack>
  );
}
