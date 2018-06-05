import { Docs_societa_model } from './../../model/docs_societa_model';
import { Docs_iva_Model } from './../../model/docs_iva_model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup , FormBuilder , Validators, FormArray,FormArrayName} from "@angular/forms";
import { HttpEventType } from '@angular/common/http';

import { OK } from './../../model/httpStatusModel';
import { SupplierTemp } from "./../../model/tempSupplier-model";
import { ServiceCreateSupplierService } from "./../../services/create-suplier/_service-create-supplier.service";
import { FornitoretempModel } from '../../model/fornitore-temp.model';
import { ServiceUploadFilesService } from '../../services/upload-files/-service-upload-files.service';
@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css'],
  providers: [ServiceCreateSupplierService, ServiceUploadFilesService]
})
export class CreateSupplierComponent implements OnInit {
  
  protected supplierTempModel :SupplierTemp = new SupplierTemp();
  protected docs_ivaModel : Docs_iva_Model = new Docs_iva_Model();
  protected docs_societa_model : Docs_societa_model = new Docs_societa_model();
  //tipofornitore lista for the select control element
  protected ListatipoFornitore : string[] =["PARTITA IVA", "SOCIETA"];  
  protected supplierForm: FormGroup;
  protected partitaIvaDocs:FormGroup;
  protected societaDocs:FormGroup;  
  formSubmitted = false;     
  ngOnInit() {
    this.createSupplierTempForm();
    //this.ListatipoFornitore =  ['Partita IVA', 'Società'];
    //this.supplierForm.controls['societaDocs'].disable();
    //console.log(this.supplierForm.value); 
  }  
  constructor( private formBuilder: FormBuilder ,
   private createSupplierService: ServiceCreateSupplierService,
   private router:Router, 
   private upload: ServiceUploadFilesService) 
  {}

