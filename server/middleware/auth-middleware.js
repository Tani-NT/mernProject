const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill up the input properly!";
        let extraDetails;

        if (err.errors && err.errors.length > 0 && err.errors[0].message) {
            extraDetails = err.errors[0].message;
        } else if (err.message) {
            extraDetails = err.message;
        } else {
            extraDetails = "Unknown error occurred";
        }

        const error = {
            status,
            message,
            extraDetails
        };
        console.log(error);
        next(error);
    }
}

module.exports = validate;
