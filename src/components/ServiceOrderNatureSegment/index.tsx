import * as React from "react";
import { ServiceOrder, ServiceOrderType } from "../../domain/Order";
import { ServiceOrdersCard } from "../ServiceOrdersCard";

export interface ServiceOrderNatureSegmentProps {
  orders: Record<ServiceOrderType, ServiceOrder[]>;
  orderNatureSegment: string;
}
export const ServiceOrderNatureSegment: React.FC<ServiceOrderNatureSegmentProps> = ({
  orders,
  orderNatureSegment,
}) => {
  return (
    <div className="container-groups">
      <span className="container-header">OS {orderNatureSegment}</span>
      <div className="container-content">
        {Object.keys(orders)
          .filter((key) => key !== "RET")
          .map((orderType) => (
            <ServiceOrdersCard
              key={orderType}
              orderType={orderType as ServiceOrderType}
              serviceOrders={orders[orderType as ServiceOrderType]}
            />
          ))}
      </div>
      <div className="container-orders-footer" id="RET">
        <ServiceOrdersCard orderType={"RET"} serviceOrders={orders.RET} />
      </div>
    </div>
  );
};
