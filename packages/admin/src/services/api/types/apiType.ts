/* eslint-disable no-mixed-spaces-and-tabs */
import { API, METHOD } from 'src/constants/api.ts';

export interface CommonEvent {
    endTime: string;
    managerName: string;
    eventName: string;
    startTime: string;
}

export interface QuizChoice {
    num: number;
    text: string;
}

export interface Quiz {
    id: number;
    winnerCount: number;
    postDate?: string | never;
    question: string;
    choices: QuizChoice[];
    correctAnswer: number;
}

export interface RacingWinner {
    rank: number;
    name: string;
    phoneNumber: string;
    clickNumber: number;
    team: string;
}

export interface PersonalityScore {
    type: string;
    value: number;
}
export interface PersonalityChoice {
    text: string;
    scores: PersonalityScore[];
}
export interface PersonalityTest {
    id: number;
    question: string;
    choices: PersonalityChoice[];
}

export interface WinnerSetting {
    rank: number;
    num: number;
}

export interface LoginProps {
    adminId: string;
    password: string;
}

export interface Payload {
    [API.COMMON_EVENT]: {
        [METHOD.GET]: Record<string, never>;
        [METHOD.POST]: CommonEvent;
    };
    [API.QUIZ_LIST]: {
        [METHOD.GET]: Record<string, never>;
    };
    [API.QUIZ]: {
        [METHOD.POST]: Quiz;
    };
    [API.RACING_WINNERS]: {
        [METHOD.GET]: Record<string, never>;
        [METHOD.POST]: WinnerSetting[];
    };
    [API.PERSONALITY_TEST_LIST]: {
        [METHOD.GET]: Record<string, never>;
    };
    [API.PERSONALITY_TEST]: {
        [METHOD.POST]: PersonalityTest;
    };
    [API.LOGIN]: {
        [METHOD.POST]: LoginProps;
    };
}

export interface Response {
    [API.COMMON_EVENT]: {
        [METHOD.GET]: CommonEvent;
        [METHOD.POST]: Record<string, never>;
    };
    [API.QUIZ_LIST]: {
        [METHOD.GET]: Quiz[];
    };
    [API.QUIZ]: {
        [METHOD.POST]: Quiz;
    };
    [API.RACING_WINNERS]: {
        [METHOD.GET]: RacingWinner[];
        [METHOD.POST]: string;
    };
    [API.PERSONALITY_TEST_LIST]: {
        [METHOD.GET]: PersonalityTest[];
    };
    [API.PERSONALITY_TEST]: {
        [METHOD.POST]: PersonalityTest;
    };
    [API.LOGIN]: {
        [METHOD.POST]: {
            accessToken: string;
        };
    };
}

export type FetchDataRequestOptions<K extends keyof Payload, T extends keyof Payload[K]> = {
    path: K;
    payload?: Payload[K][T];
    method: T; // T가 'GET', 'POST', 'PUT', 'DELETE' 중 하나로 제한됩니다.
    headers?: HeadersInit;
};
