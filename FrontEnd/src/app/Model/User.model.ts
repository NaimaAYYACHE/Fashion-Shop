import { Role } from "./Role.model";

export class User{
    id? : number;
    nom? : string;
    prenom? : string;
    email? : string;
    dateNaiss? : Date;
    ville? : string;
    telephone? : string;
    adresse? : string;
    image? : string;
    codePostal? : number;
    password? : string;
    residence? : string;
    role? : Role;
}