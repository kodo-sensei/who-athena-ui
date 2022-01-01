import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/storeTypes";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

function Home() {
  const codes = useSelector((state: RootState) => state.codes);
  return (
    <>
      
      <div className="flex items-center p-4 place-items-center">
        <Grid container spacing={2}>
          {codes.status === "succeeded" &&
            codes.data.map((code: any) => {
              return (
                <Grid item key={code.label} xs={6} md={4}>
                  <Card className="z-[10]" variant="outlined">
                    <React.Fragment>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {code.label}
                        </Typography>
                        <Typography
                          className="text-ellipsis overflow-hidden"
                          variant="body2"
                        >
                          {code.display}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </React.Fragment>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
}

export default Home;
