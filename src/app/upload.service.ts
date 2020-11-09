import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ClassesGroup, CompleteDataModel } from './data-model/data-objects.type';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  endpoint = 'http://localhost:3000/classesGroupList';

  constructor(private httpClient: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('classesGroupList', file, file.name);
    return this.httpClient
      .put(this.endpoint, formData,
        { headers: { type: 'text/json;charset=utf-8' },
          reportProgress: true,
          responseType: 'json'
        });
  }

  put(data: ClassesGroup): Observable<ClassesGroup> {
    console.log('[DEBUG] update', JSON.stringify(data.id));
    return this.httpClient.put<ClassesGroup>(this.endpoint + `/${data.id}`, data,
            {
              headers: { type: 'text/json;charset=utf-8' },
              reportProgress: true,
              responseType: 'json'
            });
  }

  delete(data: ClassesGroup): Observable<ClassesGroup> {
    return this.httpClient.delete<ClassesGroup>(this.endpoint + `/${data.id}`,
            {
              headers: { type: 'text/json;charset=utf-8' },
              reportProgress: true,
              responseType: 'json'
            });
  }

  post(data: ClassesGroup): Observable<ClassesGroup> {
    console.log('Create new data', data);
    return this.httpClient
        .post<ClassesGroup>(this.endpoint, data,
          {
            headers: { type: 'text/json;charset=utf-8' },
            reportProgress: true,
            responseType: 'json'
          });
  }

  get(): Observable<ClassesGroup[]> {
    console.log('Retrieving data from server');
    return this.httpClient
      .get<ClassesGroup[]>(this.endpoint,
        { headers: { type: 'text/json;charset=utf-8' },
          reportProgress: true,
          responseType: 'json'
        });
  }

  private putErrorHandler(error: HttpErrorResponse, data: ClassesGroup): any {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    this.post(data);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
