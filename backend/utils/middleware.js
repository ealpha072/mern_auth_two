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

const unKnownEndpoints = (req, res) => {
    res.status(404).json({error:"Unknown endpoint"})
}

export default {requestLogger, faviconIgnore, unKnownEndpoints}