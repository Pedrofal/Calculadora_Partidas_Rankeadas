function calculateLevel(wins, losses) {
    let winBalance = wins - losses;
    let level;
  
    if (wins < 10) {
      level = "Iron";
    } else if (wins >= 11 && wins <= 20) {
      level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
      level = "Silver";
    } else if (wins >= 51 && wins <= 80) {
      level = "Gold";
    } else if (wins >= 81 && wins <= 90) {
      level = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
      level = "Legendary";
    } else if (wins >= 101) {
      level = "Immortal";
    } else {
      level = "Undefined Level";
    }
  
    return `The hero has a balance of ${winBalance} and is at the level of ${level}`;
  }
  
  
  const result = calculateLevel(20, 5);
  console.log(result);
  