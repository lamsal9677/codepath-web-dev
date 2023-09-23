import express from 'express'
const companiesRouter = express.Router()
import CompaniesConroller from '../controller/companies.js'


companiesRouter.get('/', CompaniesConroller.getCompanies)

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
companiesRouter.get('/:id', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname, '../public/company.html'))
})
export default companiesRouter



