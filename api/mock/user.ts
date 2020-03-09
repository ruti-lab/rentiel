import { NowRequest, NowResponse } from '@now/node';
import md5 from 'md5';
import allowCors from '../../src/allow-cors';

export default (request: NowRequest, response: NowResponse): void => {
    allowCors(response);
    response.json({
        name: 'John Doe',
        hash: md5('guillaume.martigny@gmail.com'),
    });
};
