import React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import moods from '../data/moods'
import MoodButton from './MoodButton'
import WeatherResultGridItem from './WeatherResultGridItem'
import CustomGrid from './GridContainer'
import InstructionGridItem from './InstructionGridItem'
import recommendCoffee from '../lib/recommendCoffee'
import ColorButton from './ColorButton'
import convertWeatherToAdjective from '../lib/helpers/convertWeatherToAdjective'

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
    }
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
            On this
            {' '}
            {convertWeatherToAdjective(mainWeather)}
            {' '}
            day, I&apos;m feeling a bit...
          </WeatherResultGridItem>
          <InstructionGridItem item xs={12}>
            Select all that apply!
          </InstructionGridItem>
          {moods.map((moodData) => (
            <Grid item xs={1.7} key={moodData.id}>
              <MoodButton moodData={moodData} moodButtonStyle={moodButtonStyle} selectedMoodIDs={selectedMoodIDs} setSelectedMoodIDs={setSelectedMoodIDs} />
            </Grid>
          ))}
          <ResultGridItem item xs={12}>
            <ColorButton theme={customButtonStyle} value="result" onClick={submitResult}> PICK MY COFFEE </ColorButton>
          </ResultGridItem>
        </CustomGrid>
      )}
    </div>
  )
}
