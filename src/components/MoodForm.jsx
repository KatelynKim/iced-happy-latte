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
import ResultGridItem from './ResultGridItem'
import ResultButton from './ResultButton'

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
    backgroundColor: 'white',
    color: '#495057'
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
            <ResultButton style={weatherTheme} onClick={submitResult}> PICK MY COFFEE </ResultButton>
          </ResultGridItem>
        </CustomGrid>
      )}
    </div>
  )
}
