import express from 'express'
const companiesRouter = express.Router()
import Companies from '../data/companies.js'

companiesRouter.get('/', (req, res) => {
    res.status(200).json(Companies)
})

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
companiesRouter.get('/:id', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname, '../public/company.html'))
})
export default companiesRouter



