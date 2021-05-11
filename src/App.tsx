import React, { useEffect, useState } from "react";
import "./styles/global.css";

interface IOrders {
  SETOR: string;
  OS: number;
  PREFIXO: string;
  DT_ABER: string;
  DEFEITOS?: string;
}

function App() {
  const [borr, setBorr] = useState<IOrders[]>([]);

  // receive data
  const getData = () => {
    fetch("BORR.JSON", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setBorr(myJson);
      });
    console.log(borr[1]);
  };

  useEffect(() => {
    getData();
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
              <p>Borracharia</p>
              <div className="orders">
                {borr.map((item) => {
                  console.log(item.DEFEITOS);
                  return (
                    <ul key={item.OS}>
                      <span className="span-os">{item.OS}</span> {item.PREFIXO}{" "}
                      {item.DT_ABER} {item.DEFEITOS}
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-orders" id="ELE">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="FUN">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="LUB">
              <p>Setor Ordem</p>
              <div className="orders">
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
              </div>
            </div>
            <div className="container-orders" id="MEC">
              <p>Setor Ordem</p>
              <div className="orders">
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
                <br />
                <span>Nº OS Prefix Time Description</span>
              </div>
            </div>
            <div className="container-orders" id="TAP">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
          </div>
          <div className="container-orders" id="RET">
            <p>OS Retorno</p>
          </div>
        </div>
        <div className="container-groups">
          <span className="container-header">OS Preventiva</span>
          {/* div container-content precisa ter 2 colunas e 3 linhas OU 2 colunas e duas linhas apenas e deixa a DIV de retorno fora dessa abaixo da div container-content */}
          <div className="container-content">
            <div className="container-orders" id="BOR">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="ELE">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="FUN">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="LUB">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="MEC">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
            <div className="container-orders" id="TAP">
              <p>Setor Ordem</p>
              <span>Nº OS Prefix Time Description</span>
            </div>
          </div>
          <div className="container-orders" id="RET">
            <p>OS Retorno</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
