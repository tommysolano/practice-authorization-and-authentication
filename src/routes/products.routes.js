import {Router} from "express"
import * as productsCtrl from "../controllers/products.controller"
const router = Router()

router.post("/", productsCtrl.createProduct)

router.get("/", productsCtrl.getProducts)

router.get("/:productId", productsCtrl.getProductById)

router.get("/:productId", productsCtrl.updateProductById)

router.get("/:productId", productsCtrl.deleteProductById)

export default router