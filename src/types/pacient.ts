interface Pacient {
    id: string | null;
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
