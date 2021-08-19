export class PatientCard {

  id : number;
  patientName: string;
  createdDate: Date;
  arrhythmias: string[];
  status: string;

  constructor(data : any) {
    this.id = data.id;
    this.patientName = data.patient_name;
    this.createdDate = new Date(data.created_date);
    this.arrhythmias = data.arrhythmias && data.arrhythmias instanceof Array ? data.arrhythmias : [];
    this.status = data.status;
  }

}
