import * as httpRequest from '~/utils/httpRequest';

export const searchApi = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (err) {
        console.error('SOCKET_RESPONSE_ERROR');
        return false;
    }
};
