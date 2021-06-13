
export const IS_PROD = process.env.NODE_ENV === "production";
export const PORT = process.env.PORT;

export const DATABASE_URI = `mongodb+srv://${process.env.NAME}:${process.env.DB_PASS}@cluster0.zrqly.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`