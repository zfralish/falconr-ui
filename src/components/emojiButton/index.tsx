import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import { LeftJustifiedButton } from "@/src/components/styled/leftJustifiedButton";
import { Typography } from "@mui/material";
import Link from "next/link";

interface EmojiButtonProps {
  emoji: string;
  text: string;
  link: string;
}
export default function EmojiButton({ emoji, text, link }: EmojiButtonProps) {
  return (
    <Link href={link} passHref>
      <LeftJustifiedButton
        color={"primary"}
        size={"large"}
        variant="text"
        fullWidth
      >
        <Typography variant={"h5"}>{emoji}</Typography>
        <Typography>&nbsp;&nbsp;</Typography>
        <Typography color={"text.primary"}>{text}</Typography>
      </LeftJustifiedButton>
    </Link>
  );
}
