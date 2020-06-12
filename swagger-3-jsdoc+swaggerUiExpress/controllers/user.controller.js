import { responseSuccess, responseErr } from '../utils';



/**
 * @swagger
 * definition:
 *      User:
 *          properties:              
 *              id: 
 *                  type: integer
 *              name: 
 *                  type: string
 */


/**
 * @param {*} req 
 * @param {*} res 
 * 
 * @swagger
 * /api/user:
 *      get:
 *          tags: 
 *              - User
 *          description: Return user
 *          produces: 
 *              - application/json
 *          responses: 
 *              200: 
 *                  description: A user
 *                  schema: 
 *                      $ref: '#/definitions/User'
 *      post:
 *          tags:
 *              - User
 *          description: insert user in db
 *          produces:
 *              - application/json
 *          responses:
 *              200: 
 *                  description: A user
 *                  schema:
 *                      $ref: '#/definitions/User'
 */
const getUser = (req, res) => {
    try{
        // 一些透過 logic 或 dao 處理過後的 db 資料，這裡以 data 代替
        const data = {
            "id": 1,
            "name": "John"
        };
        responseSuccess(res, 200, 'jxiu', data, 'getUser');

    } catch (err) {
        responseErr(res, 500, null, err, 'getUser');
    }
}

const createUser = async (req, res, next) => {
    try{
        const { user } = req.body;
        
        if(user === undefined){
            throw new Error('Missing user input');
        }

        const insertUser = (user) => {
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                    resolve({
                        "id": Math.floor(Math.random() * 100),
                        "name": user
                    }
                    , 2000)
                });
            });
        };

        const data = await insertUser(user);

        responseSuccess(res, 200, 'jxiu', data, 'createUser');

    } catch (err) {
        responseErr(res, 500, null, err, 'createUser');
    }
}

export default {
    getUser,
    createUser
}