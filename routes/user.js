import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  res.send(Object.values(req.context.models.userId));
});

export default router;
