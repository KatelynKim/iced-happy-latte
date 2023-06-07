import React from 'react'
import CustomGrid from './GridContainer'
import InstructionGridItem from './InstructionGridItem'
import WeatherResultGridItem from './WeatherResultGridItem'
import ResultGridItem from './ResultGridItem'
import CustomButton from './CustomButton'

function Result({ coffee, weatherTheme, setIsResultVisible }) {
  const {
    hoverBackground
  } = weatherTheme

  const WeatherResultStyle = {
    color: hoverBackground,
    background: 'transparent',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold'
  }

  const onClickBackBtn = () => {
    setIsResultVisible(false)
  }

  return (
    <CustomGrid container spacing={2} rowSpacing={{ xs: 2 }}>
      <WeatherResultGridItem item xs={12} theme={WeatherResultStyle}>
        Today&apos;s coffee is
        {' '}
        {coffee}
      </WeatherResultGridItem>
      <InstructionGridItem item xs={12}>
        Take a sip of
        {' '}
        {coffee}
      </InstructionGridItem>
      <ResultGridItem item xs={12}>
        <CustomButton style={weatherTheme} onClick={onClickBackBtn}> Try again </CustomButton>
      </ResultGridItem>
    </CustomGrid>
  )
}

export default Result
