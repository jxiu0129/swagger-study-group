import express from 'express';
import carController from '../controllers/car.controller';

const router = express.Router();

router.route('/')
    .get(carController.getCar)
    .post(carController.createCar)

export default router;