import { NowRequest, NowResponse } from '@now/node';

export default (request: NowRequest, response: NowResponse) => {
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
