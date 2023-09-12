import { createReducer ,createAction} from '@reduxjs/toolkit';

const defaultState = {
    query: '',
}

export const queryAction = createAction('ADD_QUERY');

export default createReducer(defaultState, {
    [queryAction]: function(state, action) {
        state.query = action.payload
    }
})