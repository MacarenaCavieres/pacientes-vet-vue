interface Pacient {
    petName: string;
    ownerName: string;
    ownerMail: string;
    entryDate: string;
    symptoms: string;
}

interface AlertType {
    type: string;
    message: string;
}

export type { Pacient, AlertType };
