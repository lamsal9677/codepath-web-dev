import { pool } from '../config/database.js';

const getCompanies = async (req, res) => {
    try{
        const results = await pool.query('SELECT * FROM companies ORDER BY id ASC');
        res.status(200).json(results.rows);
    }
    catch(err){
        res.status(409).json({error: err.message});
    }
}
export default {
    getCompanies
}