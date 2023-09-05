import { Stack, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import HeadphonesIcon from "@mui/icons-material/Headphones";

function ContactUs() {
  return (
    <React.Fragment>
      <Stack
        px={[0, 20]}
        sx={{
          height: "calc(100vh - 3rem)",
          // backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgUrl})`,
          background:'linear-gradient(90deg,rgba(50, 174, 121, 1), rgba(244, 231, 50, 0.4))'  ,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Stack width={"100%"} flexDirection={["column","row"]} alignItems={"center"} gap={2}>
          <Stack
            flex={1}
            display={["flex"]}
            alignItems={"center"}
            p={2}
            gap={1}
          >
            <Typography variant="h2"> Contact Us</Typography>
            <Typography variant={"p"} textAlign={"center"}>
              At Actavivo, we pride ourselves on our winning customer service.
              Give us a call or shoot (and score) us an an email. Someone will
              get back to you shortly.
            </Typography>
          </Stack>
          <Stack
            flex={1}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={3}
          
           
          >
            <Stack flexDirection={"row"} gap={2} px={[0,15]}>
              <PhoneIcon sx={{ color: "#32AE79" }} />
              <Typography>214-380-4970</Typography>
            </Stack>
            <Stack flexDirection={"row"} gap={2} px={[0,15]}>
              <MailIcon sx={{ color: "#32AE79" }} />
              <Typography>info@actavivo.com</Typography>
            </Stack>
            <Stack flexDirection={"row"} gap={2} px={[0,15]}>
              <HeadphonesIcon sx={{ color: "#32AE79" }} />
              <Typography>support@actavivo.com</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default ContactUs;
