import { Router } from 'express'
import * as clothesController from './clothes.controller'

const router = Router()

router.post('/clothes', clothesController.createClothing)

router.get('/clothes', clothesController.getClothes)
router.get('/clothes/:id', clothesController.getClothing)

router.put('/clothes/:id', clothesController.updateClothing)

router.delete('/clothes/:id', clothesController.deleteClothing)

export default router