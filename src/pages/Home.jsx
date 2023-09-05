import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";

import Women from "../assets/activity.jpg";
import Teams from "../assets/teams.jpg";
import Parents from "../assets/parents.png";
import Families from "../assets/families.png";
import { Stack, Typography } from "@mui/material";

import Card from "../components/Card";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Section
        bgcolor={"#32ae7996"}
        bgImage={Women}
        header={"The app for every activity"}
        content={`
              Actavivo helps you stay in control and up to date with your active
              life. If you are a player, coach, parent, grandparent, schoolmate,
              neighbor or anyone with friends and family that you want to stay
              connected to, Actavivo is the safe place to share and manage your
              activities.
                 
              \n
              Supporting all the social media features you are familiar with,
              Actavivo was optimized from the ground up to be the easiest and
              best place to manage teams and groups for any activity. With
              modern and familiar, web and mobile applications, Actavivo lets
              you effortlessness invite people to your team, share important
              information and manage your many events.
        
              Actavivo has many great features but is very easy to use, help is
              provided right in the app.. If you are familiar with any social
              media tool you will be right at home in Actavivo. Actavivo also
              integrates with email, calendars and texting. Best of all,
              Actavivo is FREE and we do not sell your information. You are
              always in control.
          `}
      />
      {/* section 2 */}
      <Section
        bgcolor={"#f4e732c9"}
        header={"Teams, Groups or any Organization"}
        bgImage={Teams}
        direction={"row-reverse"}
        content={`
            Teams, Bands, Squads, Clubs, or any group of people wanting to share
            and organize themselves is the core of Actavivo. Actavivo makes it
            easy to invite and include everyone whether they join Actavivo or
            not. You can assign people to roles like Coach, Assistant, Team Mom,
            Director, Captain, etc.. to share the management of your team or
            organization. Quickly schedule games or recurring events like
            practices and conditioning and keep track of who is attending.
            Update the schedule when life changes and keep everyone informed via
            calendar integration and email/txt alerts. Share team documents like
            plays, strategies, routines, formations, or any other information
            needed to help your team grow and succeed.
          `}
      />
      {/* section 2 */}
      <Section
        bgcolor={"#0693e385"}
        header={"Parents and Guardians"}
        bgImage={Parents}
        content={`
            Actavivo understands that many children have active lives and active
            schedules. Actavivo is designed to support parents and other
            guardians with their hectic schedules and sharing important moments
            with family and friends. Parents and guardians no longer have to go
            to multiple places to see and manage their children’s many
            activities. Unlike other solutions, in Actavivo your child’s account
            is separate and when they are old enough, they can be granted access
            to manage their own account and retain all their history and
            precious moments.
       `}
      />
      <Section
        bgcolor={"#32ae7996"}
        header={"Players and Families"}
        bgImage={Families}
        direction="row-reverse"
        content={`
            Keep track of all your activities and many schedules in one place.
            Track your friends and families’ activities and get alerts during
            games and always know what’s going on. Overtime have a complete
            history of all your activities, review highlights and see how you
            have grown. Track your skills and accomplishments and get guidance
            to help you improve.
         `}
      />

      <Stack
        flexDirection={["column", "row"]}
        gap={2}
        p={1}
        py={2}
        backgroundColor={"#fafafa"}
        px={[0, 2, 20]}
      >
        <Card
          cardImage={require("../assets/clubs.jpg")}
          name={"Clubs"}
          content={
            "Manage your club and share information with all your teams and players in a safe secure environment. Assign staff and keep track of all your teams and their schedules. Share all the great things about your club and recruit the best players and coaches."
          }
        />
        <Card
          cardImage={require("../assets/schools.jpg")}
          name={"Schools"}
          content={
            "Safely and securely share important information about all the activities in your school. You decide what is private to the staff and members, and what is public to stay engaged with Alumni, friends, and extended family."
          }
        />
        <Card
          cardImage={require("../assets/games.jpg")}
          name={"Games"}
          content={
            "Real time updates during the game for family and friends who can not attend. Full scoreboard support optimized for each type of sport of activity. Player names and stats easily accessible during the game."
          }
        />
      </Stack>
      <Stack
        flexDirection={["column", "row"]}
        gap={2}
        p={1}
        backgroundColor={"#fafafa"}
        px={[0, 2, 20]}
        pb={4}
      >
        <Card
          cardImage={require("../assets/funds.jpg")}
          name={"Fundraising"}
          content={
            "Include and provide visibility to your sponsors with banner placement and links to services. Run fundraising campaigns and easy reach your audience with simple ways to support your activity."
          }
        />
        <Card
          cardImage={require("../assets/neighbors.jpg")}
          name={"Neighborhoods"}
          content={
            "Invite all your neighbors and organize activities and share information."
          }
        />
        <Card
          cardImage={require("../assets/groups.jpg")}
          name={"Groups"}
          content={
            "Create a group for any topic and freely share ideas and schedule events for any reason."
          }
        />
      </Stack>

      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        bgcolor={"#32ae7996"}
      >
        <Section
          bgcolor={"#esdee"}
          bgImage={require("../assets/safety.png")}
          header={"Safety & Security "}
          content={
          `
              Actavivo is a safe, friendly environment for everyone to share all
              the exciting and fun activities they are doing. All posts, images
              and videos are moderated by AI and page owners to ensure that
              Actavivo is free of inappropriate and out of context content. Use
              your existing accounts to login, no need to remember another
              password. Actavivo integrates with Microsoft, Google, Apple,
              Facebook and LinkedIn.
            `
          }
        />
      </Stack>
   
    </React.Fragment>
  );
}

export default Home;
