const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res ) => {
  const token = req.headers.authorization ?? null;

  if (!token) return res.send("Authorization token is required");

  try {
    jwt.verify(
      token && token,
      process.env.SECRET_TOKEN || "defaultSecret",
    (err, decoded) => {
        if (err) return res.sendStatus(403); //invalid token

        // res.send(decoded.existingUser);

        res.send(token);
      }
    );

  } catch (error) {
    throw res.send({error});
  }

};