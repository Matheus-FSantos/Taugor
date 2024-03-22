import { Request, Response } from "express";
import { EmployeeService } from "../service/employee.service";

export class EmployeeController {
	
	private getService() {
		return new EmployeeService();
	}

	findAll(request: Request, response: Response) {
		const data = this.getService().findAll();
		return response.json(data).status(200);
	}

}
