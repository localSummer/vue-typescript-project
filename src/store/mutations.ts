/**
 * Created by wxw on 18-9-26.
 */

import {ADD_COUNT} from './types';
import {MutationTree} from 'vuex';

const mutations: MutationTree<any> = {
    [ADD_COUNT](state, count: number): void {
        state.count = count;
    },
};

export default mutations;
