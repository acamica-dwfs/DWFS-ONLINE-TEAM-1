const express = require("express");
const app = express();
const port = 4000

app.use(express.json());

app.post("/api/v1/acamica/profile", (req, res) => {
    return res.status(200).json(req.body);
});


app.post("/api/v1/acamica/login", (req, res) => {
    const { user, pass } = req.body;
    if (user !== process.env.user || pass !== process.env.pass) {
        return res.status(401).json({ message: "Invalid user or password" });
    }
    /*const payload = { user, pass };
    const jwtToken = jwt.sign(payload, config.JwtSecretKey, {
        expiresIn: config.JwtExpiresToken,
    });*/
    return res.status(200).json({ token: jwtToken });
});
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${config.Port}`);
});