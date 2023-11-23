# Ranked Matches Calculator

This JavaScript function calculates a player's level based on their wins and losses in ranked matches.

## Objective

Create a function that receives the number of wins and losses of a player as parameters. The function should then return the result to a variable. The ranked matches balance should be calculated by subtracting losses from wins.

If the number of wins is less than 10 = Iron
If the number of wins is between 11 and 20 = Bronze
If the number of wins is between 21 and 50 = Silver
If the number of wins is between 51 and 80 = Gold
If the number of wins is between 81 and 90 = Diamond
If the number of wins is between 91 and 100 = Legendary
If the number of wins is greater than or equal to 101 = Immortal

## Output

The function returns a message:
"The hero has a balance of **{winBalance}** and is at the level of **{level}**"

## Usage

The `calculateLevel` function can be used as follows:

```javascript
const result = calculateLevel(20, 5);
console.log(result);
