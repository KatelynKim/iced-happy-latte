import React from 'react'
import CustomGrid from './GridContainer'
import InstructionGridItem from './InstructionGridItem'
import ResultButton from './ResultButton'
import ResultGridItem from './ResultGridItem'
import WeatherResultGridItem from './WeatherResultGridItem'

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
      <WeatherResultGridItem xs={12} style={WeatherResultStyle}>
        Today&apos;s coffee is
        {' '}
        {coffee}
      </WeatherResultGridItem>
      <InstructionGridItem item xs={12}>
        Take a sip of
        {' '}
        {coffee}
      </InstructionGridItem>
      <ResultGridItem xs={12}>
        <ResultButton style={weatherTheme} onClick={onClickBackBtn}>
          Go back
        </ResultButton>
      </ResultGridItem>
    </CustomGrid>
  )
}

export default Result
