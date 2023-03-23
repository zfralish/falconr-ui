import React from "react";
import { Stack } from "@mui/material";
import BirdCard from "@/src/components/birdCard/birdCard";

function BirdCardStack() {
  return (
    <Stack>
      <BirdCard
        bird={{
          falconerId: "sadfsadf",
          id: "asdfa",
          name: "Ceres",
          species: "Red Tailed Hawk",
          trapDate: new Date("2021-01-01"),
        }}
      />
    </Stack>
  );
}

export default BirdCardStack;
