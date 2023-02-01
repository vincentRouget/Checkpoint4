const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
};

const hashPassword = (req, res, next) => {
    if (req.body.password) {
        argon2
            .hash(req.body.password, hashingOptions)
            .then((hashedPassword) => {
                req.body.password = hashedPassword;
                next();
            })
            .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        next();
    };
};

const verifyPassword = (req, res) => {
    argon2
        .verify(req.user.password, req.body.password)
        .then((isVerified) => {
            if (isVerified) {
                const payload = { sub: req.user };
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "6h",
                });
                res.send({ token, user: req.user });
            } else {
                res.sendStatus(401).send("Verify failed");
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};

const verifyToken = (req, res, next) => {
    try {
        const authorizationHeader = req.get("Authorization");
        console.log(authorizationHeader)
        if (authorizationHeader == null) throw new Error("Authorization header is missing");
        const [type, token] = authorizationHeader.split(" ");
        if (type !== "Bearer")
            throw new Error("Authorization header has not the 'Bearer' type");
        req.payload = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        console.error(err);
        res.sendStatus(401);
    };
};

const userPermissionsById = (req, res, next) => {
    try {
        if (req.body.id === req.payload.sub) {
            next();
        } else {
            return res.sendStatus(403).send("Forbidden");
        };
    } catch (err) {
        console.error(err);
        res.sendStatus(401);
    };
};

module.exports = {
    hashPassword,
    verifyPassword,
    verifyToken,
    userPermissionsById,
};