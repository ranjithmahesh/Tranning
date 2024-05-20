import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const authHeader = req.header("Authorization");
  console.log(authHeader);
  if (!authHeader)
    return res.status(401).json({ error: "Access denied. No token provided." });

  const token = authHeader.split(" ")[1]; 

  if (!token)
    return res
      .status(401)
      .json({ error: "Access denied. Invalid token format." });

  try {
    const decoded = jwt.verify(token, process.env.secretKey);
    if ((req.userId = decoded.id)) console.log(true);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Invalid token" });
  }
}
