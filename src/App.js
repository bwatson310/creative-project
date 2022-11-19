import './App.css';
import {AppBar, Box, Card, List, ListItem, Paper, Tab, Tabs, Typography} from "@mui/material";
import "./communication-styles-quadrant.png";
import {Image, View} from "react-native-web";

function App() {
  return (
      <Box flex width= "fit-content" flexWrap sx={{scrollBehavior: "inherit"}}>
        <AppBar position="fixed" flex>
            <Card sx={{backgroundColor: "grey", paddingBottom: "1rem", paddingTop: "1rem"}} variant="outlined"
                  height= "fit-content" width = "fit-content" alignContent="center" flex>
                <Tabs variant= "fullWidth" sx={{paddingX: "2rem"}}>
                    <Tab flex size= "flex" label="Introduction" href="#introduction"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightskyblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab flex size= "flex" label="The 2 Axis" href="#The 2 Axis"  clickable sx={{
                        color: "black",
                        backgroundColor:"skyblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab flex size= "flex" label="Consensual" href="#consensual"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab flex size= "flex" label="Pluralistic" href="#pluralistic"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightgreen",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab flex size= "flex" label="Protective" href="#protective" component="a"  clickable sx={{
                        color: "black",
                        backgroundColor: "yellowgreen",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab flex size="flex" label="Laissez-faire" href="#laissez-faire" component="a"  clickable sx={{
                        color: "black",
                        backgroundColor: "orange",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                </Tabs>
            </Card>
        </AppBar>
        <Card id="introduction" sx={{backgroundColor: "lightgray", paddingY: "1rem", paddingTop: "6.5rem"}}>
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
            <Card sx={{paddingX: "2rem", paddingBottom: "3rem"}} style={{ backgroundColor:"inherit", alignItems: "center", boxShadow: "unset"}}>
                <View>
                    <Image resizeMode= "contain" source= "https://okptacultivate.files.wordpress.com/2020/01/checkered-school-materials-graphics-global-day-of-parents-card.jpg"
                           style={{flex: "inherit",  alignSelf: "center", width: "45rem", height: "35rem"}}></Image>
                </View>
                <Typography id= "consensual" paddingBottom= "3rem"></Typography>
            </Card>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Consensual:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Families with a consensual type of communication value open conversation, but also conformity within the
                family unit. Family members communicate freely about thoughts, feelings and activities, but at the same
                time, parents are the final decision-makers about important issues. These two somewhat conflicting
                orientations lead to tensions, caused by a desire to be open but also have control. In these families,
                parents usually spend a lot of time explaining their decisions, values and beliefs, and their children
                learn to value conversation and often adopt the family value system. Families of this nature try to
                avoid conflict, as it threatens the hierarchical structure in which the parents make choices for the
                family. A summary of the pros and cons for children that are raised this pattern are shown below.
            </Typography>
            <Typography variant="h4" paddingX="2rem" flex paragraph>
                Pros
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        They tend to have warmer sibling relationships
                    </ListItem>
                    <ListItem>
                        They tend to be more obedient
                    </ListItem>
                    <ListItem>
                        They tend to be more resilient
                    </ListItem>
                    <ListItem>
                        They tend to believe in traditional values
                    </ListItem>
                    <ListItem>
                        They have decent conflict management skills
                    </ListItem>
                </List>
            </Typography>
            <Typography variant="h4" paddingX="2rem" flex paragraph>
                Cons
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        They avoid conflict
                    </ListItem>
                    <ListItem id="pluralistic">
                        They are less independent
                    </ListItem>
                    <ListItem>
                        They aren't as assertive
                    </ListItem>
                </List>
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor:"lightgreen", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Pluralistic:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Pluralistic families are oriented toward conversation and away from conformity. Parents in these
                families believe in the value of "life lessons," and expect their children to develop through their
                interactions with people outside the family unit. Decisions are made as a family, with everyone having
                equal input. These families also engage in open conflict resolution. They are not afraid of
                disagreements, and have developed good strategies to resolve differences. Children from pluralistic
                families learn to be independent, and have confidence in their ability to make decisions. A summary of
                the pros and cons for children that are raised this pattern are shown below.
            </Typography>
            <Typography variant="h4" paddingX="2rem" flex paragraph>
                Pros
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        They are highly assertive
                    </ListItem>
                    <ListItem>
                        They are independant
                    </ListItem>
                    <ListItem>
                        They have good conflict management skills
                    </ListItem>
                    <ListItem>
                        They tend to be more resilient
                    </ListItem>
                </List>
                Cons
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        Low sibling warmth
                    </ListItem>
                    <ListItem>
                        Tend to stray from traditional values
                    </ListItem>
                    <ListItem id= "protective">
                        Often have a lack of obedience
                    </ListItem>
                    <ListItem>
                        Question authority
                    </ListItem>
                </List>
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "yellowgreen", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Protective:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Protective families do not value open conversation and are oriented toward conformity. In these families,
                you are likely to hear the parent say, "Because I said so". Children are expected to obey their parents,
                and parents do not usually share the reasoning for their decisions. Conflict is usually low in these
                families, because children are oriented toward behaving in accordance with the family norms. However,
                if conflict does arise, members of these families are ill-equipped to handle the situation. In general,
                children from these families do not learn to trust their own ability to make decisions. A summary of the
                pros and cons for children that are raised this pattern are shown below.
            </Typography>
            <Typography variant="h4" paddingX="2rem" flex paragraph>
                Pros
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        Highly obedient
                    </ListItem>
                    <ListItem>
                        High sibling warmth
                    </ListItem>
                    <ListItem>
                        Tend to keep traditional values
                    </ListItem>
                </List>
                Cons
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        High conflict avoidance
                    </ListItem>
                    <ListItem>
                        Lacking in conflict management
                    </ListItem>
                    <ListItem id="laissez-faire">
                        Highly dependent
                    </ListItem>
                    <ListItem>
                        They tend to be less resilient
                    </ListItem>
                </List>
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "orange", paddingX: "2rem", width: "25rem", marginLeft: "1rem", paddingY: "1rem"}}>
                <Typography textAlign="center" paddingY="0.5rem" variant="h5">
                    Pros and Cons of Laissez-faire:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph paddingTop="1.5rem">
                Laissez-faire families value neither conversation nor conformity. Family members are often described as
                "emotionally divorced" from one another. Not much is discussed among members of the family, and parents
                often don't have an interest or investment in the decisions made by their children. Conflicts tend to be
                rare in these family situations, as everyone is free to do as they want, however children do not learn
                the value of conversation. In addition, because they have little support, they may question their
                ability to make decisions. A summary of the pros and cons for children that are raised this pattern are
                shown below.
            </Typography>
            <Typography id="pluralistic" variant="h4" paddingX="2rem" flex paragraph>
                Pros
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        Highly independent
                    </ListItem>
                    <ListItem>
                        Low conflict
                    </ListItem>
                    <ListItem>
                        Original ideas
                    </ListItem>
                </List>
                Cons
                <List sx={{fontSize: "1.25rem", listStyleType: "disc", pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },}}>
                    <ListItem>
                        Indecisive
                    </ListItem>
                    <ListItem>
                        Low sibling warmth
                    </ListItem>
                    <ListItem>
                        Feel no support
                    </ListItem>
                    <ListItem>
                        High conflict avoidance
                    </ListItem>
                    <ListItem>
                        Lacking in conflict management skills
                    </ListItem>
                    <ListItem>
                        They tend to be less resilient
                    </ListItem>
                </List>
            </Typography>
        </Card>
      </Box>

  );
}

export default App;
