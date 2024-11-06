import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { SaveEffects } from './save/save.effects';
import * as fromList from './save/save.reducer';

export interface InmuebleState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<InmuebleState> = {
  list: fromList.reducer,
};

export const effects: any = [SaveEffects];

export const getInmuebleState =
  createFeatureSelector<InmuebleState>('inmueble');
