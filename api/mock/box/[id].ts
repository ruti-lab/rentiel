import { NowRequest, NowResponse } from '@now/node';
import allowCors from '../../../src/allow-cors';

export default (request: NowRequest, response: NowResponse): void => {
    allowCors(response);
    const { id } = request.query;
    response.json({
        id,
        title: 'Learn spanish',
        cards: [
            {
                question: 'Como te llama',
                answer: 'What\'s your name',
            },
            {
                question: 'el nino',
                answer: 'the boy',
            },
            {
                question: 'habla espanol',
                answer: 'I speak spanish',
            },
        ],
    });
};
