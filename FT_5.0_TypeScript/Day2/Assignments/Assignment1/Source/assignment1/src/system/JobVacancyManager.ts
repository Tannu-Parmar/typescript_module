import { Applicant } from "./Applicant";
import { JobVacancy } from "./JobVacancy";
import { Interview } from "./Interview";

export class JobVacancyManager {
  private vacancies: JobVacancy[] = [];
  private applicants: Applicant[] = [];

  createVacancy(vacancy: JobVacancy): void {
    this.vacancies.push(vacancy);
  }

  getVacancies(): JobVacancy[] {
    return this.vacancies;
  }

  createApplicant(applicant: Applicant): void {
    this.applicants.push(applicant);
  }

  getApplicants(): Applicant[] {
    return this.applicants;
  }

  scheduleInterview(applicantId: number, interview: Interview): void {
    const applicant = this.applicants.find((a) => a.id === applicantId);
    if (applicant) {
      applicant.interview = interview;
    }
  }

  recordInterviewResult(applicantId: number, result: "pass" | "fail"): void {
    const applicant = this.applicants.find((a) => a.id === applicantId);
    if (applicant && applicant.interview) {
      applicant.interview.result = result;
      applicant.status = result === "pass" ? "hired" : "rejected";
    }
  }
}
