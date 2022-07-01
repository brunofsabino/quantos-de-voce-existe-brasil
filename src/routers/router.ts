import { Router, Request, Response} from 'express'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/', SearchController.index)
router.post('/home', SearchController.home)


export default router