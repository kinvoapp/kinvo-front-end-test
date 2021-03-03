import React from 'react'
import {makeStyles} from "@material-ui/core"
import InformationIcon from "../../../assets/baseline_info_white_18dp.png"
const useStyles= makeStyles({
  root: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    width: '35%',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    borderTopRightRadius: '12px',
    height: '60px',
    zIndex: 0,
    position: "relative",
    marginTop: "40px",
    display: 'flex'
  },
  title: {
    width: '60%',
    font: "normal normal medium 9px/11px Montserrat",
    paddingLeft: '12px',
    paddingTop: '8px',
    paddingBottom: '2px'
  },
  titleHeader: {
    position: 'absolute',
    left: "-1px",
    top: "-35px",
    fontSize: '10px',
    borderLeft: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    borderTop: '1px solid #ddd',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '12px',
    zIndex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: '12px',
    borderTopLeftRadius: '12px',
    paddingBottom: '8px',
    display:"flex"
  }
})
export default function TitleCard({title, className}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleHeader}><span style={{paddingBottom: '4px'}}>TITULO </span><img style={{backgroundColor: 'black', borderRadius: '50px', width: '13px', height: '13px', marginLeft: '36px'}} src={InformationIcon}/></div>
      <div className={classes.title}>
        {title}   
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingTop: "8px", marginLeft: '25px'}}><span style={{fontSize: '10px', color: '#aaa'}}>CLASSE</span> <span style={{marginTop: '4px', fontSize: '16px', color: "rgb(145,107,189)"}}>{className}</span></div>
    </div>
  )
}
