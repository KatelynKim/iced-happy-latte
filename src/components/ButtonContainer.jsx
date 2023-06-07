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

function ButtonContainer({ weatherTheme, setCurrentWeather }) {
  return (
    <StyledButtonContainer theme={buttonContainerTheme} direction="row" justifyContent="center" spacing={2}>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Snow')}>
        <AcUnitIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Rain')}>
        <UmbrellaIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Drizzle')}>
        <WaterDropIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Clear')}>
        <WbSunnyIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Clouds')}>
        <CloudIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Thunderstorm')}>
        <ThunderstormIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Haze')}>
        <AirIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Tornado')}>
        <TornadoIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Sand')}>
        <GrainIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Smoke')}>
        <MasksIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Dust')}>
        <GrainIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Ash')}>
        <VolcanoIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Fog')}>
        <WaterIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Mist')}>
        <WavesIcon />
      </StyledIconButton>
      <StyledIconButton theme={weatherTheme} onClick={() => setCurrentWeather('Squall')}>
        <MasksIcon />
      </StyledIconButton>
    </StyledButtonContainer>
  )
}

export default ButtonContainer
