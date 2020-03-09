import { NowRequest, NowResponse } from '@now/node';
import allowCors from '../../src/allow-cors';

export default (request: NowRequest, response: NowResponse): void => {
    allowCors(response);
    response.json([
        {
            id: '123',
            title: 'Learn spanish',
            nbCards: 10,
            cardsLeftToAdd: 5,
            cardsLeftToRehearse: 0,
        },
        {
            id: 'abc',
            title: 'Guitar lesson',
            nbCards: 120,
            cardsLeftToAdd: 0,
            cardsLeftToRehearse: 0,
        },
    ]);
};
