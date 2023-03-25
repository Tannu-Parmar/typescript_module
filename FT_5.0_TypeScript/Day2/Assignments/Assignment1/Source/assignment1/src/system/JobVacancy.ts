export class JobVacancy {
  title: string;
  description: string;
  location: string;
  salary: number;
  datePosted: Date;

  constructor(title: string, description: string, location: string, salary: number, datePosted: Date) {
    this.title = title;
    this.description = description;
    this.location = location;
    this.salary = salary;
    this.datePosted = datePosted;
  }
}
