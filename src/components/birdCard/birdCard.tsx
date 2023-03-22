import React from "react";
import { Bird } from "@/src/models/bird";
import { GenericPaper } from "@/src/components/styled/genericPaper";

interface BirdCardProps {
  bird: Bird;
}

function BirdCard({ bird }: BirdCardProps) {
  return (
    <GenericPaper elevation={3}>
      <p>{bird.name}</p>
    </GenericPaper>
  );
}

export default BirdCard;
