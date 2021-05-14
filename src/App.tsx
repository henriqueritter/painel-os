import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import "./styles/global.css";
import { v4 as uuid } from "uuid";

interface IOrders {
  borr: IOrdersList[];
  elet: IOrdersList[];
  fupi: IOrdersList[];
  lubr: IOrdersList[];
  meca: IOrdersList[];
  ret: IOrdersList[];
  tapo: IOrdersList[];
}

interface IOrdersList {
  SETOR: string;
  OS: number;
  PREFIXO: string;
  DT_ABER: string;
  DEFEITOS?: string;
}

function App() {
  // store orders
  const [ordersList, setOrdersList] = useState<IOrders>({
    borr: [],
    elet: [],
    fupi: [],
    lubr: [],
    meca: [],
    ret: [],
    tapo: [],
  });

  // set each Json file data to a state const.
  const getDataFilesArray = async () => {
    // fetch all JSON Files to create a object orders
    const borr: IOrdersList[] = await fetch("BORR.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });
    const elet: IOrdersList[] = await fetch("ELET.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });
    const fupi: IOrdersList[] = await fetch("FUPI.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });
    const lubr: IOrdersList[] = await fetch("LUBR.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });
    const meca: IOrdersList[] = await fetch("MECA.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });
    const ret: IOrdersList[] = await fetch("RET.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });
    const tapo: IOrdersList[] = await fetch("TAPO.JSON", {}).then(function (
      response
    ) {
      return response.json();
    });

    //object orders, used to set a state
    const orders = {
      borr,
      elet,
      fupi,
      lubr,
      meca,
      ret,
      tapo,
    };
    // console.log(orders);
    setOrdersList(orders);
  };

  useEffect(() => {
    getDataFilesArray();
  }, []);

  useMemo(() => {
    setInterval(() => {
      // setOrdersList(handleList());
      console.log(handleList());
    }, 1000);
  }, [setOrdersList]);

  function handleList() {
    const borr = ordersList.borr;

    console.log(borr);
    const elet: IOrdersList[] = [
      ...ordersList.elet.slice(1),
      ordersList.elet[0],
    ];
    const fupi: IOrdersList[] = [
      ...ordersList.fupi.slice(1),
      ordersList.fupi[0],
    ];
    const lubr: IOrdersList[] = [
      ...ordersList.lubr.slice(1),
      ordersList.lubr[0],
    ];
    const meca: IOrdersList[] = [
      ...ordersList.meca.slice(1),
      ordersList.meca[0],
    ];
    const ret: IOrdersList[] = [...ordersList.ret.slice(1), ordersList.ret[0]];
    const tapo: IOrdersList[] = [
      ...ordersList.tapo.slice(1),
      ordersList.tapo[0],
    ];
    // };

    const orders = {
      borr,
      elet,
      fupi,
      lubr,
      meca,
      ret,
      tapo,
    };
    console.log(orders);
    return orders;
  }

  return (
    <div className="App">
      {/* div container = flex column */}
      <div className="container">
        {/* div left-div = flex row */}
        <div className="container-groups">
          {/* dentro dessa div precisa separar em duas linhas sendo a primeira o cabeçalho e a segunda o conteudo */}
          <span className="container-header">OS Corretiva</span>
          {/* div container-content precisa ter 2 colunas e 3 linhas OU 2 colunas e duas linhas apenas e deixa a DIV de retorno fora dessa abaixo da div container-content */}
          <div className="container-content">
            <div className="container-orders" id="BOR">
              <p>Borracharia - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="ELE">
              <p>Elétrica - Qtd: {ordersList.elet.length}</p>
              <div className="orders" id="TEST">
                {ordersList.elet.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="FUN">
              <p>Funilaria - Qtd: {ordersList.fupi.length}</p>
              <div className="orders">
                {ordersList.fupi.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="LUB">
              <p>Lubrificação - Qtd: {ordersList.lubr.length}</p>
              <div className="orders">
                {ordersList.lubr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="MEC">
              <p>Mecânica - Qtd: {ordersList.meca.length}</p>
              <div className="orders">
                {ordersList.meca.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="TAP">
              <p>Tapeçaria - Qtd: {ordersList.tapo.length}</p>
              <div className="orders">
                {ordersList.tapo.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="container-orders-footer" id="RET">
            <p>OS Retorno - Qtd: {ordersList.ret.length}</p>
            <div className="orders">
              {ordersList.ret.map((item) => {
                return (
                  <ul key={uuid()}>
                    <span className="span-os">{item.OS}</span>
                    <span className="span-prefixo">{item.PREFIXO}</span>
                    <span className="span-dt_aber">{item.DT_ABER}</span>
                    <span className="span-defeito">{item.DEFEITOS}</span>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container-groups">
          <span className="container-header">OS Preventiva</span>
          {/* div container-content precisa ter 2 colunas e 3 linhas OU 2 colunas e duas linhas apenas e deixa a DIV de retorno fora dessa abaixo da div container-content */}
          <div className="container-content">
            <div className="container-orders" id="BOR">
              <p>Borracharia - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="ELE">
              <p>Elétrica - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="FUN">
              <p>Funilaria - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="LUB">
              <p>Lubrificação - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="MEC">
              <p>Mecânica - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="TAP">
              <p>Tapeçaria - Qtd: {ordersList.borr.length}</p>
              <div className="orders">
                {ordersList.borr.map((item) => {
                  return (
                    <ul key={uuid()}>
                      <span className="span-os">{item.OS}</span>
                      <span className="span-prefixo">{item.PREFIXO}</span>
                      <span className="span-dt_aber">{item.DT_ABER}</span>
                      <span className="span-defeito">{item.DEFEITOS}</span>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="container-orders-footer" id="RET">
            <p>OS Retorno - Qtd: {ordersList.borr.length}</p>
            <div className="orders">
              {ordersList.borr.map((item) => {
                return (
                  <ul key={uuid()}>
                    <span className="span-os">{item.OS}</span>
                    <span className="span-prefixo">{item.PREFIXO}</span>
                    <span className="span-dt_aber">{item.DT_ABER}</span>
                    <span className="span-defeito">{item.DEFEITOS}</span>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
