/**
 * Created by wxw on 18-9-26.
 */
import $http from 'flyio';

export const getData: () => Promise<any> = async () => {
    return await $http.get('https://api.myjson.com/bins/f4dms');
};
