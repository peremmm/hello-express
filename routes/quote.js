import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.quotes));
});

router.get('/:quoteId', (req, res) => {
    return res.send(req.context.models.quotes[req.params.quoteId]);
});

router.post('/', (req, res) => {
    const id = req.body.id;
    const quote = {
        id,
        quote: req.body.quote,
        author: req.body.author,
        year: req.body.year
    };

    req.context.models.quotes[id] = quote;

    return res.send(quote);
});

export default router;