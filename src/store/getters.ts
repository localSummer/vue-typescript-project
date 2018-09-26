/**
 * Created by wxw on 18-9-26.
 */

import {GetterTree} from 'vuex';

const getters: GetterTree<any, any> = {
    getCount(state): number {
        return state.count;
    },
};

export default getters;

