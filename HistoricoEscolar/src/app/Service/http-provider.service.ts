import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8100/";

var httpLink = {
  getAllCertificado: apiUrl + "/api/certificado/getAllCertificado",
  deleteCertificadoById: apiUrl + "/api/certificado/deleteCertificadoById",
  getCertificadoDetailById: apiUrl + "/api/certificado/getCertificadoDetailById",
  saveCertificado: apiUrl + "/api/certificado/saveCertificado"
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllCertificado(): Observable<any> {
    return this.webApiService.get(httpLink.getAllCertificado);
  }
  public deleteCertificadoById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteCertificadoById + '?certificadoId=' + model, "");
  }
  public getCertificadoDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getCertificadoDetailById + '?certificadoId=' + model);
  }
  public saveCertificado(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveCertificado, model);
  }  
}      