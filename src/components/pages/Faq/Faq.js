import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import '../Faq/Faq.css'
import { Divider } from '@mui/material';

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      
    };
  
  return (
    <div>
        <h1 style={{marginTop:'40px'}}>FAQ</h1>
    <div className='containerrr'>
       
    
    <Accordion style={{background:"rgb(70, 70, 70)"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
           
            expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
          
            <Typography sx={{ color: 'white' }}>What is Parkinson ? </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{color:'white'}}>
            Parkinson's disease is a brain disorder that causes unintended or uncontrollable movements, 
            such as shaking, stiffness, and difficulty with balance and coordination. Symptoms usually begin 
            gradually and worsen over time. As the disease progresses, people may have difficulty walking and talking.
            </Typography>
            </AccordionDetails>
    </Accordion>
    <Divider/>

    <Accordion style={{background:"rgb(70, 70, 70)"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color:'white'}}>What is the main cause of Parkinson's disease?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          Parkinson's disease is caused by a loss of nerve cells in the part of the brain called the substantia nigra. 
          Nerve cells in this part of the brain are responsible for producing a chemical called dopamine.
          </Typography>
        </AccordionDetails>
    </Accordion>
    <Divider/>

    <Accordion style={{background:"rgb(70, 70, 70)"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
    </Accordion>


    <Accordion style={{background:"rgb(70, 70, 70)"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
    </Accordion>


    </div>
    </div>
    
  );
}
