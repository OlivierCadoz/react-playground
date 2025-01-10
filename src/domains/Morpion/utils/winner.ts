import { lines } from '@morpion/constants/lines';

export function computeWinner(squares: string[]) {
  let winner = '';

  lines.forEach((line) => {
    const [firstIndex] = line;
    const letter = squares[firstIndex];
    const isFullWithSameLetter = line.every(
      (lineIndex) => squares[lineIndex] === letter
    );

    if (letter && isFullWithSameLetter) {
      winner = squares[firstIndex];
    }
  });

  return winner;
}
