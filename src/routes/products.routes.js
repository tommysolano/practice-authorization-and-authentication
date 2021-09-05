import {Router} from "express"
import * as productsCtrl from "../controllers/products.controller"
import { verifyToken } from "../middlewares"
const router = Router()

router.post("/", verifyToken, productsCtrl.createProduct)

router.get("/", productsCtrl.getProducts)

router.get("/:productId", productsCtrl.getProductById)

router.put("/:productId", productsCtrl.updateProductById)

router.delete("/:productId", productsCtrl.deleteProductById)

export default router