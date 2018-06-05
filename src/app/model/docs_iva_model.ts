export class Docs_iva_Model
{
    questionario: File = null;
    docIdentità: File = null;
    curriculum: File = null;
    foto: File = null;
    visuraCamerale: File = null;

    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }
}

