import * as React from "react";
import { Orders, ServiceOrderNature, ServiceOrderType } from "../../domain/Order";

export interface DashboardState {
    allServiceOrders: Orders
}

const INITIAL_STATE: DashboardState = {
    allServiceOrders: {
        corretiva: {
            BORR: [],
            ELET: [],
            FUPI: [],
            LUBR: [],
            MECA: [],
            RET: [],
            TAPO: []
        },
        preventiva: {
            BORR: [],
            ELET: [],
            FUPI: [],
            LUBR: [],
            MECA: [],
            RET: [],
            TAPO: []
        }
    }
}

export const DashboardContext = React.createContext<DashboardState>(undefined as any)
export const useDashboard = () => React.useContext(DashboardContext)

export const DashboardProvider: React.FC = ({ children }) => {
    const [orders, setOrders] = React.useState<Orders>(INITIAL_STATE.allServiceOrders)

    // Function to fetch all the orders
    const loadOrders = React.useCallback(async () => {
        const ordersToLoad: Orders = {...INITIAL_STATE.allServiceOrders}
        const orderNatures: ServiceOrderNature[] = ["corretiva", "preventiva"]
        const orderTypes: ServiceOrderType[] = ["BORR", "ELET", "FUPI", "LUBR", "MECA", "RET", "TAPO"]
        for (const orderNature of orderNatures) {
            for (const orderType of orderTypes) {
                const response = await fetch(`resources/${orderNature}/${orderType}.JSON`)
                const serviceOrderData = await response.json()
                ordersToLoad[orderNature][orderType] = serviceOrderData
            }
        }
        setOrders(ordersToLoad)
    }, [setOrders])

    // Will run once, and initialize the orders
    React.useEffect(() => {
        loadOrders()
    }, [loadOrders])

    return (
        <DashboardContext.Provider value={{
            allServiceOrders: orders
        }}>
            {children}
        </DashboardContext.Provider>
    )
}