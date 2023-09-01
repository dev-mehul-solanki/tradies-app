import { createReducer, on } from '@ngrx/store';
import * as TradeActions from './trade.action';

export interface TradeState {
    trades: any[];
    loading: boolean;
    error: any;
}

const initialState: TradeState = {
    trades: [],
    loading: false,
    error: null,
};

export interface TradiesState {
    tradies: any[];
    loading: boolean;
    error: any;
}

const initialTradiesState: TradiesState = {
    tradies: [],
    loading: false,
    error: null,
};

export const tradeReducer = createReducer(
    initialState,
    on(TradeActions.fetchTrades, state => ({ ...state, loading: true, error: null })),
    on(TradeActions.fetchTradesSuccess, (state, { trades }) => ({ ...state, trades, loading: false })),
    on(TradeActions.fetchTradesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

export const tradiesReducer = createReducer(
    initialState,
    on(TradeActions.fetchTradies, state => ({ ...state, loading: true, error: null })),
    on(TradeActions.fetchTradiesSuccess, (state, { tradies }) => ({ ...state, tradies, loading: false })),
    on(TradeActions.fetchTradiesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);