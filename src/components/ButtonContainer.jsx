import styled from '@emotion/styled'
import { IconButton, Stack } from '@mui/material'
import React from 'react'

import UmbrellaIcon from '@mui/icons-material/Umbrella'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import CloudIcon from '@mui/icons-material/Cloud'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import AirIcon from '@mui/icons-material/Air'
import TornadoIcon from '@mui/icons-material/Tornado'
import GrainIcon from '@mui/icons-material/Grain'
import VolcanoIcon from '@mui/icons-material/Volcano'
import WaterIcon from '@mui/icons-material/Water'
import MasksIcon from '@mui/icons-material/Masks'
import WavesIcon from '@mui/icons-material/Waves'

const StyledButtonContainer = styled(Stack)(({ theme }) => theme)

const buttonContainerTheme = {
  position: 'absolute',
  width: '100vw',
  bottom: 10
}

const iconButtonStyle = {
  width: 60,
  height: 60,
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 4,
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  ...iconButtonStyle,
  borderColor: theme.background,
  '& .MuiSvgIcon-root': {
    fontSize: 40,
    color: theme.background
  }
}))

function ButtonContainer({ weatherTheme }) {
  return (
    <StyledButtonContainer theme={buttonContainerTheme} direction="row" justifyContent="center" spacing={2}>
      <StyledIconButton theme={weatherTheme}>
        <AcUnitIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <UmbrellaIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <WaterDropIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <WbSunnyIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <CloudIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <ThunderstormIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <AirIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <TornadoIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <GrainIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <VolcanoIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <UmbrellaIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <UmbrellaIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <WaterIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <WavesIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme}>
        <MasksIcon />
      </StyledIconButton>
    </StyledButtonContainer>
  )
}

export default ButtonContainer
