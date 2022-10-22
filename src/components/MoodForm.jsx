import React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import moods from '../data/moods'
import MoodButton from './MoodButton'
import WeatherResultGridItem from './WeatherResultGridItem'
import CustomGrid from './GridContainer'
import InstructionGridItem from './InstructionGridItem'
import recommendCoffee from '../lib/recommendCoffee'
import CustomButton from './CustomButton'
import ColorButton from './ColorButton'

const ResultGridItem = styled(Grid)({
  textAlign: 'center'
})

export default function MoodForm({
  weatherTheme,
  mainWeather,
  selectedMoodIDs,
  setSelectedMoodIDs,
  temperature,
  setCoffee,
  setIsResultVisible
}) {
  const {
    color,
    background,
    hoverBackground,
    hoverColor
  } = weatherTheme

  const WeatherResultStyle = {
    color: hoverBackground,
    background: 'transparent',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold'
  }

  const moodButtonStyle = {
    ...weatherTheme,
    width: '8vw',
    transition: '0.3s',
    backgroundColor: 'white',
    color: '#495057',
    '&:hover': {
      backgroundColor: hoverBackground,
      color: hoverColor
    },
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: hoverBackground
    },
    '&.Mui-selected:hover': {
      color: 'white',
      backgroundColor: hoverBackground
    }
  }

  const customButtonStyle = {
    ...weatherTheme,
    transition: '0.3s',
    '&:hover': {
      backgroundColor: hoverBackground,
      color: hoverColor,
    },

  }
  const submitResult = () => {
    const coffee = recommendCoffee(selectedMoodIDs, temperature)
    setCoffee(coffee)
    setIsResultVisible(true)
  }
  return (
    <div>
      {mainWeather && (
        <CustomGrid container spacing={2} rowSpacing={{ xs: 2 }}>
          <WeatherResultGridItem item xs={12} theme={WeatherResultStyle}>
            Today&apos;s weather is
            {' '}
            {mainWeather.toUpperCase()}
          </WeatherResultGridItem>
          <InstructionGridItem item xs={12}>
            How are you feeling today? Select all that apply and we&apos;ll pick the right coffee for you!
          </InstructionGridItem>
          {moods.map((moodData) => (
            <Grid item xs={1.7}>
              <MoodButton moodData={moodData} moodButtonStyle={moodButtonStyle} selectedMoodIDs={selectedMoodIDs} setSelectedMoodIDs={setSelectedMoodIDs} />
            </Grid>
          ))}
          <ResultGridItem item xs={12}>
            <ColorButton buttonStyle={customButtonStyle} onClick={submitResult}> PICK MY COFFEE </ColorButton>
          </ResultGridItem>
        </CustomGrid>
      )}
    </div>
  )
}
