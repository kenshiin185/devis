export interface Utilisateur {
    _id: string;
    raisonSocialeUtilisateur: string;
    civiliteUtilisateur: string;
    nomUtilisateur: string;
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
    etatUtilisateur: string;
    dateInscriptionUtilisateur?: Date;
    dateDernierPaiement?: Date;
    rgpd: string;
}