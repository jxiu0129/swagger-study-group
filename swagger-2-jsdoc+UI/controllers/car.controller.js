import { responseSuccess, responseErr } from '../utils';

/**
 * @swagger
 * definition:
 *      Car:
 *          properties:              
 *              id: 
 *                  type: integer
 *              name: 
 *                  type: string
 *              car_ssid: 
 *                  type: string
 */


/**
 * @param {*} req 
 * @param {*} res 
 * 
 * @swagger
 * /api/car:
 *      get:
 *          tags: 
 *              - Car
 *          description: Return car
 *          produces: 
 *              - application/json
 *          responses: 
 *              200: 
 *                  description: A car
 *                  schema: 
 *                      $ref: '#/definitions/Car'
 *      post:
 *          tags:
 *              - Car
 *          description: insert car in db
 *          produces:
 *              - application/json
 *          responses:
 *              200: 
 *                  description: A car
 *                  schema:
 *                      $ref: '#/definitions/Car'
 */

const getCar = (req, res) => {
    try{
        // 一些透過 logic 或 dao 處理過後的 db 資料，這裡以 data 代替
        const data = {
            "id": 1,
            "brand": "Toyota",
            "car_ssid": "123-dv"
        };
        responseSuccess(res, 200, 'jxiu', data, 'getCar');

    } catch (err) {
        responseErr(res, 500, null, err, 'getCar');
    }
}

const createCar = async (req, res, next) => {
    try{
        const { car } = req.body;
        
        if(car === undefined){
            throw new Error('Missing car input');
        }

        const insertUser = (user) => {
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                    resolve({
                        "id": Math.floor(Math.random() * 100),
                        "brand": car,
                        "car_ssid": "666-G8"
                    }
                    , 2000)
                });
            });
        };

        const data = await insertUser(user);

        responseSuccess(res, 200, 'jxiu', data, 'createCar');

    } catch (err) {
        responseErr(res, 500, null, err, 'createCar');
    }
}

export default {
    getCar,
    createCar
}