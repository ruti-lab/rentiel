import { NowResponse } from '@now/node';

export default (response: NowResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
};
