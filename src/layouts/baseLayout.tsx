import * as React from 'react';
import {styled} from '@mui/system';
import {ReactNode} from "react";

interface Props {
  children?: ReactNode
}

const FullScreenDiv = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.background.default,
  padding: 0,
  width: '100vw',
  height: '100vh',
}));


export default function Layout({children}: Props) {
  return (
    <FullScreenDiv>
      {children}
    </FullScreenDiv>
  )
}