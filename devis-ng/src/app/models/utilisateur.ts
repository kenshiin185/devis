export class Utilisateur {
    _id: string;
    raisonSocialeUtilisateur: string;
    civiliteUtilisateur: string;
    nomUtilisateur: string;
    passwordUtilisateur: string;
    prenomUtilisateur: string;
    adresseUtilisateur: string;
    codePostalUtilisateur: string;
    villeUtilisateur: string;
    mailUtilisateur: string;
    telUtilisateur: string;
    capitalSocialUtilisateur: string;
    siretUtilisateur: string;
    sirenUtilisateur: string;
    tvaIntraCommunautaireUtilisateur: string;
    actif: boolean;
    dateInscriptionUtilisateur?: Date;
    // dateDernierPaiement?: Date;
    rgpd: string;
}