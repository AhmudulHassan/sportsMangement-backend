import express from 'express'
const router = express.Router()

// middleware
// import { requireSignin } from '../middlewares'

// controllers
import { allProduct, deleteDonation, newProduct, searchDonation } from '../controllers/product'

// Routes

router.post('/addProduct', newProduct)
router.get('/products', allProduct)
// router.get('/user-donation',specificDonation)
router.get('/search/:productType',searchDonation)
// router.get('/donation/:donationId', read)
// router.put('/update/:id', updateStatus)
router.delete('/deleteProduct/:id', deleteDonation)

module.exports = router
