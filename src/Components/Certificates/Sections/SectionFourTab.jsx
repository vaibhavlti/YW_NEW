import {  Box, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
//  import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//  import FileUploadIcon from '@mui/icons-material/FileUpload';

function SectionFourTab() {
    
  return (
    <Box p="15px" className="tab-cls">
    
     <Typography fontWeight="700" color="#131C42">Additional Safety Requirements</Typography>
     <Typography mt="5px" align='left'>Site rules</Typography>
           <TextField
            id="site_rules"
            name='SiteRules'
            fullWidth
            // multiline
            rows={4}
            variant="outlined"
            defaultValue={'This is a restricted handover. This certificate only hand-over control and possession of the low voltage electrical system, and a practical working area around it. If the working area extends into a confined space the contractor will take possession of the confined space for the duration of the activity. This certificate does not hand-over the site, operational responsibility for the site (or equipment being worked on), or responsibility for site security. This certificate is only in force when the contractor is present on site and carrying out the works, at all other times the YW service delivery team retains control and posession of the electrical system and working area.'}
          />
            <Typography mt="10px" align='left'>Site/emergency procedures</Typography>
       <TextField
            id="site_rules0"
            name={'Site Rules'}
            fullWidth
            // multiline
            // rows={2}
            variant="outlined"
            defaultValue={'In accordance with site induction.'}
          />
             <Typography mt="10px" align='left'>Any other instructions/conditions</Typography>
       <TextField
            id="site_rules1"
            name={'Site Rules'}
            fullWidth
            // multiline
            // rows={2}
            variant="outlined"
            defaultValue={'when the handover is in force the contractor shall demark the working area and erect appropriate barriers and warning notices. All other personnel visiting the site shall make prior contact with the contractor using the information detailed on the contractors sign at the site entrance to a) ensure that an appropriate level of communication is maintained, and  b) Seek appropriate consent for any interaction with the site low voltage electrical system during the works. Not intrusive work(affecting normal operations) shall be carried out without prior authorization rom the local YW service delivery team and appropriate work management systems being employed. All request for intrusive works are to be made a minimum of two weeks in advance of the planned works, and supported by RAMS and mitigation plan.'}
          />
             <Typography mt="10px" align='left'>Need for access by YW personnel/others</Typography>
       <TextField
            id="site_rules2"
            name={'Site Rules'}
            fullWidth
            // multiline
            // rows={2}
            variant="outlined"
            defaultValue={'Access by YW personnel to carry out opertaional activities is permitted at all times. Access by YW maintenance personnel (or works by other contractors) when the low voltage electrical system is affected shall only be by prior agreement with the contractor that is in posession of this certificate.'}
          />
             <Typography mt="10px" align='left'>Issue of permit to work specific tasks - electrical, non-electrical, pressure system - detail type and task</Typography>
       <TextField
            id="site_rules3"
            name={'Site Rules'}
            fullWidth
            // multiline
            // rows={2}
            variant="outlined"
          />       
    </Box>
  );
}

export default SectionFourTab;
