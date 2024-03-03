import { Router, Request, Response } from "express"
import { getDemoo } from "controllers/demo.controller"

const router = Router()

const getDemo = (req: Request, res: Response) => {
  res.send("Hello, this is demo!")
}

// router.route("/demo").post(getDemoo)
router.get("/demo", getDemoo)
router.route("/").get(getDemo)

export default router
