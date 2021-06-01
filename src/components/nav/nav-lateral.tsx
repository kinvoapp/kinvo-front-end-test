import React, { useState } from 'react'
import styled from 'styled-components'
import { ContainerLayoutLateral } from '../common/container'
import { withStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordion from '@material-ui/core/Accordion'
import { Links } from './lateral-content'
/*
  Componentes style
*/

interface IPDots {
  size?: number
  color?: any
}

export const NavBar = styled.header`
  height: auto;
  width: 20vw;
  color: #333;
  background-color: ${p => p.theme.colors.white};
  align-items: center;
`
export const Linkable = styled.button`
  width: 100%;
  padding: 10px 15px 10px 25px;
  overflow: hidden;
  background-color: #f1f1f1;
  border: none;
  display: flex;
  justify-content: space-between;
  label {
    margin: 3px 0;
  }
`
export const Dot = styled.div<IPDots>`
  height: ${p => (p.size ? `${p.size}px` : '10px')};
  width: ${p => (p.size ? `${p.size}px` : '10px')};
  background-color: ${p =>
    p.color ? p.theme.colors.text.purpleStrong : p.theme.colors.text.disabled};
  border-radius: 50%;
  display: inline-block;
  padding: 4px 0;
  margin: 0 15px 0 0;
`
export const LinkStyle = styled.div`
  text-align: left;
  width: 60%;
`
export const SubLinkStyle = styled.div`
  text-align: left;
  display: flex;
  width: 90%;
  h3 {
    font-size: 16px;
    margin: 7px 0;
    width: 50%;
  }
`

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    borderRadius: 'none',
    width: '100%',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#FFF',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    borderRadius: 'none',
    width: '100%',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {
    backgroundColor: '#fff'
  }
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column'
  }
}))(MuiAccordionDetails)
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
  const [active, setActive] = useState(-1)
  const handleChange = (index: number) => {
    setActive(index)
  }
  return (
    <NavBar>
      <ContainerLayoutLateral>
        {Links.map((link: any, index) => (
          <Accordion key={link.name} onChange={() => handleChange(index)}>
            <AccordionSummary
              expandIcon={
                active === index ? (
                  <ArrowBackIosIcon fontSize="small" />
                ) : (
                  <ArrowForwardIosIcon fontSize="small" />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SubLinkStyle>
                {index === active ? (
                  <Dot size={48} color></Dot>
                ) : (
                  <Dot size={48} color={false}></Dot>
                )}
                <h3>{link.label}</h3>
              </SubLinkStyle>
            </AccordionSummary>
            <AccordionDetails>
              {link.subLinks?.map((sub: any) => (
                <Linkable key={sub.label}>
                  <LinkStyle>
                    <Dot color />
                    <label>{sub.label}</label>
                  </LinkStyle>
                  <ArrowForwardIosIcon fontSize="small" />
                </Linkable>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </ContainerLayoutLateral>
    </NavBar>
  )
}
export default HomePage
