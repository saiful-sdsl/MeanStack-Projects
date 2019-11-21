import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
// we know that http response will be in JSON format.

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class StudentService {
  private geturl = "http://localhost:8000/students";
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data.
  getStudents() {
    return this.http.get(this.geturl);
  }

  addStudent(id: string, firstName: string, lastName: string) {
    this.http
      .post(this.geturl, { id, firstName, lastName })
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  updateStudent(id: string, firstName: string, lastName: string) {
    /* this.http
      .post(this.geturl, { id, firstName, lastName })
      .subscribe(responseData => {
        console.log(responseData);
      }); */
  }

  deleteStudent(studentId: string) {
    this.http.delete(this.geturl + "/" + studentId).subscribe(() => {
      console.log("Deleted: " + studentId);
      setTimeout(function(){
        location.reload();
      }, 200);
    });
    //location.reload();
  }
}
