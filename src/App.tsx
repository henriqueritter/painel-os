import React, { useEffect, useRef, useState } from "react";
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
  pborr: IOrdersList[];
  pelet: IOrdersList[];
  pfupi: IOrdersList[];
  plubr: IOrdersList[];
  pmeca: IOrdersList[];
  pret: IOrdersList[];
  ptapo: IOrdersList[];
}

interface IOrdersList {
  SETOR: string | null;
  OS: number | null;
  PREFIXO: string | null;
  DT_ABER: string | null;
  DEFEITOS?: string | null;
}

function App() {
  // store orders and initialize
  const [ordersList, setOrdersList] = useState<IOrders>({
    borr: [],
    elet: [],
    fupi: [],
    lubr: [],
    meca: [],
    ret: [],
    tapo: [],
    pborr: [],
    pelet: [],
    pfupi: [],
    plubr: [],
    pmeca: [],
    pret: [],
    ptapo: [],
  });

  // Check if JSON Files is empty, if its empty return a empty JSON
  const parseJson = async (response: any) => {
    const text = await response.text();
    try {
      const json = JSON.parse(text);
      return json;
    } catch (err) {
      const json: IOrdersList[] = [];
      return json;
    }
  };

  // set each Json file data to a state const.
  const getDataFilesArray = async () => {
    // fetch all JSON Files to create a object orders
    const borr: IOrdersList[] = await fetch("BORR.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const elet: IOrdersList[] = await fetch("ELET.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const fupi: IOrdersList[] = await fetch("FUPI.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const lubr: IOrdersList[] = await fetch("LUBR.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const meca: IOrdersList[] = await fetch("MECA.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const ret: IOrdersList[] = await fetch("RET.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const tapo: IOrdersList[] = await fetch("TAPO.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });

    // Orders de serviço Preventivas
    const pborr: IOrdersList[] = await fetch("PBORR.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const pelet: IOrdersList[] = await fetch("PELET.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const pfupi: IOrdersList[] = await fetch("PFUPI.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const plubr: IOrdersList[] = await fetch("PLUBR.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const pmeca: IOrdersList[] = await fetch("PMECA.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const pret: IOrdersList[] = await fetch("PRET.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
      });
    const ptapo: IOrdersList[] = await fetch("PTAPO.JSON", {})
      .then(parseJson)
      .then((result) => {
        return result;
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
      pborr,
      pelet,
      pfupi,
      plubr,
      pmeca,
      pret,
      ptapo,
    };

    setOrdersList(orders);
  };

  // call function to load data from JSON Files
  useEffect(() => {
    getDataFilesArray();
  }, []);

  // scroll list orders
  function handleList() {
    // if array are equal or have more than 10 elements:
    // push the first position at to the end and remove the first position
    const borr: IOrdersList[] =
      ordersList.borr.length >= 10
        ? [...ordersList.borr.slice(1), ordersList.borr[0]]
        : ordersList.borr;

    const elet: IOrdersList[] =
      ordersList.elet.length >= 10
        ? [...ordersList.elet.slice(1), ordersList.elet[0]]
        : ordersList.elet;

    const fupi: IOrdersList[] =
      ordersList.fupi.length >= 10
        ? [...ordersList.fupi.slice(1), ordersList.fupi[0]]
        : ordersList.fupi;

    const lubr: IOrdersList[] =
      ordersList.lubr.length >= 10
        ? [...ordersList.lubr.slice(1), ordersList.lubr[0]]
        : ordersList.lubr;

    const meca: IOrdersList[] =
      ordersList.meca.length >= 10
        ? [...ordersList.meca.slice(1), ordersList.meca[0]]
        : ordersList.meca;

    const ret: IOrdersList[] =
      ordersList.ret.length >= 10
        ? [...ordersList.ret.slice(1), ordersList.ret[0]]
        : ordersList.ret;

    const tapo: IOrdersList[] =
      ordersList.tapo.length >= 10
        ? [...ordersList.tapo.slice(1), ordersList.tapo[0]]
        : ordersList.tapo;

    // Orders de serviço Preventivas
    const pborr: IOrdersList[] =
      ordersList.pborr.length >= 10
        ? [...ordersList.pborr.slice(1), ordersList.pborr[0]]
        : ordersList.pborr;

    const pelet: IOrdersList[] =
      ordersList.pelet.length >= 10
        ? [...ordersList.pelet.slice(1), ordersList.pelet[0]]
        : ordersList.pelet;

    const pfupi: IOrdersList[] =
      ordersList.pfupi.length >= 10
        ? [...ordersList.pfupi.slice(1), ordersList.pfupi[0]]
        : ordersList.pfupi;

    const plubr: IOrdersList[] =
      ordersList.plubr.length >= 10
        ? [...ordersList.plubr.slice(1), ordersList.plubr[0]]
        : ordersList.plubr;

    const pmeca: IOrdersList[] =
      ordersList.pmeca.length >= 10
        ? [...ordersList.pmeca.slice(1), ordersList.pmeca[0]]
        : ordersList.pmeca;

    const pret: IOrdersList[] =
      ordersList.pret.length >= 10
        ? [...ordersList.pret.slice(1), ordersList.pret[0]]
        : ordersList.pret;

    const ptapo: IOrdersList[] =
      ordersList.ptapo.length >= 10
        ? [...ordersList.ptapo.slice(1), ordersList.ptapo[0]]
        : ordersList.ptapo;

    const orders = {
      borr,
      elet,
      fupi,
      lubr,
      meca,
      ret,
      tapo,
      pborr,
      pelet,
      pfupi,
      plubr,
      pmeca,
      pret,
      ptapo,
    };

    return orders;
  }

  // Hook Created by Dan Abramov, available on
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback: any, delay: number) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        // @ts-expect-error
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // Call useIntervallHook to set orders list state with the parsed data
  // from the handleList function
  useInterval(() => {
    setOrdersList(handleList());
  }, 2000);

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
              <div onChange={handleList} className="orders">
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
              <div className="orders">
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
              <p>Borracharia - Qtd: {ordersList.pborr.length}</p>
              <div className="orders">
                {ordersList.pborr.map((item) => {
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
              <p>Elétrica - Qtd: {ordersList.pelet.length}</p>
              <div className="orders">
                {ordersList.pelet.map((item) => {
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
              <p>Funilaria - Qtd: {ordersList.pfupi.length}</p>
              <div className="orders">
                {ordersList.pfupi.map((item) => {
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
              <p>Lubrificação - Qtd: {ordersList.plubr.length}</p>
              <div className="orders">
                {ordersList.plubr.map((item) => {
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
              <p>Mecânica - Qtd: {ordersList.pmeca.length}</p>
              <div className="orders">
                {ordersList.pmeca.map((item) => {
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
              <p>Tapeçaria - Qtd: {ordersList.ptapo.length}</p>
              <div className="orders">
                {ordersList.ptapo.map((item) => {
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
            <p>OS Retorno - Qtd: {ordersList.pret.length}</p>
            <div className="orders">
              {ordersList.pret.map((item) => {
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
