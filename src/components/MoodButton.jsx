import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const ColorButton = styled(Button)(({ moodButtonStyle }) => moodButtonStyle)

function MoodButton({ moodData, moodButtonStyle }) {
  return (
    <ColorButton key={moodData.id} moodButtonStyle={moodButtonStyle}>
      {moodData.mood}
    </ColorButton>
  )
}

export default MoodButton
