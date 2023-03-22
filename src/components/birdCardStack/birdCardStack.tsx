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
          name: "sdafasd",
          species: "asdlfka;sdf",
          trapDate: new Date(),
        }}
      />
    </Stack>
  );
}

export default BirdCardStack;
