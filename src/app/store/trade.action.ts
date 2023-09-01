import { createAction, props } from '@ngrx/store';

export const fetchTrades = createAction('[Trade] Fetch Trades');
export const fetchTradesSuccess = createAction('[Trade] Fetch Trades Success', props<{ trades: any[] }>());
export const fetchTradesFailure = createAction('[Trade] Fetch Trades Failure', props<{ error: any }>());

export const fetchTradies = createAction('[Trade] Fetch Tradies');
export const fetchTradiesSuccess = createAction('[Trade] Fetch Tradies Success', props<{ tradies: any[] }>());
export const fetchTradiesFailure = createAction('[Trade] Fetch Tradies Failure', props<{ error: any }>());