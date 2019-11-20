import { Address } from "./Address";
import { Company } from "../../organization/interfaces/Company";

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}