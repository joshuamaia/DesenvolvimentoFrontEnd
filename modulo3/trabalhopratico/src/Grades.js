import React, { Component } from "react";
import css from "./Grades.module.css";

export default class Grades extends Component {
  constructor() {
    super();
    this.state = {
      grades: [
        { id: 0, descricao: "Módulo 01 - Fundamentos (0 - 100)", nota: 0 },
        { id: 1, descricao: "Módulo 02 - Angular (0 - 100)", nota: 0 },
        { id: 2, descricao: "Módulo 03 - React (0 - 100)", nota: 0 },
        { id: 3, descricao: "Módulo 04 - Vue (0 - 100)", nota: 0 },
        { id: 4, descricao: "Módulo 05 - Desafio final (0 - 100)", nota: 0 },
      ],
    };
  }

  handleChange(id, nota) {
    const gradesUpdate = this.state.grades;

    gradesUpdate[id] = { ...gradesUpdate[id], nota: nota };

    this.setState({
      grades: gradesUpdate,
    });

    //console.log(this.state.grades);
  }

  somaNotas() {
    const somaNotas = this.state.grades.reduce((acc, g) => {
      return Number(acc) + Number(g.nota);
    }, 0);

    return somaNotas;
  }

  percentualTotal() {
    return this.somaNotas() / this.state.grades.length;
  }

  aprovado60Porcento() {
    for (let i = 0; i < this.state.grades.length; i++) {
      if (this.state.grades[i].nota < 60) {
        return false;
      }
    }
    return true;
  }

  aprovado70Porcento() {
    return this.percentualTotal() >= 70;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title center-align">
                  Controle de Notas do Bootcamp do IGTI com React
                </span>

                <div className="row">
                  <div className="col s6">
                    <h3>Notas Atuais</h3>
                    <div className={css.notas}>
                      {this.state.grades.map((g) => {
                        return (
                          <div key={String(g.id)} className="row">
                            <label className={css.labels}>{g.descricao}</label>
                            <input
                              className={
                                g.nota < 60 ? css.notabaixa : css.notaalta
                              }
                              id={g.id}
                              value={g.nota}
                              type="number"
                              min="0"
                              max="100"
                              onChange={(e) =>
                                this.handleChange(g.id, e.target.value)
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col s6">
                    <h3>Cálculos</h3>
                    <div className={css.notas}>
                      <p>Nota total: {this.somaNotas()}</p>
                      <p>Percentual total: {this.percentualTotal()}</p>
                      <p>
                        Aprovação pela média (60%):{" "}
                        <span
                          className={
                            !this.aprovado60Porcento()
                              ? css.notabaixa
                              : css.notaalta
                          }
                        >
                          {this.aprovado60Porcento() ? "Sim" : "Não"}
                        </span>
                      </p>
                      <p>
                        Aprovado pelo percentual total (70%):{" "}
                        <span
                          className={
                            !this.aprovado70Porcento()
                              ? css.notabaixa
                              : css.notaalta
                          }
                        >
                          {this.aprovado70Porcento() ? "Sim" : "Não"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
