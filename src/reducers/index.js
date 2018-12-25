import { combineReducers } from 'redux';

import main from "../pages/main/reducer";

const app = combineReducers({
    main
});

export default app;