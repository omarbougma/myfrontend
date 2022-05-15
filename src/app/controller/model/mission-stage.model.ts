import { Cadre } from './cadre.model';
import { documents } from './documents.model';
import { Soutien } from './soutien.model';

export class MissionStage {
  id: number;
  objetMission: string;
  pays: string;
  ville: string;
  dateDebut: string;
  dateFin: string;
  dateDepart: string;
  dateRetour: string;
  private cadre: Cadre;

  public get getcadre(): Cadre {
    return this.cadre;
  }
  public set setcadre(value: Cadre) {
    this.cadre = value;
  }

  private soutien: Soutien;

  public get getsoutien(): Soutien {
    return this.soutien;
  }
  public set setsoutien(value: Soutien) {
    this.soutien = value;
  }

  private _documents: documents;

  public get documents(): documents {
    return this._documents;
  }
  public set documents(value: documents) {
    this._documents = value;
  }
}
