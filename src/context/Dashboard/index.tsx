import * as React from "react";
import {
  Orders,
  ServiceOrderNature,
  ServiceOrderType,
} from "../../domain/Order";

import { useInterval } from "../../hooks/interval";

export interface DashboardState {
  allServiceOrders: Orders;
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
      TAPO: [],
    },
    preventiva: {
      BORR: [],
      ELET: [],
      FUPI: [],
      LUBR: [],
      MECA: [],
      RET: [],
      TAPO: [],
    },
  },
};

export const DashboardContext = React.createContext<DashboardState>(
  undefined as any
);
export const useDashboard = () => React.useContext(DashboardContext);

export const DashboardProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = React.useState<Orders>(
    INITIAL_STATE.allServiceOrders
  );

  const orderNatures: ServiceOrderNature[] = ["corretiva", "preventiva"];
  const orderTypes: ServiceOrderType[] = [
    "BORR",
    "ELET",
    "FUPI",
    "LUBR",
    "MECA",
    "RET",
    "TAPO",
  ];

  // Function to fetch all the orders

  const loadOrders = React.useCallback(async () => {
    const ordersToLoad: Orders = { ...INITIAL_STATE.allServiceOrders };

    for (const orderNature of orderNatures) {
      for (const orderType of orderTypes) {
        const response = await fetch(
          `resources/${orderNature}/${orderType}.JSON`
        );
        const serviceOrderData = await response.json();
        ordersToLoad[orderNature][orderType] = serviceOrderData;
      }
    }
    setOrders(ordersToLoad);
  }, [setOrders]);

  // function used to change the position of every order where orderType has more than 10 elements
  function handleList() {
    const parsedOrders: Orders = { ...INITIAL_STATE.allServiceOrders };

    for (const orderNature of orderNatures) {
      for (const orderType of orderTypes) {
        const parsedOrderType =
          orders[orderNature][orderType].length >= 10
            ? [
                ...orders[orderNature][orderType].slice(1),
                orders[orderNature][orderType][0],
              ]
            : orders[orderNature][orderType];

        parsedOrders[orderNature][orderType] = parsedOrderType;
      }
    }
    setOrders(parsedOrders);
  }

  // Will run once, and initialize the orders
  React.useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  // custom hook, will run in a loop after every 2seconds, used to scroll the orders of the card.
  useInterval(() => {
    handleList();
  }, 3000);

  return (
    <DashboardContext.Provider
      value={{
        allServiceOrders: orders,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
