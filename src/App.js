import './App.css';
import {AppBar, Box, Card, Paper, Tab, Tabs, Typography} from "@mui/material";
import "./communication-styles-quadrant.png";
import {Image, View} from "react-native-web";

function App() {
  return (
      <Box flex width= "fit-content" flexWrap sx={{scrollBehavior: "inherit"}}>
        <AppBar position="fixed">
            <Card sx={{backgroundColor: "grey", paddingBottom: "1rem", paddingTop: "1rem"}} variant="outlined"
                  height= "fit-content" width = "fit-content" alignContent="center">
                <Tabs variant= "fullWidth" sx={{paddingX: "2rem"}}>
                    <Tab  size= "medium" label="Introduction" href="introduction"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightskyblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab  size= "medium" label="The 2 Axis" href="#The 2 Axis"  clickable sx={{
                        color: "black",
                        backgroundColor:"skyblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab  size= "medium" label="Consensual" href="#consensual"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab  size= "medium" label="Pluralistic" href="#pluralistic"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightgreen",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab size= "medium" label="Protective" href="#protective" component="a"  clickable sx={{
                        color: "black",
                        backgroundColor: "yellowgreen",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab size= "medium" label="Laissez-faire" href="#laissez-faire" component="a"  clickable sx={{
                        color: "black",
                        backgroundColor: "orange",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab size= "medium" label="Clickable Link" href="#testId" component="a" clickable sx={{
                        color: "black",
                        backgroundColor: "orangered",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                </Tabs>
            </Card>
        </AppBar>
        <Card id="introduction" sx={{backgroundColor: "lightgray", paddingY: "1rem", paddingTop: "8rem"}}>
            <Typography textAlign="center" paddingTop="2rem" variant="h2" flex paddingBottom="2rem">
                Introduction to Family Communication Patterns
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightskyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h4">
                    Introduction:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" paddingTop="2rem" flex paragraph>
                We all come from different families. One of the key characteristics of each family is the way that
                we communicate. Each family has their own way of communicating with each other. As we grow older,
                the way that we communicate with our family changes. They may shift to forms that we are already
                familiar with or they may even become a completely different. The goal of this website is to help
                understand the way that families communicate.
            </Typography>
            <Typography id="The 2 Axis" variant="h6" paddingX="2rem" flex paragraph paddingBottom= "2rem">
                One of the ways that families communicate is through patterns. Through these patterns it is easy
                to determine the nature of some of our family relationships. These different types of communication
                can be divided by 2 different axis. These two axis are "Concept Orientation" and
                "Socio-Orientation". Using these two different quadrants, we are able to define four different
                categories that help describe the patterns in which our families communicate.
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "skyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h6">
                    The Two Axis of Family Communication Patterns:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                The two axis of "Concept Orientation" and "Socio-Orientation" can also be simplified in terms of
                conversation and conformity, Using these two axis of we can create 4 different quadrants of family
                communication patterns. These 4 quadrants are Protective, Pluralistic, Consensual and Laizze-Faire.
                Using these quadrants we differentiate the ways that our family will communicate with each other.
                A representation of these 4 different quadrants are shown below.
            </Typography>
            <Card  sx={{paddingX: "2rem", paddingBottom: "3rem"}} style={{ backgroundColor:"inherit", alignItems: "center", boxShadow: "unset"}}>
                <View>
                    <Image resizeMode= "contain" source= "https://okptacultivate.files.wordpress.com/2020/01/checkered-school-materials-graphics-global-day-of-parents-card.jpg"
                           style={{flex: "inherit",  alignSelf: "center", width: "45rem", height: "35rem"}}></Image>
                </View>
            </Card>
            <Typography id="consensual"></Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightskyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Consensual:
                </Typography>
            </Card>
            <Typography id="pluralistic" variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Families with a consensual type of communication value open conversation, but also conformity within the
                family unit. Family members communicate freely about thoughts, feelings and activities, but at the same
                time, parents are the final decision-makers about important issues. These two somewhat conflicting
                orientations lead to tensions, caused by a desire to be open but also have control. In these families,
                parents usually spend a lot of time explaining their decisions, values and beliefs, and their children
                learn to value conversation and often adopt the family value system. Families of this nature try to
                avoid conflict, as it threatens the hierarchical structure in which the parents make choices for the
                family.
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightskyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Pluralistic:
                </Typography>
            </Card>
            <Typography id="protective" variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Pluralistic families are oriented toward conversation and away from conformity. Parents in these
                families believe in the value of "life lessons," and expect their children to develop through their
                interactions with people outside the family unit. Decisions are made as a family, with everyone having
                equal input. These families also engage in open conflict resolution. They are not afraid of
                disagreements, and have developed good strategies to resolve differences. Children from pluralistic
                families learn to be independent, and have confidence in their ability to make decisions.
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightskyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Protective:
                </Typography>
            </Card>
            <Typography id="laissez-faire" variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Protective families do not value open conversation and are oriented toward conformity. In these families,
                you are likely to hear the parent say, "Because I said so". Children are expected to obey their parents,
                and parents do not usually share the reasoning for their decisions. Conflict is usually low in these
                families, because children are oriented toward behaving in accordance with the family norms. However,
                if conflict does arise, members of these families are ill-equipped to handle the situation. In general,
                children from these families do not learn to trust their own ability to make decisions.
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightskyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Laissez-faire:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Laissez-faire families value neither conversation nor conformity. Family members are often described as
                "emotionally divorced" from one another. Not much is discussed among members of the family, and parents
                often don't have an interest or investment in the decisions made by their children. Conflicts tend to be
                rare in these family situations, as everyone is free to do as they want, however children do not learn
                the value of conversation, argue Koerner and Fitzpatrick. In addition, because they have little support,
                they may question their ability to make decisions.
            </Typography>
        </Card>
      </Box>

  );
}

export default App;
