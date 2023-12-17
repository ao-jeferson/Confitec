import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-certificado',
  templateUrl: './view-certificado.component.html',
  styleUrls: ['./view-certificado.component.scss']
})

export class ViewCertificadoComponent implements OnInit {

  certificadoId: any;
  certificadoDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.certificadoId = this.route.snapshot.params['certificadoId'];      
    this.getCertificadoDetailById();
  }

  getCertificadoDetailById() {       
    this.httpProvider.getCertificadoDetailById(this.certificadoId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.certificadoDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}