import { Box, Drawer, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logofull.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <React.Fragment>
      <Box position={"sticky"} top={0}>
        <Stack
          height={"3.2rem"}
          maxHeight={"3rem"}
          flexDirection={["row"]}
          alignItems={["center"]}
          justifyContent={["space-between"]}
          pr={1}
          backgroundColor={"#fff"}
          boxShadow={1}
        >
          <img src={Logo} alt="" width="150px" />
          <Box display={["flex", "flex", "none"]} >
            <MenuIcon sx={{ fontSize: "30px" }} onClick={()=>setOpenMenu(true)}/>
          </Box>
          <Stack
            display={["none", "none", "flex"]}
            flexDirection={"row"}
            pr={4}
            gap={10}
            justifyContent={"space-between"}
          >
            <Link className="route-link" to="/">
              Home
            </Link>
            <Link className="route-link" to="how-to">
              How To
            </Link>
            <Link className="route-link" to="contact-us">
              Contact Us
            </Link>
            <Link className="route-link" to="terms">
              Terms
            </Link>
            <Link className="route-link" to="privacy">
              Privacy
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Stack pr={4} gap={1} p={3} paddingX={5} width={"300px"}>
          
          <Link className="route-link" to="/">
            Home
          </Link>
          <Link className="route-link" to="how-to">
            How To
          </Link>
          <Link className="route-link" to="contact-us">
            Contact Us
          </Link>
          <Link className="route-link" to="terms">
            Terms
          </Link>
          <Link className="route-link" to="privacy">
            Privacy
          </Link>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}

export default Header;
