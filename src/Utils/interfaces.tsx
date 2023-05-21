
export interface Field {
    name: string;
    type: string;
    label: string;
}

export interface Button {
    name: string;
    func: (formData: { [key: string]: string }) => void;
}

