/**
 * Created by wxw on 18-9-26.
 */

import {ActionTree} from 'vuex';
import {ADD_COUNT} from './types';

const actions: ActionTree<any, any> = {
    addCount({ commit }, val: number) {
        commit(ADD_COUNT, val);
    },
};

export default actions;
