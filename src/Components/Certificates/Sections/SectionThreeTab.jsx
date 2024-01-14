import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  TableCell,
  styled,
  tableCellClasses,
  Typography,
  Select,
  MenuItem,
  Button,
  Paper,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  TableHead,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { black } from "material-ui/styles/colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function SectionThreeTab(props) {
  return (
    <Box p="15px" className="tab-cls">
      <Typography fontWeight="700" fontSize="18px" align="left">
        Relevant Isolation:
      </Typography>

      <Typography fontSize="18px" color="#131C42" align="left">
        The contractor shall carry out all necessary electrical isolation in
        accordance with the autherity given under MP24(electrical safety) as
        authorised persons. Isolations shall only be carried out by prior
        agreement with the local YW service delivery team.
      </Typography>

      <Button
        variant="outlined"
        sx={{ display: "flex" }}
        disabled={props.showDetails}
      >
        Add Isolation
      </Button>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          mt
          aria-label="customized table"
          margin={5}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Equipment</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">
                Type/method of isolation
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Test
              </StyledTableCell>
              <StyledTableCell align="right">Test</StyledTableCell>
              <StyledTableCell align="right">Test</StyledTableCell>
            </StyledTableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SectionThreeTab;
