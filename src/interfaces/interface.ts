import { Dispatch, SetStateAction } from 'react';

interface State {
    decision: {
        computer?: string;
        user?: string;
    };
    games: {
        computer: number;
        user: number;
        total: number;
    };
    result: {
        label?: string;
        computer: boolean;
        user: boolean;
    };
}

type SetState = Dispatch<SetStateAction<State>>;

export type { SetState, State };