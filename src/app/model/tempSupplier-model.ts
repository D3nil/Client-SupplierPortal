export class SupplierTemp {
    
    r_D_Sociale: string = null;
    sede_Legale: string = null;	
    sede_Operativa: string = null;
    telefono: string = null;
    fax: string = null;
    e_mail: string = null;
    data_inizio: string = null;
    cod_fisc: string = null;
    p_iva: string = null;
    tipoFornitore: string = null;
    DOCS : Array<File> = [];

      constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }
}
  
  