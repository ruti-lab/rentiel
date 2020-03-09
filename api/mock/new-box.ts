import { NowRequest, NowResponse } from '@now/node';
import allowCors from '../../src/allow-cors';

export default (request: NowRequest, response: NowResponse) => {
    allowCors(response);
    response.json({
        id: '666',
    });
};
