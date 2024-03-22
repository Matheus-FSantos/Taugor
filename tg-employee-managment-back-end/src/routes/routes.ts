import { Request, Response, Router } from "express";
import { EmployeeController } from "../controller/employee.controller";

const router = Router();
const employeeController = new EmployeeController();

router.get("/api/employee", (request: Request, response: Response) => employeeController.findAll(request, response));

export { router };
