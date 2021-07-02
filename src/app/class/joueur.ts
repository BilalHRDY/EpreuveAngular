export class Joueur {

    id?:number;
    nom?:string;
    prenom?:string;
    poste?:string;
    image?: string


  constructor(
    id?: number, 
    nom?: string, 
    prenom?: string, 
    poste?: string, 
    image?: string
) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.poste = poste
    this.image = image
  }

}
