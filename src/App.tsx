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

//BACKUP GETDATA
// const getData = () => {
//   fetch("BORR.JSON", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (myJson) {
//       // console.log(myJson);
//       setBorr(myJson);
//     });
//   console.log(borr[1]);
// };

// useEffect(() => {
//   getData();
// }, []);

function App() {
  const [borr, setBorr] = useState<IOrders[]>([]);
  const [elet, setElet] = useState<IOrders[]>([]);
  const [fupi, setFupi] = useState<IOrders[]>([]);
  const [lubr, setLubr] = useState<IOrders[]>([]);
  const [meca, setMeca] = useState<IOrders[]>([]);
  const [ret, setRet] = useState<IOrders[]>([]);
  const [tapo, setTapo] = useState<IOrders[]>([]);

  // @ts-ignore
  // window.scrollTo(0, document.querySelector(".orders").scrollHeight);

  function updateScroll() {
    // get all orders div
    const divs = document.getElementsByClassName("orders");

    //apply a JS Rule for each div
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].scrollTop < divs[i].scrollHeight) {
        divs[i].scrollTop = divs[i].scrollTop + 5;
      }
    }

    // //@ts-ignore
    // const scrollDiv: HTMLDivElement = document.getElementById("TEST");

    // if (scrollDiv.scrollTop < scrollDiv.scrollHeight) {
    //   scrollDiv.scrollTop = scrollDiv.scrollTop + 5;
    // }

    // if (scrollDiv.scrollTop >= scrollDiv.scrollHeight - 5) {
    //   console.log("end");
    // }

    // console.log(top, height);
    // scrollDiv.scrollTop = scrollDiv.scrollHeight;
  }

  // receive data
  // Todo an array of objects with Json name File and setState Name on each object
  // apply a for each on the array to execute for the fetch
  const getData = () => {
    fetch("BORR.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setBorr(myJson);
      });

    fetch("ELET.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setElet(myJson);
      });

    fetch("FUPI.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setFupi(myJson);
      });

    fetch("LUBR.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setLubr(myJson);
      });

    fetch("MECA.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setMeca(myJson);
      });

    fetch("RET.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setRet(myJson);
      });

    fetch("TAPO.JSON", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setTapo(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setInterval(() => {
      updateScroll();
    }, 1000);
  }, []);

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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                  <ul key={"RET" + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                    <ul key={uuid() + item.OS}>
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
                  <ul key={uuid() + item.OS}>
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
