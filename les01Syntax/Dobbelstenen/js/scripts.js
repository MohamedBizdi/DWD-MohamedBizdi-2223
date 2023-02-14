// declarations
const players = ['Magnus', 'Eline', 'Ding', 'Judith', 'Praggna'];
const NUM_DICE = 3;
const scores = [];

// show header
console.log(`
DOBBELSTENEN
==============
aantal deelnemers: ${players.length}
`);

// throw dice
for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} gooit ${scores} punten`);
    const dice = [NUM_DICE];
    for (let j = 0; j < NUM_DICE; j++) {
        dice[j] = (Math.ceil(Math.random() * 7));
    }
    scores[i] = getTotal(dice);
    console.log(`${diceToString(dice)} ${scores[i]} punten`);

    // console.log(`${diceToString(dice)}; dit is de juiste manier maar voor nu doe ik zoals hierboven ter controle van de scores.
}

// show winner
console.log('WINNAAR:');
console.log('%c' + getWinner(scores, players), 'color: black; background-color: purple; padding: 25px');


function diceToString(dice) {
    let retval = '';
    for (const d of dice) {
        switch (d) {
            case 1: retval += '⚀ '; break;
            case 2: retval += '⚁ '; break;
            case 3: retval += '⚂ '; break;
            case 4: retval += '⚃ '; break;
            case 5: retval += '⚄ '; break;
            case 6: retval += '⚅ '; break;
            default: break;
        }
    }
    return retval;
}

function getTotal(dice) {
    let total = 0;
    for (const d of dice) {
        total += d;
    }
    return total;
}

function getWinner(totals, names) {
    let winnerIndex = 0;
    let draw = false;
    for (let i = 1; i < totals.length; i++) {
        if (totals[i] == totals[winnerIndex]) draw = true;
        else if (totals[i] > totals[winnerIndex]) {
            winnerIndex = i;
            draw = false;
        }
    }
    return draw ? 'gelijkspel' : names[winnerIndex];
}