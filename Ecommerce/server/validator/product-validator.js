const { z } = require('zod');

//creating an object schema
const productSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(1, { message: "Name must not be empty" }),
    description: z
        .string({ required_error: "Description is required" })
        .trim(),
    price: z
        .number({ required_error: "Price is required" }),
    rating: z
        .number({ required_error: "" }),
    image: z
        .any(),
    category: z
        .string({ required_error: "Category is required" })
        .trim(),
    stock: z
        .string({ required_error: "Stock is required" })
        .trim(),
    numOfReviews: z
        .number({ required_error: "" }),
    reviews: z
        .array(z.object(
            {
                name: z.string({ required_error: "Review name is required" }).trim(),
                ratings: z.number({ required_error: "Review ratings is required" }),
                comments: z.string({ required_error: "Review comment is required" }).trim()
            }
        )),
})

module.exports = { productSchema }