import {
  getTotalScoresArr,
  getCoffeeIDsWithMaxScore,
  randomlySelectOneCoffeeWithMaxScore,
  getTempPrefix
} from './helpers/coffeeRecommendationHelpers'

function recommendCoffee(selectedMoodIDs, temperature) {
  const tempPrefix = getTempPrefix(temperature)
  const totalScoresArray = getTotalScoresArr(selectedMoodIDs)
  const indexesCoffeesWithMaxScores = getCoffeeIDsWithMaxScore(totalScoresArray)
  const recommendedCoffee = tempPrefix + randomlySelectOneCoffeeWithMaxScore(indexesCoffeesWithMaxScores)
  console.log('RESULTING COFFEE :', recommendedCoffee)
  return recommendedCoffee
}
export default recommendCoffee
