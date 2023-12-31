import express from 'express';
const app = express();
import companiesRouter from './routes/companies.js'
import dotenv from 'dotenv'

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {console.log(`🚀 Server listening on http://localhost:${PORT}`)})

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Companies API</h1>')
})
app.use('/companies', companiesRouter)

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))


