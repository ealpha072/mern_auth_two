import logger from "./logger.js";

const requestLogger = (req, res, next) => {
    logger.info("Method: ", req.method)
    logger.info("Path: ", req.path)
    logger.info("Body: ", req.body)
    logger.info('-------------')
    next()
}

const faviconIgnore = (request, response, next) => {
    if(request.originalUrl.includes('/favicon.ico')){
        return response.status(204).end()
    }
    next()
}

const errorHandler = (error, req, res, next) => {
    logger.error(error.code)
    if (error.code === 1100){
        logger.error(error.message)
        return res.status(401).json({ error: 'Email or username already exists' })
    }
}

const unKnownEndpoints = (req, res) => {
    res.status(404).json({error:"Unknown endpoint"})
}

export default {requestLogger, faviconIgnore, unKnownEndpoints, errorHandler}