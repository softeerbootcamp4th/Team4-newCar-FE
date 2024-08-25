import { QuizWinner, RacingWinner } from 'src/services/api/types/apiType.ts';

export function transformQuizWinnersToExcel(quizWinners: QuizWinner[]): object[] {
	return quizWinners.map((winner) => ({
		이름: winner.name,
		이메일: winner.phoneNumber,
		당첨일: winner.postDate,
	}));
}
export function transformRaceWinnersToExcel(raceWinners: RacingWinner[]): object[] {
	return raceWinners.map((winner) => ({
		등: winner.rank,
		이름: winner.name,
		이메일: winner.phoneNumber,
		공유링크: winner.clickNumber,
		팀: winner.team,
	}));
}