  createSupplierTempForm()
  {
    this.supplierForm = this.formBuilder.group
    ({
      r_D_Sociale: [this.supplierTempModel.r_D_Sociale, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      sede_Legale: [this.supplierTempModel.sede_Legale , [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],	
      sede_Operativa: [this.supplierTempModel.sede_Operativa , [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      telefono: [this.supplierTempModel.telefono , [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      fax: [this.supplierTempModel.fax , [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      e_mail: [this.supplierTempModel.e_mail , [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      data_inizio: [this.supplierTempModel.data_inizio , [Validators.required]],
      cod_fisc: [this.supplierTempModel.cod_fisc , [Validators.required]],
      p_iva: [this.supplierTempModel.p_iva , [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],          
      tipoFornitore: [this.supplierTempModel.tipoFornitore, [Validators.required]],      
      docs: [this.supplierTempModel.DOCS, [Validators.required]],      
    });
    this.partitaIvaDocs = this.formBuilder.group({
      questionario:[this.docs_ivaModel.questionario,[Validators.required]],
            docIdentità:[this.docs_ivaModel.docIdentità,[Validators.required]],
            curriculum: [this.docs_ivaModel.curriculum,[Validators.required]],
            foto: [this.docs_ivaModel.foto,[Validators.required]],
            visuraCamerale: [this.docs_ivaModel.visuraCamerale,[Validators.required]]
     });
    this. societaDocs= this.formBuilder.group
             ({
                questionario:[ this.docs_societa_model.questionario,[Validators.required]],
                visuraCamerale:[ this.docs_societa_model.visuraCamerale,[Validators.required]],
                iso9001:[ this.docs_societa_model.iso9001,[Validators.required]],
                polizzaRctRco:[ this.docs_societa_model.polizzaRctRco,[Validators.required]],
                durc:[ this.docs_societa_model.durc,[Validators.required]],
                bilancio: [this.docs_societa_model.bilancio,[Validators.required]]
            }); 
      
  }
  get docs()
  {
    return this.supplierForm.get(['docs']);
  }

  ritorna()
  {
    return this.supplierForm.get(['docs']).value;
  }

   get tipoFornitore() {
    return this.supplierForm.get('tipoFornitore');
  }
  get ragSoc() {
    return this.supplierForm.get('ragioneSociale');
  }

   //DOCS:this.formBuilder.array([])
    get tipoDOCSupplierFORM()
    {
      return this.supplierForm.get('docs') as FormArray;
    }

    addDOCUMENTbyTipo(event)
    {
       
       
      if(event === "PARTITA IVA")
              {
                this.supplierForm.patchValue({"docs": this.partitaIvaDocs});
                console.log("IVA");
                console.log(this.supplierForm.value);
                console.log(this.ritorna());
              }
              if(event === "SOCIETA")
              {
                this.supplierForm.patchValue({"docs": this.societaDocs});
                console.log("SOC");
                //console.log(this.supplierForm.value);
                console.log(this.ritorna());
                //console.log(this.supplierForm.controls['docs'].value);   
              }
              /* let data = JSON.stringify(this.supplierForm.value);
              console.log(data); */
              return this.supplierForm;
              
     }

    deleteDOCUMENTbyTipo( idx : number) {
      this.tipoDOCSupplierFORM.removeAt(idx);
    }

    resetFORM() {
      this.supplierForm.reset({
      });
    }

    onFormSubmit() {
      let data2 = this.supplierForm.value;
      /* let data = JSON.stringify(this.supplierForm.value);
	  console.log('-----SUPPLIER FORM in JSON Format-----'); */
	  console.log(data2);
	  //let stModel: SupplierTemp = this.supplierForm.value;
	  //this.upload.saveFORM(stModel);
	  this.formSubmitted = true;
	 this.supplierForm.reset();	  
  }  

    
      

      



    //  let a=this.supplierForm.value('tipoFornitore');

     /* controlla(a)
    { 
      if(a ==='Partita IVA')
      {
        return this.parti
      }

    } */

       //this.partitaIvaDocs.valueChanges.subscribe(console.log);



       

 


       
          //this.supplierForm.valueChanges.subscribe(console.log);
         // docs: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        //partitaIvaDocs: this.formBuilder.group
        // this.partitaIvaDocs = this.formBuilder.group
        //     ({
        //       questionario: [null,[Validators.required]],
        //       docIdentità: [null ,[Validators.required]],
        //       curriculum: [null,[Validators.required]],
        //       foto: [null,[Validators.required]],
        //       visuraCamerale: [null, Validators.required]
        //     });
        //     this.societaDocs =this.formBuilder.group
        //       ({
        //         questionario: [null,[Validators.required]],
        //         visuraCamerale: [null,[Validators.required]],
        //         iso9001: [null,[Validators.required]],
        //         polizzaRctRco: [null,[Validators.required]],
        //         durc: [null,[Validators.required]],
        //         bilancio: [null,[Validators.required]]
        //       });
            
            
            
      
      // if (sessionStorage.getItem("supplierTempModel")) {
      // this.supplierTempModel = JSON.parse (sessionStorage.getItem("fornitoreTempor"));
      // } else {
      //   this.supplierTempModel = new SupplierTemp();
      // }
  
  
  

  // createFormData(event) {
  //   const datiFornitore = new FormData();
  //   datiFornitore.append(this.supplierTempModel.r_D_Sociale , event.target[0].value);
  //   datiFornitore.append( this.supplierTempModel.sede_Legale,event.target[1].value);
  //   datiFornitore.append( this.supplierTempModel.sede_Operativa,event.target[2].value);
  //   datiFornitore.append( this.supplierTempModel.telefono,event.target[3].value);
  //   datiFornitore.append( this.supplierTempModel.fax,event.target[4].value);
  //   datiFornitore.append( this.supplierTempModel.e_mail,event.target[5].value);
  //   datiFornitore.append( this.supplierTempModel.data_inizio,event.target[6].valueAsDate);
  //   datiFornitore.append( this.supplierTempModel.cod_fisc,event.target[7].value);
  //   datiFornitore.append( this.supplierTempModel.p_iva,event.target[8].value);
  //   datiFornitore.append( this.supplierTempModel.tipoFornitore,event.target[9].value);

  //   if (this.supplierForm.controls['ListtipoFornitore'].value === 'Partita IVA') {
  //     for (let index = 11; index < 16; index++) 
	//   {
  //     datiFornitore.append('docs[]', event.target[index].files[0], 
  //       (<File>event.target[index].files[0]).name);
  //     }
  //   }

  //   if (this.supplierForm.controls['ListtipoFornitore'].value === "Società'") 
	// {
  //     for (let index = 11; index < 17; index++) {
  //       datiFornitore.append('docs[]', event.target[index].files[0],
  //        (<File>event.target[index].files[0]).name);
  //     }
  //   }
  //   return datiFornitore;
  // }


  /* activate(tipoFornitore : string) 
  {
    switch (tipoFornitore) {
      case 'Partita IVA':
        this.supplierForm.get('societaDocs').disable();
        this.supplierForm.get('partitaIvaDocs').enable();
        break;
      case 'Società':
        this.supplierForm.get('partitaIvaDocs').disable();
        this.supplierForm.get('societaDocs').enable();
        break;
    }
  } */
  

  // public saveOrUpdate(): void
  //  {
  //   this.isValid = this.createSupplierService.validate(
  //     this.supplierTempModel
  //   );
  //   if (this.isValid) {
  //     this.createSupplierService
  //       .saveOrUpdate(this.supplierTempModel)
  //       .subscribe(res => {
  //         if (res.responseCode == OK) {
  //           this.router.navigate(["/tempFornitoreComponent"]);
  //         } else {
  //           this.message = res.message;
  //           this.isValid = false;
  //         }
  //       });
  //   } else {
  //     this.message = "COMPILARE TUTTI I CAMPI !! SONO OBBLIGATORI !";
  //   }
  //   sessionStorage.clear();
  // }

  // public onFormSubmit() {
  //   if(this.supplierForm.valid) {
  //   this.supplierTempModel = this.supplierForm.value;
  //   console.log(this.supplierTempModel);
          /* Any API call logic via services goes here */
  // }}


  // submit(event) {
  //   this.upload.uploadForm(this.createFormData(event))
  //     .subscribe( events => {
  //       if (events.type === HttpEventType.Response && events.status === 200) 
  //       {
  //         this.uploadSuccess = true;
  //       }
  //     } );
  //   }

  saveData(){
    alert(JSON.stringify(this.supplierForm.value));
  }


}