function matchesPlayed(wins, losses){
    let score = wins - losses
    return score
}

let winningScore = matchesPlayed(192,4);

let level = "";

switch (true) {
    case (winningScore <= 10):
        level = "Ferro";
        break;
    case (winningScore <= 11 && winningScore >= 20):
        level = "Bronze";
        break;
    case (winningScore <= 21 && winningScore >= 50):
        level = "Prata";
        break;
    case (winningScore <= 51 && winningScore >= 80):
        level = "Ouro";
        break;
    case (winningScore <= 81 && winningScore >= 90):
        level = "Diamante";
        break;
    case (winningScore <= 91 && winningScore >= 100):
        level = "Lendário";
        break;
    case (winningScore >= 101):
        level = "Imortal";
        break;       
}


console.log("O herói tem saldo de " + winningScore + " vitórias " + "e está no nível de " + level)