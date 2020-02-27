import { NowRequest, NowResponse } from '@now/node';
import md5 from 'md5';
import allowCors from '../../src/allow-cors';

export default (request: NowRequest, response: NowResponse) => {
    allowCors(response);
    response.json({
        name: 'John Doe',
        handle: md5('guillaume.martigny@gmail.com'),
    });
};
