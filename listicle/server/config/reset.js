import '../config/dotenv.js'
import { pool } from '../config/database.js';
import companyData from '../data/companies.js';

//create table
    //if table exists, drop table
    //create table
    //should be a async function


async function createCompaniesTable() {
    const createTableQuery = `
        DROP TABLE IF EXISTS companies;

        CREATE TABLE IF NOT EXISTS companies (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            headquarters VARCHAR(255) NOT NULL,
            valuation VARCHAR(255) NOT NULL,
            y_combinator_season VARCHAR(255) NOT NULL)
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 companies table created successfully')
    }
    catch(err){
        console.error('⚠️ error creating companies table', err)
    }
}


//seed table based on the json file
    //should be a async function
    //should call and wait for the createCompanies table to complete building the table
    //should iterate over the companyData array
    //should insert each company into the table
    //should console.log a success message for each company

const seedCompaniesTable = async () => {
    await createCompaniesTable()
    companyData.forEach((company) => {
        const insertQuery = {
            text: 'INSERT INTO companies (name, headquarters, valuation, y_combinator_season) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            company.name,
            company.headquarters,
            company.valuation,
            company.y_combinator_season
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting company', err)
                return
            }
            console.log(`✅ ${company.name} added successfully`)
        })
    })
}

seedCompaniesTable()