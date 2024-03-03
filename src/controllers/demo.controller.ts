import { Request, Response } from "express"

const getDemoo = (req: Request, res: Response) => {
  res.send("Hello, this is demo!")
}

export { getDemoo }
