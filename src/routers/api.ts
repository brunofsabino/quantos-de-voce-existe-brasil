import { Router } from 'express'
import * as quantosDeVcExiste from '../controllers/searchController'

const routerApi = Router()

routerApi.get('/quantos-de-vc-existe-brasil', quantosDeVcExiste.homeApi )

export default routerApi