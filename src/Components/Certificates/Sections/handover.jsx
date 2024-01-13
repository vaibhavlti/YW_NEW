import {  Box,Grid, TextField, Typography} from '@mui/material';



function Handover() {
  return (
    <Box p="15px" className="tab-cls">   
          <Typography fontWeight="600" color="#131C42">Handover/Handback</Typography>
          <Box border="1px solid #D8D8D8" padding="10px" mt="20px">
          <Grid container rowSpacing={2} columnSpacing={3} mt='2px'>     
           <Grid item xs={12} md={6} fontSize="30px" lineHeight="45px">
                <Typography mt="5px" component="div">Handover</Typography>
                <Typography mt="10px">I, the authorized person, confirm that the precautions identified above are in effect, and the site can be safely handed over.</Typography>
           
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography>Handback</Typography>

          <Typography mt="10px">I, the contractors representative, confirm that the site is in a safe condition and can be safely handed back.</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Handover name</Typography>
                <TextField
                id="Handover_name"
                name={'Handover name'}
                fullWidth
                size="small"
                placeholder="Enter handover name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Handback name</Typography>
                <TextField
                  id="handback_name"
                  name={'Handback Name'}
                  size="small"
                  fullWidth
                  placeholder="Enter handback name"
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Takeover name</Typography>
                <TextField
                id="Takeover_name"
                name={'Takeover name'}
                size="small"
                fullWidth
                placeholder="Enter details"
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Takeback name</Typography>
                <TextField
                  id="Takeback_name"
                  name={'Takeback name'}
                  fullWidth
                  size="small"
                  placeholder="Enter details"
                />
            </Grid>

            <Grid item xs={12} md={6}>
            <Typography>Handover date</Typography>
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
            <Typography>Handback date</Typography>
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
              <Typography>Comments</Typography>
                <TextField
                id="comments"
                name={'Comments'}
                fullWidth
                // multiline
                // rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Comments</Typography>
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