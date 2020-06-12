import express from 'express';
import user from './user.route';
import car from './car.route';

const router = express.Router();

// router.use('/v1', user);

router.use('/user', user);

router.use('/car', car);

export default router;