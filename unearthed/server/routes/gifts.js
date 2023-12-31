import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import GiftsController from '../controllers/gifts.js'

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })

export default router
