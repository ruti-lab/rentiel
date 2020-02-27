import { NowRequest, NowResponse } from '@now/node';
import allowCors from '../../src/allow-cors';

export default (request: NowRequest, response: NowResponse) => {
    allowCors(response);
    response.json([
        {
            title: 'Learn spanish',
            nbCards: 10,
            cardsLeftToAdd: 5,
            cardsLeftToRehearse: 0,
        },
        {
            title: 'Guitar lesson',
            nbCards: 120,
            cardsLeftToAdd: 0,
            cardsLeftToRehearse: 0,
        },
    ]);
};
