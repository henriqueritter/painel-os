import React, { useEffect, useState } from "react";
import "./styles/global.css";
import { v4 as uuid } from "uuid";

interface IOrders {
  SETOR: string;
  OS: number;
  PREFIXO: string;
  DT_ABER: string;
  DEFEITOS?: string;
}

interface IJsonList {
  sector: string;
  jsonFileName: string;
}

function App() {
  const [borr, setBorr] = useState<IOrders[]>([]);
  const [elet, setElet] = useState<IOrders[]>([]);
  const [fupi, setFupi] = useState<IOrders[]>([]);
  const [lubr, setLubr] = useState<IOrders[]>([]);
  const [meca, setMeca] = useState<IOrders[]>([]);
  const [ret, setRet] = useState<IOrders[]>([]);
  const [tapo, setTapo] = useState<IOrders[]>([]);

  // const [data, setData] = useState<{}>({});

  // set each Json file data to a state const.
  const getDataFilesArray = () => {
    fetch("LIST.json", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonFile: IJsonList[]) {
        for (let i = 0; i < jsonFile.length; i++) {
          fetch(jsonFile[i].jsonFileName, {})
            .then(function (response) {
              return response.json();
            })
            .then(function (par) {
              switch (jsonFile[i].sector) {
                case "BORR":
                  setBorr(par);
                  break;
                case "ELET":
                  setElet(par);
                  break;
                case "FUPI":
                  setFupi(par);
                  break;
                case "LUBR":
                  setLubr(par);
                  break;
                case "MECA":
                  setMeca(par);
                  break;
                case "TAPO":
                  setTapo(par);
                  break;
                case "RET":
                  setRet(par);
                  break;

                default:
                  console.log("Error on JSON file name");
              }
            });
        }
      });
  };

  useEffect(() => {
    getDataFilesArray();
  }, []);

  useEffect(() => {
    setInterval(() => {
      scrollOrdersList();
    }, 2000);
  }, [, elet]);

  const scrollOrdersList = function () {
    //if div has more than 10 elements
    // if (borr.length >= 10) {
    //   // insert the first element at the final of the array
    //   setBorr((borr) => [...borr, borr[0]]);
    //   // remove the first item of the array
    //   setBorr((borr) => borr.slice(1));
    // }

    if (elet.length >= 10) {
      const newElet = [...elet, elet[0]];

      // setElet((elet) => [...elet, elet[0]]);
      setElet(newElet.slice(1));
    }

    // if (fupi.length >= 10) {
    //   setFupi((fupi) => [...fupi, fupi[0]]);
    //   setFupi((fupi) => fupi.slice(1));
    // }
    // if (lubr.length >= 10) {
    //   setLubr((lubr) => [...lubr, lubr[0]]);
    //   setLubr((lubr) => lubr.slice(1));
    // }
    // if (meca.length >= 10) {
    //   setMeca((meca) => [...meca, meca[0]]);
    //   setMeca((meca) => meca.slice(1));
    // }
    // if (tapo.length >= 10) {
    //   setTapo((tapo) => [...tapo, tapo[0]]);
    //   setTapo((tapo) => tapo.slice(1));
    // }
    // if (ret.length >= 10) {
    //   setRet((ret) => [...ret, ret[0]]);
    //   setRet((ret) => ret.slice(1));
    // }
  };

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
              <p>Borracharia - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
              <p>Elétrica - Qtd: {elet.length}</p>
              <div className="orders" id="TEST">
                {elet.map((item) => {
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
              <p>Funilaria - Qtd: {fupi.length}</p>
              <div className="orders">
                {fupi.map((item) => {
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
              <p>Lubrificação - Qtd: {lubr.length}</p>
              <div className="orders">
                {lubr.map((item) => {
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
              <p>Mecânica - Qtd: {meca.length}</p>
              <div className="orders">
                {meca.map((item) => {
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
              <p>Tapeçaria - Qtd: {tapo.length}</p>
              <div className="orders">
                {tapo.map((item) => {
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
            <p>OS Retorno - Qtd: {ret.length}</p>
            <div className="orders">
              {ret.map((item) => {
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
              <p>Borracharia - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
              <p>Elétrica - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
              <p>Funilaria - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
              <p>Lubrificação - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
              <p>Mecânica - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
              <p>Tapeçaria - Qtd: {borr.length}</p>
              <div className="orders">
                {borr.map((item) => {
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
            <p>OS Retorno - Qtd: {borr.length}</p>
            <div className="orders">
              {borr.map((item) => {
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
