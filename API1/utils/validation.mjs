import { body, param } from "express-validator";

export const CreateUserValidation = () => {
  return [
    // body("username")
    //   .isEmpty()
    //   .withMessage("username can't be empty")
    //   .isLength({ min: 5 })
    //   .withMessage(
    //     "username must be at least 5 characters and a maximum of 32 characters"
    //   )
    //   .isString()
    //   .withMessage("username must be a string"),

    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .notEmpty()
      .withMessage("Email cannot be empty"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      //   .matches(/\d/) // Uncommented line
      //   .withMessage("Password must contain at least one number")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      //   .matches(/[@#$%^&*(),.?":{}|<>]/)
      //   .withMessage("Password must contain at least one special character")
      .notEmpty()
      .withMessage("Password cannot be empty"),

    // body("bio")
    //   .isEmpty()
    //   .withMessage("bio can't be empty")
    //   .isLength({ min: 5 }) // Corrected typo here
    //   .withMessage(
    //     "bio must be at least 5 characters and a maximum of 32 characters"
    //   )
    //   .isString()
    //   .withMessage("bio must be a string"),

    // body("profilePicture")
    //   .isEmpty()
    //   .withMessage("profilePicture can't be empty")
    //   .isString()
    //   .withMessage("profilePicture must be a string"),

    body("role").isString().withMessage("role must be a string"),
  ];
};
export const UpdateUserValidation = () => {
  return [
    // param("id")
    //   .isEmpty()
    //   .withMessage("id can't be empty")
    //   .isString()
    //   .withMessage("id must be a string"),

    // body("bio")
    //   .isEmpty()
    //   .withMessage("bio can't be empty")
    //   .isLength({ min: 5 }) // Corrected typo here
    //   .withMessage(
    //     "bio must be at least 5 characters and a maximum of 32 characters"
    //   )
    //   .isString()
    //   .withMessage("bio must be a string"),

    // // body("profilePicture")
    //   .isEmpty()
    //   .withMessage("profilePicture can't be empty")
    //   .isString()
    //   .withMessage("profilePicture must be a string"),

    body("role").isString().withMessage("role must be a string"),
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
      //   .matches(/\d/) // Uncommented line
      //   .withMessage("Password must contain at least one number")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      //   .matches(/[@#$%^&*(),.?":{}|<>]/)
      //   .withMessage("Password must contain at least one special character")
      .notEmpty()
      .withMessage("Password cannot be empty"),
  ];
};
