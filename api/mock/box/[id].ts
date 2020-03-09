import { NowRequest, NowResponse } from '@now/node';
import allowCors from '../../../src/allow-cors';

export default (request: NowRequest, response: NowResponse) => {
    allowCors(response);
    const { id } = request.query;
    response.json({
        id,
        title: 'Learn spanish',
    });
};
