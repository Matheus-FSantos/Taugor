import { EmployeeRepository } from "../repository/employee.repository";

export class EmployeeService {

	private getRepository() {
		return new EmployeeRepository();
	}

	public async findAll() {
		return await this.getRepository().findAll();	
	}

}
