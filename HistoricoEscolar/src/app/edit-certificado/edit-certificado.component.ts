import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-certificado',
  templateUrl: './edit-certificado.component.html',
  styleUrls: ['./edit-certificado.component.scss']
})

export class EditCertificadoComponent implements OnInit {
  editCertificadoForm: certificadoForm = new certificadoForm();

  @ViewChild("certificadoForm")
  certificadoForm!: NgForm;

  isSubmitted: boolean = false;
  certificadoId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.certificadoId = this.route.snapshot.params['certificadoId'];
    this.getCertificadoDetailById();
  }
  getCertificadoDetailById() {
    this.httpProvider.getCertificadoDetailById(this.certificadoId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editCertificadoForm.Id = resultData.id;
          this.editCertificadoForm.FirstName = resultData.firstName;
          this.editCertificadoForm.LastName = resultData.lastName;
          this.editCertificadoForm.Email = resultData.email;
          this.editCertificadoForm.Address = resultData.address;
          this.editCertificadoForm.Phone = resultData.phone;
        }
      }
    },
      (error: any) => { });
  }

  EditCertificado(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveCertificado(this.editCertificadoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class certificadoForm {
  Id: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}