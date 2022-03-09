import dotenv from 'dotenv'
import exprss from 'express'
import cors from 'cors'
import connectdb from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'

// exprss
const app=exprss()
// cors policy
app.use(cors())
// env variables
dotenv.config()
//json
app.use(exprss.json())


const port=process.env.PORT 
// DataBase URL
const DATABASE_URL=process.env.DATABASE_URL
// db connect
connectdb(DATABASE_URL)



//load Routes
app.use('/api/user', userRoutes)

app.listen(port, () => {
    console.log(`Server Running on this ${port}!`);
});

