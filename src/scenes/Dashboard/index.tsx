import * as React from "react";
import { ServiceOrderNatureSegment } from "../../components/ServiceOrderNatureSegment";
import { useDashboard } from "../../context/Dashboard";

export const Dashboard: React.FC = () => {

  const { allServiceOrders } = useDashboard();

  return (
    <div className="container">
      <ServiceOrderNatureSegment orders={allServiceOrders.corretiva} />
      <ServiceOrderNatureSegment orders={allServiceOrders.preventiva} />
    </div>
  )
}