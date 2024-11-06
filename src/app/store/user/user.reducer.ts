import { UserResponse } from './user.models';
import * as fromActions from './user.actions';

export interface UserState {
  entity: UserResponse | null;
  email: string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  email: null,
  loading: null,
  error: null,
};

export function reducer(
  state = initialState,
  action: fromActions.All | any
): UserState {
  switch (action.type) {
    case fromActions.Types.INIT: {
      return { ...state, loading: true };
    }
    case fromActions.Types.INIT_AUTHORIZED: {
      return {
        ...state,
        loading: false,
        entity: action.user,
        email: action.email,
        error: null,
      };
    }
    case fromActions.Types.INIT_UNAUTHORIZED: {
      return {
        ...state,
        loading: false,
        entity: null,
        email: null,
        error: null,
      };
    }

    case fromActions.Types.INIT_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        email: null,
        error: action.error,
      };
    }

    case fromActions.Types.SIGN_IN_EMAIL: {
      return {
        ...state,
        loading: true,
        entity: null,
        email: null,
        error: null,
      };
    }

    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        entity: action.user,
        email: action.email,
        error: null,
      };
    }

    case fromActions.Types.SIGN_IN_EMAIL_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        email: null,
        error: action.error,
      };
    }

    case fromActions.Types.SIGN_UP_EMAIL: {
      console.log(state, action);

      return {
        ...state,
        loading: true,
        entity: null,
        email: null,
        error: null,
      };
    }

    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        entity: action.user,
        email: action.email,
        error: null,
      };
    }

    case fromActions.Types.SIGN_UP_EMAIL_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        email: null,
        error: action.error,
      };
    }

    case fromActions.Types.SIGN_OUT_EMAIL: {
      return { ...initialState };
    }

    case fromActions.Types.SIGN_OUT_EMAIL_SUCCESS: {
      return { ...initialState };
    }

    case fromActions.Types.SIGN_OUT_EMAIL_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        email: null,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
