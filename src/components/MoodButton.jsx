import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ColorButton from './ColorButton'

function MoodButton({
  moodData,
  moodButtonStyle,
  selectedMoodIDs,
  setSelectedMoodIDs
}) {
  const [selected, setSelected] = React.useState(false)

  const handleClick = (e) => {
    setSelected(!selected)
    if (selectedMoodIDs.includes(e.currentTarget.id)) {
      setSelectedMoodIDs(selectedMoodIDs.filter((item) => item !== e.currentTarget.id))
    } else {
      setSelectedMoodIDs([...selectedMoodIDs, e.currentTarget.id])
    }
  }

  return (
    <ColorButton key={moodData.id} id={moodData.id} buttonStyle={moodButtonStyle} selected={selected} onChange={handleClick}>
      {moodData.mood}
    </ColorButton>
  )
}

export default MoodButton
