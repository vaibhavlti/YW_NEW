import {  Box,Grid, TextField, Typography} from '@mui/material';



function Handover() {
  return (
    <Box p="15px" className="tab-cls">   
          <Typography fontWeight="600" color="#131C42" align='left'>Handover/Handback</Typography>
          <Box border="1px solid #D8D8D8" padding="10px" mt="20px">
          <Grid container rowSpacing={2} columnSpacing={3} mt='2px'>     
           <Grid item xs={12} md={6} fontSize="30px" lineHeight="45px">
                <Typography mt="5px" component="div" align='left' fontWeight={700}>Handover</Typography>
                <Typography mt="10px" align='left'>I, the authorized person, confirm that the precautions identified above are in effect, and the site can be safely handed over.</Typography>
           
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography align='left' fontWeight={700}>Handback</Typography>

          <Typography mt="10px" align='left'>I, the contractors representative, confirm that the site is in a safe condition and can be safely handed back.</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography align='left'>Handover name</Typography>
                <TextField
                id="Handover_name"
                name={'Handover name'}
                fullWidth
                size="small"
                placeholder="Enter handover name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography align='left'>Handback name</Typography>
                <TextField
                  id="handback_name"
                  name={'Handback Name'}
                  size="small"
                  fullWidth
                  placeholder="Enter handback name"
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography align='left'>Takeover name</Typography>
                <TextField
                id="Takeover_name"
                name={'Takeover name'}
                size="small"
                fullWidth
                placeholder="Enter details"
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography align='left'>Takeback name</Typography>
                <TextField
                  id="Takeback_name"
                  name={'Takeback name'}
                  fullWidth
                  size="small"
                  placeholder="Enter details"
                />
            </Grid>

            <Grid item xs={12} md={6}>
            <Typography align='left'>Handover date</Typography>
             <TextField
             id="handover_date"
             type="date"
             name={'Handover Date'}
             size="small"
             fullWidth
             format="MM/DD/YYYY"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography align='left'>Handback date</Typography>
             <TextField
             id="handback_date"
             type="date"
             name={'Handback Date'}
             size="small"
             fullWidth
             format="MM/DD/YYYY"
            />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography align='left'>Comments</Typography>
                <TextField
                id="comments"
                name={'Comments'}
                fullWidth
                // multiline
                // rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography align='left'>Comments</Typography>
                <TextField
                id="comments"
                name={'Comments'}
                fullWidth
                // multiline
                // rows={3}
                />
            </Grid>          
            </Grid>
            </Box>
    </Box>
  );
}

export default Handover;