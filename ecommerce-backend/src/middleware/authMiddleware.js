// import jwt from 'jsonwebtoken';

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Unauthorized" });

//   try {
//     const decoded = jwt.verify(token.replace("Bearer ", ""), "SECRET_KEY");
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };
