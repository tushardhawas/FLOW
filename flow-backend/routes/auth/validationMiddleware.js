import { z } from "zod";

const zValidator = (schema) => {
  return (req, res, next) => {
    console.log("inside Middleware");
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  };
};

export default zValidator;
