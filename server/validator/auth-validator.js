const {z} = require("zod");

const signupSchema = z.object({
    username: z
        .string({required_error: "Name is required!"})
        .trim()
        .min(3,{msg: "Name must be of letter 3"})
        .max(255,{msg: "Name must not be more than 255 letter"}),
    email: z
        .string({required_error: "Email is required!"})
        .trim()
        .email({msg: "Invalid Email Address"})
        .min(3,{msg: "Email must be of letter 3"})
        .max(255,{msg: "Email must not be more than 255 letter"}),
    phone: z
        .string({required_error: "Phone is required!"})
        .trim()
        .min(10,{msg: "Phone number must be equal to 10 number"})
        .max(20,{msg: "Phone number must not be more than 20 number"}),
    password: z
        .string({required_error: "Password is required!"})
        .trim()
        .min(7,{msg: "Password must be of letter 6"})
        .max(30,{msg: "Password must not be more than 30 letter"}),

})

const loginSchema = z.object({
    email: z
        .string({required_error: "Email is required!"})
        .trim()
        .email({msg: "Invalid Email Address"})
        .min(3,{msg: "Email must be of letter 3"})
        .max(255,{msg: "Email must not be more than 255 letter"}),
    password: z
        .string({required_error: "Password is required!"})
        .trim()
        .min(7,{msg: "Password must be of letter 6"})
        .max(30,{msg: "Password must not be more than 30 letter"}),
})

module.exports = {signupSchema, loginSchema};