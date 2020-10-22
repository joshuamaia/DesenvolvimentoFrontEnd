import React, { Component } from "react";
import css from "./Grades.module.css";
import Calculos from "./Calculos";
import Grade from "./Grade";

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

  handleChange = (id, nota) => {
    const { grades } = this.state;

    grades[id] = { ...grades[id], nota: nota };

    this.setState({
      grades: grades,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="card blue darken-4">
              <div className="card-content white-text text-darken-4">
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    background: "#212529",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  className="card-title center-align"
                >
                  Controle de Notas do Bootcamp do IGTI com React
                </span>

                <div className="row">
                  <div className="col s12 m6">
                    <h3 className={css.titulos}>Notas Atuais</h3>
                    <div className={css.notas}>
                      {this.state.grades.map((g) => {
                        return (
                          <Grade
                            key={String(g.id)}
                            g={g}
                            handleChange={this.handleChange}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="col s12 m6">
                    <h3 className={css.titulos}>Cálculos</h3>
                    <Calculos grades={this.state.grades} />
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
