import React from "react";
import { Bird } from "@/src/models/bird";
import { GenericPaper } from "@/src/components/styled/genericPaper";
import { Avatar, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { LabeledData } from "@/src/components/labeledData";

interface BirdCardProps {
  bird: Bird;
}

function BirdCard({ bird }: BirdCardProps) {
  const calcDateInYears = (date: Date) => {
    const diff = Date.now() - date.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const calcDateDiffInHours = (date: Date) => {
    return Math.round(Math.abs(Date.now() - date.getTime()) / 36e5);
  };

  return (
    <GenericPaper elevation={3}>
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", height: "100%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid container spacing={2}>
          <Grid>
            <Avatar
              src={"https://picsum.photos/200"}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid>
            <Stack>
              <Typography variant="h6">{bird.name}</Typography>
              <Typography color={"secondary"} variant="subtitle1">
                {bird.species}
              </Typography>
              <Typography color={"secondary"} variant="subtitle1">
                {calcDateInYears(bird.trapDate)} years
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid>
          <LabeledData
            label={"Current Weight:"}
            units={"g"}
            value={"1254.4"}
            color={"info.main"}
          />
        </Grid>
        <Grid>
          <LabeledData
            label={"Ideal Weight:"}
            units={"g"}
            value={"1254.4"}
            color={"info.main"}
          />
        </Grid>
        <Grid>
          <LabeledData
            label={"Average Weight Loss:"}
            units={"g"}
            color={"warning.main"}
            value={"-116"}
          />
        </Grid>
        <Grid>
          <LabeledData
            label={"Last Feeding:"}
            units={""}
            value={new Date("2023-03-20").toDateString()}
            color={"info.main"}
          />
        </Grid>
      </Grid>
    </GenericPaper>
  );
}

export default BirdCard;
