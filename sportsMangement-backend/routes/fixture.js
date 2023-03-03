import express from 'express'
import { newFixture, specificFixture} from '../controllers/fixture'
const router = express.Router()



router.post('/addFixture', newFixture)
// router.get('/events', allEvent)
router.get('/allfixture', specificFixture)
// router.delete('/deleteEvent/:id', deleteEvent)


module.exports = router
