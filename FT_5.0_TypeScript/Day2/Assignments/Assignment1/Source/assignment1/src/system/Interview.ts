export class Interview {
  date: Date;
  location: string;
  interviewer: string;
  result?: "pass" | "fail";

  constructor(date: Date, location: string, interviewer: string, result?: "pass" | "fail") {
    this.date = date;
    this.location = location;
    this.interviewer = interviewer;
    this.result = result;
  }
}
