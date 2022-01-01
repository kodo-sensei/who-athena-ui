import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { RootState } from "../../../app/storeTypes";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { selectActiveCodeAction } from "../../../services/redux/code/codeSlice";

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function SideBar() {
  const codes = useSelector((state: RootState) => state.codes);
  const dispatch = useDispatch();

  const selectActiveCode = (code: any) => {
    dispatch(selectActiveCodeAction(code));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Paper className="" elevation={0} sx={{ maxWidth: 256 }}>
        <FireNav component="nav" disablePadding>
          {codes.status === "succeeded" &&
            codes.data.map((code: any, idx: number) => (
              <Accordion
                key={`${code.label}-${idx}`}
                style={{
                  boxShadow: "unset",
                }}
                onClick={(ev) => {
                  selectActiveCode(code);
                }}
                expanded={codes.selected && code.label === codes.selected.label}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h6>{code.label}</h6>
                </AccordionSummary>
                <AccordionDetails className="bg-gray-100">
                  <p>{code.display}</p>
                  {code.attr.map((attribute: any, idx: number) => {
                    return (
                      <ListItemButton
                        key={`${attribute.category}-${idx}`}
                        sx={{ py: 0, minHeight: 32 }}
                      >
                        <ListItemIcon sx={{ color: "inherit" }}>
                          <Checkbox
                            edge="start"
                            // checked={true}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{
                              "aria-labelledby": `checkbox-list-label-${attribute.category}-${idx}`,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={attribute.category}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: "medium",
                          }}
                        />
                      </ListItemButton>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            ))}
        </FireNav>
      </Paper>
    </Box>
  );
}
