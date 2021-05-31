import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ContainerLayoutLateral } from '../common/container'
import { withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordion from '@material-ui/core/Accordion'
/*
  Componentes style
*/

export const NavBar = styled.header`
  height: auto;
  width: 15vw;
  color: #333;
  background-color: ${p => p.theme.colors.white};
  align-items: center;
`
export const Linkable = styled.button`
  width: 100%;
  padding: 10px 15px;
  overflow: hidden;
  background-color: #f1f1f1;
  border: none;
  display: flex;
  justify-content: space-between;
  label {
    margin: 3px 0;
  }
`
export const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  padding: 4px 0;
`
export const LinkStyle = styled.div`
  width: 40%;
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
    backgroundColor: '#F8FAFB'
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
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <NavBar>
      <ContainerLayoutLateral>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1>1</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Linkable>
              <LinkStyle>
                <Dot />
                <label>Home</label>
              </LinkStyle>
              <ExpandMoreIcon />
            </Linkable>
            <Linkable>
              <LinkStyle>
                <Dot />
                <label>Home</label>
              </LinkStyle>
              <ExpandMoreIcon />
            </Linkable>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1>1</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Linkable>
              <LinkStyle>
                <Dot />
                <label>Home</label>
              </LinkStyle>
              <ExpandMoreIcon />
            </Linkable>
            <Linkable>
              <LinkStyle>
                <Dot />
                <label>Home</label>
              </LinkStyle>
              <ExpandMoreIcon />
            </Linkable>
          </AccordionDetails>
        </Accordion>
      </ContainerLayoutLateral>
    </NavBar>
  )
}
export default HomePage
