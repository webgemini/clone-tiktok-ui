import axios from 'axios';

import { fakeApi } from '~/components/Contains';

const instance = axios.create({
    baseURL: fakeApi,
});

export const get = async (path, options) => {
    const response = await instance.get(path, options);
    return response.data;
};
