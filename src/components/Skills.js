import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Technolofies from "./Technolofies";
const Skills = ({title,id, gray}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3"className={classes.titulo} >{title}</Typography>
              <Technolofies/>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        color: "#063891"
    },
    sectionContent:{
        maxWidth:"80vw",
        margin: "0 auto",
        
    },
    titulo:{
      textShadow: "6px 5px 10px #555"
    }
  }))

export default Skills;