const express = require('express');
const { body, check, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
    '/newcomment',
    body('email').isEmail().normalizeEmail(),
    body('text').not().isEmpty().trim().escape(),
    (req, res) => {
        console.log(req.body);
        res.send("done");
    }
);

app.post(
    '/user',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('date-of-birth').isISO8601().toDate(),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        res.send(req.body);
        console.log(req.body);
    }
);

app.post(
    '/comment',
    (req, res, next) => {
        check('email').isEmail().run(req);
        check('password').isLength({ min: 6 }).run(req);
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        next();
    },
    (req, res) => {
        console.log(req.body);
        res.send("done");
    }
);

app.listen(3000);
