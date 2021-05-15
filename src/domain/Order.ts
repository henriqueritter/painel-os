export interface ServiceOrder {
    SETOR?: string;
    OS?: number;
    PREFIXO?: string
    DT_ABER?: string
    DEFEITOS?: string
}

export type ServiceOrderType = "BORR" | "ELET" | "FUPI" | "LUBR" | "MECA" | "RET" | "TAPO"

export type ServiceOrderNature = "preventiva" | "corretiva"

export type Orders = Record<ServiceOrderNature, Record<ServiceOrderType, ServiceOrder[]>>

export const ServiceOrderTypeDescription: Record<ServiceOrderType, string> = {
    BORR: "Borracharia",
    ELET: "Elétrica",
    FUPI: "Funilária",
    LUBR: "Lubrificação",
    MECA: "Mecânica",
    RET: "Retorno",
    TAPO: "Tapeçaria"
}