import React, { useEffect } from "react";
import "./styles/global.css";

function App() {
  // useEffect(() => {
  //   const elem = document.getElementById("BOR");
  //   elem.scrollTop = elem?.scrollHeight;
  // }, []);
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
          <div id="RET">
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
          <div id="RET">
            <p>OS Retorno</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
