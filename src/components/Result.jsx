import React from 'react'
import CustomGrid from './GridContainer'
import InstructionGridItem from './InstructionGridItem'
import WeatherResultGridItem from './WeatherResultGridItem'

function Result({ coffee, weatherTheme }) {
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

  return (
    <CustomGrid container spacing={2} rowSpacing={{ xs: 2 }}>
      <WeatherResultGridItem xs={12} theme={WeatherResultStyle}>
        Today&apos;s coffee is
        {' '}
        {coffee}
      </WeatherResultGridItem>
      <InstructionGridItem item xs={12}>
        Take a sip of
        {' '}
        {coffee}
      </InstructionGridItem>
    </CustomGrid>
  )
}

export default Result
