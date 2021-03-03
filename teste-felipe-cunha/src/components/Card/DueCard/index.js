import React from 'react'
import {makeStyles} from "@material-ui/core"
import InformationIcon from "../../../assets/baseline_info_white_18dp.png"
const useStyles= makeStyles({
  root: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    width: '20%',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    borderTopRightRadius: '12px',
    height: '60px',
    zIndex: 0,
    position: "relative",
    marginTop: "40px",
    display: 'flex',
    margin: '10px'
  },
  date: {
    width: '60%',
    font: "normal normal medium 9px/11px Montserrat",
    paddingLeft: '12px',
    paddingTop: '8px',
    paddingBottom: '2px'
  },
  dateHeader: {
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

export default function DueCard({date, days}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.dateHeader}>
        <span style={{paddingBottom: '4px'}}>VENCIMENTO </span>
        <img style={{backgroundColor: 'black', borderRadius: '50px', width: '13px', height: '13px', marginLeft: '5px'}} src={InformationIcon}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingTop: "8px", marginLeft: '10px'}}>
        <span style={{fontSize: '10px', color: '#000000'}}>DATA VENC.</span>
        <span style={{marginTop: '4px', fontSize: '18px', color: "rgb(0,130,193)"}}>{date}</span>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingTop: "8px", marginLeft: '15px'}}>
        <span style={{fontSize: '10px', color: '#00000'}}>DIAS ATÉ VENC.</span>
        <span style={{marginTop: '4px', fontSize: '18px', color: "rgb(0,130,193)"}}>{days}</span>
      </div>
    </div>
  )
}
