import * as request from '~/utils/request';

export const searchApi = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
};
