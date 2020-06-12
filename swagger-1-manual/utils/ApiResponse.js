
/**
 * 標準統一回傳成功
 * @param {*} res
 * @param {*} statusCode
 * @param {*} user
 * @param {*} objMsg
 * @param {*} functionName
 */
export const responseSuccess = (res, statusCode = 200, user = 'system', objMsg, functionName = 'system') => {
    try {
        res.status(statusCode).json({
            "status": statusCode,
            "message": `${functionName} success`,
            "data" : objMsg
        });
    } catch (error) {
        res.json(error);
    }
};

/**
 * 標準統一回傳錯誤
 * @param {*} res
 * @param {*} errObj
 * @param {*} functionName
 */
export const responseErr = (res, statusCode = 400, user = 'system', errObj, functionName = 'system') => {
    try {
        res.status(statusCode).json({
            "status": statusCode,
            "message": `${functionName} fail`,
            "error" : errObj.message
        });
    } catch (error) {
        res.json(error);
    }
};