import React from "react";
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector,TimelineContent} from '@material-ui/lab';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from "@material-ui/core/paper";
import sql from "../img/sql.png";
import mongodb from "../img/mongodb.png";
import c from "../img/C#.png";
import flutter from "../img/flutter.png";
import react from "../img/react.png";
import js from "../img/js.png";
import css3 from "../img/css3.png";
import html5 from "../img/html5.png";
import python from "../img/python.png";
import StarRating from "./StarRating";
import '../index.css';





const Technolofies = (theme) => {
     const classes = useStyles();
     const skills = [
        {
            src: sql,
            title: "Microsoft Sql server",
            start: 4,
        },
        {
            src: mongodb,
            title: "Mongo db",
            start: 3,
        },
        {
            src: c,
            title: "C# .Net",
            start: 4,
        },
        {
            src: js,
            title: "javaScript",
            start: 3,
        },
        {
            src: css3,
            title: "Css 3",
            start: 4,
        },
        {
            src: html5,
            title: "Html 5",
            start: 4,
        },
        {
            src: react,
            title: "React js",
            start: 3,
        },
        {
            src: flutter,
            title: "Flutter",
            start: 3,
        },
        {
            src: python,
            title: "python",
            start: 4,
        },        
        
    ]
    
    

    return(
    <Timeline align="alternate" className={classes.timeline}>
        {skills.map(({src, title, start}, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator className={classes.separador}>
                        
                        <img src={src} alt={title} className={classes.customlogo}></img>
                        <TimelineConnector className={classes.connector}/>
                    </TimelineSeparator>
                    <TimelineContent >
                        <Paper elevation={5} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                {title}
                            </Typography>
                            <StarRating start={start}/>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))
        }
    </Timeline>
    )
}
const useStyles = makeStyles((theme) => ({
  customlogo:{
    width: "25px",
    [theme.breakpoints.down("sm")]:{
         width: "35px",
         padding: "15px",
         
         
        }
    
    },
    paper:{
        
        padding: "6px 16px",
        [theme.breakpoints.down("sm")]:{
            textAlign: "center",
            
        }
        
    },
    
    connector:{
        
        [theme.breakpoints.down("sm")]:{
            display: "none",
            
        }       
    },
    
}))

export default Technolofies