import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./pages.css";
import bgUrl from "../assets/pexels-andrea-piacquadio-3764011.jpg";
function Howto() {
  return (
    <React.Fragment>
      <Stack
        px={[0, 20]}
        sx={{
          height: "calc(100vh - 3rem)",
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgUrl})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={["column","row"]}
        >
          <Stack flex={1} display={["none", "flex"]}></Stack>
          <Stack flex={1}>
            <Typography
              variant={["h2"]}
              color={"#fff"}
              textAlign={["center", "left"]}
            >
              Kick-Off your Actavivo Journey
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        height={"calc(100vh - 3rem)"}
        alignItems={"center"}
        justifyContent={"center"}
        px={[0, 20]}
        backgroundColor="#efefef"
      >
        <Typography variant={"p"} textAlign={"center"} fontSize={'2rem'}>
          Your home page provides you with all the latest information from
          everything you follow.
          Each person, group, event, team etc.. has their own page with the
          basic public information (Name, Profile, Posts) and private
          information only available to members and followers.
        {/* </Typography>
        <Typography variant={"p"} textAlign={"justify"} fontSize={'1.8rem'}> */}
          Each type of page has a similar layout but unique features depending
          on the type of page.
        </Typography>
      </Stack>
      <Stack
        minHeight={"calc(100vh - 3rem)"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        px={[0, 20]}
        py={[2]}
        backgroundColor="#32ae7996"
        gap={2}
        // flexDirection={"row"}
      >
        <Stack flex={1} width={"100%"}>
          <Typography textAlign={"center"} variant={"h4"}>
            Types of Pages
          </Typography>
        </Stack>
        <Stack
          flexDirection={["column", "row"]}
          flex={1}
          width={"100%"}
          gap={1}
        >
          <Page
            image={require("../assets/person.jpg")}
            title={"Person"}
            content={`The person page has everything about that person including their
                Events, Organizations, Photos, Documents and Activities.`}
          />
          <Page
            image={require("../assets/team.jpg")}
            title={"Team"}
            content={`A team represents the team independent of the season. It has staff and links to all the team’s seasons. You can create a new season either from the team page or a current season.`}
          />
          <Page
            image={require("../assets/season.jpg")}
            title={"Season"}
            content={`TA season represents a team for a specific period of time. Each season the staff, members and players can change. By default when you create a new season it will have the same staff, members and players. You can then add and remove as needed.`}
          />
        </Stack>

        <Stack
          flexDirection={["column", "row"]}
          flex={1}
          width={"100%"}
          gap={1}
        >
          <Page
            image={require("../assets/events.jpg")}
            title={"Events"}
            content={`There are 3 types of events, Games, Practices/Meetings and Social/Other. You can quicky create reoccurring events for practices and meetings. Each event has its own page and allows you to customize it as well as have event specific participants and posts.`}
          />
          <Page
            image={require("../assets/games.jpg")}
            title={"Games"}
            content={`Games are a special type of event that provides real time updates during the game for family and friends who cannot attend. Full scoreboard support optimized for each type of sport or activity. Player names, numbers and stats easily accessible during the game.`}
          />
          <Page
            image={require("../assets/clubs.jpg")}
            title={"Clubs"}
            content={`Manage your club and share information with all your teams and players in a safe secure environment. Assign staff and keep track of all your teams and their schedules. Share all the great things about your club and recruit the best players and coaches.`}
          />
        </Stack>
        <Stack
          flexDirection={["column", "row"]}
          flex={1}
          width={"100%"}
          gap={1}
        >
          <Page
            image={require("../assets/schools.jpg")}
            title={"Schools"}
            content={`Safely and securely share important information about all the great activities in your school. You decide what is private to the staff and members, and what is public to stay engaged with Alumni, friends, and extended family. Schools have a list of all the teams, clubs, bands, squads and activities at the school.`}
          />
          <Page
            image={require("../assets/neighbors.jpg")}
            title={"Neighborhoods"}
            content={`Invite all your neighbors and organize activities and share information.`}
          />
          <Page
            image={require("../assets/groups.jpg")}
            title={"Groups"}
            content={`Create a group for any topic and freely share ideas and schedule events. Groups can be open to all or limited to your audience. They can allow full interaction by followers or be used for one-way notifications. You are in control!`}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

const Page = ({ image, title, content }) => {
  return (
    <>
      <Stack
        gap={1}
        boxShadow={"2"}
        bgcolor={"#fff"}
        overflow={"hidden"}
        borderRadius={2}
        flex={1}
        flexDirection={"column"}
        alignItems={"center"}
       justifyContent={"flext-start"}
        p={[8, 0]}
        // m={3}
      >
        <Stack  overflow={"hidden"}>
          <img
            src={image}
            alt=""
            width={"100%"}
            style={{ objectFit: "fill" }}
          />
        </Stack>
        <Typography variant={"h5"}>{title}</Typography>
        <Stack  p={1}>
          <Typography textAlign={"center"}>{content}</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Howto;
