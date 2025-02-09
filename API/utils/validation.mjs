import { body, param } from "express-validator";

export const CreateUserValidation = () => {
  return [
    body("username")
      .isLength({ min: 5, max: 32 })
      .withMessage(
        "UserName must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("UserName cannot be empty")
      .isString()
      .withMessage("UserName must be a string"),

    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .notEmpty()
      .withMessage("Email cannot be empty"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/\d/)
      .withMessage("Password must contain at least one number")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("Password must contain at least one special character")
      .notEmpty()
      .withMessage("Password cannot be empty"),
  ];
};
export const LoginUserValidation = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .notEmpty()
      .withMessage("Email cannot be empty"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/\d/)
      .withMessage("Password must contain at least one number")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("Password must contain at least one special character")
      .notEmpty()
      .withMessage("Password cannot be empty"),
  ];
};

export const updateUseUserValidation = () => {
  return [
    param("id")
      .notEmpty()
      .withMessage("id cannot be empty")
      .isString()
      .withMessage("id must be a string"),

    body("username")
      .isLength({ min: 5, max: 32 })
      .withMessage(
        "UserName must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("UserName cannot be empty")
      .isString()
      .withMessage("UserName must be a string"),

    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .notEmpty()
      .withMessage("Email cannot be empty"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/\d/)
      .withMessage("Password must contain at least one number")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("Password must contain at least one special character")
      .notEmpty()
      .withMessage("Password cannot be empty"),
  ];
};

export const CreateEventValidation = () => {
  return [
    param("organizerId")
      .notEmpty()
      .withMessage("id cannot be empty")
      .isString()
      .withMessage("id must be a string"),

    body("title")
      .isLength({ min: 5 })
      .withMessage(
        "title must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("title cannot be empty")
      .isString()
      .withMessage("title must be a string"),

    body("description")
      .isLength({ min: 5 })
      .withMessage(
        "description must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("description cannot be empty")
      .isString()
      .withMessage("description must be a string"),

    body("startDate")
      .notEmpty()
      .withMessage("startDate cannot be empty")
      .isDate()
      .withMessage("startDate must be a Date"),

    body("endDate")
      .notEmpty()
      .withMessage("endDate cannot be empty")
      .isDate()
      .withMessage("endDate must be a Date"),

    body("location")
      .isLength({ min: 5 })
      .withMessage(
        "location must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("location cannot be empty")
      .isString()
      .withMessage("location must be a string"),
  ];
};
export const updateEventValidation = () => {
  return [
    param("organizerId")
      .notEmpty()
      .withMessage("id cannot be empty")
      .isString()
      .withMessage("id must be a string"),

    body("title")
      .isLength({ min: 5 })
      .withMessage(
        "title must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("title cannot be empty")
      .isString()
      .withMessage("title must be a string"),

    body("description")
      .isLength({ min: 5 })
      .withMessage(
        "description must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("description cannot be empty")
      .isString()
      .withMessage("description must be a string"),

    body("startDate")
      .notEmpty()
      .withMessage("startDate cannot be empty")
      .isDate()
      .withMessage("startDate must be a Date"),

    body("endDate")
      .notEmpty()
      .withMessage("endDate cannot be empty")
      .isDate()
      .withMessage("endDate must be a Date"),

    body("location")
      .isLength({ min: 5 })
      .withMessage(
        "location must be at least 5 characters and a maximum of 32 characters"
      )
      .notEmpty()
      .withMessage("location cannot be empty")
      .isString()
      .withMessage("location must be a string"),
  ];
};
export const createInterestValidation = () => {
  return [
    param("eventId")
      .notEmpty()
      .withMessage("eventId cannot be empty")
      .isString()
      .withMessage("eventId must be a string"),

    body("userId")
      .notEmpty()
      .withMessage("userId cannot be empty")
      .isString()
      .withMessage("userId  must be a string"),
  ];
};
