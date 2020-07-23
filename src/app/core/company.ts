import { FiAccount } from './fiAccount';


export class Company {

  id : number;
  name : String;
  country : String;
  Structure_grade : number;
  cash_grade : number;
  result_grade : number;
  overall_grade : number;
  accounts : FiAccount[];
}
