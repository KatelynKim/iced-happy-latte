import { Typography, styled } from '@mui/material'
import React from 'react'

const typographyTheme = {
  position: 'absolute',
  top: 20,
  right: 50,
  fontSize: 150
}
const StyledTypography = styled(Typography)(({ theme }) => theme)

function Thermometer({ temperature, weatherTheme }) {
  const {
    hoverBackground
  } = weatherTheme
  return (
    <StyledTypography theme={{ color: hoverBackground, ...typographyTheme }}>
      {Math.round(temperature)}
      °C
    </StyledTypography>
  )
}

export default Thermometer
