import express from 'express'
const router = express.Router()

// middleware
// import { requireSignin } from '../middlewares'

// controllers
import {
 newNotice,
 allNotice,
 deleteNotice
} from '../controllers/notice'

// Routes


router.post('/notice',newNotice)
router.get('/allNotice', allNotice)
// router.get('/user-donation',specificDonation)
// router.get('/search',searchDonation)
// router.get('/donation/:donationId', read)
// router.put('/update/:id', updateStatus)
router.delete('/deleteNotice/:id', deleteNotice)





module.exports = router