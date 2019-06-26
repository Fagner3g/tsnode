import { Request, Response } from 'express'

class UserController {
  public async index (req: Request, res: Response): Promise<string> {
    return 'Hello World'
  }
}

export default new UserController()
