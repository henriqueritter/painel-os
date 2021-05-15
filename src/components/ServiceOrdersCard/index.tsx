import * as React from "react"
import { ServiceOrder, ServiceOrderType, ServiceOrderTypeDescription } from "../../domain/Order";

export interface ServiceOrdersCardProps {
    orderType: ServiceOrderType
    serviceOrders: ServiceOrder[];
}
export const ServiceOrdersCard: React.FC<ServiceOrdersCardProps> = ({serviceOrders, orderType}) => {
    return (
        <div className="container-orders" id={orderType}>
              <p>{ServiceOrderTypeDescription[orderType]} - Qtd: {serviceOrders.length}</p>
              <div className="orders">
                {serviceOrders.map((item, index) => {
                  return (
                    <ul key={`${item.OS}-${index}`}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
        </div>
    )
}