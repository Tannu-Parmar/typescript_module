import { Interview } from "./Interview";

export class Applicant {
  id: number;
  name: string;
  email: string;
  phone: string;
  appliedDate: Date;
  status: "applied" | "shortlisted" | "rejected" | "hired";
  interview?: Interview;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    appliedDate: Date,
    status: "applied" | "shortlisted" | "rejected" | "hired",
    interview?: Interview
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.appliedDate = appliedDate;
    this.status = status;
    this.interview = interview;
  }
}
