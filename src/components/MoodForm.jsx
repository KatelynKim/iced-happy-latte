import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import moods from '../data/moods'
import MoodButton from './MoodButton'
import WeatherResultGridItem from './WeatherResultGridItem'
import CustomGrid from './GridContainer'
import InstructionGridItem from './InstructionGridItem'
import recommendCoffee from '../lib/recommendCoffee'

const ResultGridItem = styled(Grid)({
  textAlign: 'center'
})

const ResultButton = styled(Button)(({ resultButtonStyle }) => resultButtonStyle)

export default function MoodForm({
  weatherTheme,
  mainWeather,
  selectedMoodIDs,
  setSelectedMoodIDs,
  temperature
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

  const resultButtonStyle = {
    ...weatherTheme,
    '&:hover': {
      backgroundColor: hoverBackground,
      color: hoverColor
    }
  }

  const moodButtonStyle = {
    ...weatherTheme,
    width: '8vw',
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
  const submitResult = () => {
    recommendCoffee(selectedMoodIDs, temperature)
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
            <ResultButton resultButtonStyle={resultButtonStyle} onClick={submitResult}> PICK MY COFFEE </ResultButton>
          </ResultGridItem>
        </CustomGrid>
      )}
    </div>
  )
}
