import coffees from '../../data/coffees'
import moods from '../../data/moods'

function getTempPrefix(temperature) {
  let tempPrefix = ''
  if (temperature < 10) {
    tempPrefix += 'hot '
  } else if (temperature >= 17) {
    tempPrefix += 'iced '
  }
  return tempPrefix
}

function getScoresArrByMoodID(moodsArray, moodID) {
  const selectedMood = moodsArray.find((mood) => mood.id === moodID)
  return selectedMood.scores
}

function getTotalScoresArr(selectedMoodIDs) {
  let totalScoresArr = new Array(coffees.length).fill(0)
  for (const id of selectedMoodIDs) {
    const scoresArr = getScoresArrByMoodID(moods, id)
    totalScoresArr = totalScoresArr.map((score, index) => score + scoresArr[index])
  }
  return totalScoresArr
}

function getCoffeeIDsWithMaxScore(totalScoresArr) {
  const maxScore = Math.max(...totalScoresArr)
  const coffeeIDsWithMaxScore = []
  totalScoresArr.forEach((score, index) => (score === maxScore ? coffeeIDsWithMaxScore.push(index) : null))
  return coffeeIDsWithMaxScore
}

function randomlySelectOneCoffeeWithMaxScore(indexesCoffeesWithMaxScores) {
  const randomArrIdx = Math.floor(Math.random() * indexesCoffeesWithMaxScores.length)
  const coffee = coffees[indexesCoffeesWithMaxScores[randomArrIdx]].name
  return coffee
}

export {
  getTempPrefix,
  getScoresArrByMoodID,
  getTotalScoresArr,
  getCoffeeIDsWithMaxScore,
  randomlySelectOneCoffeeWithMaxScore
}
