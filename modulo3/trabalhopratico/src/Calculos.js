import React, { Component } from "react";
import css from "./Grades.module.css";

export default class Calculos extends Component {
  somaNotas() {
    const somaNotas = this.props.grades.reduce((acc, g) => {
      return Number(acc) + Number(g.nota);
    }, 0);

    return somaNotas;
  }

  percentualTotal() {
    return this.somaNotas() / this.props.grades.length;
  }

  aprovado60Porcento() {
    for (let i = 0; i < this.props.grades.length; i++) {
      if (this.props.grades[i].nota < 60) {
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
      <div className={css.notas}>
        <p className={css.labelsCalculos}>Nota total: {this.somaNotas()}</p>
        <p className={css.labelsCalculos}>
          Percentual total: {this.percentualTotal()}%
        </p>
        <p className={css.labelsCalculos}>
          Aprovação pela média (60%):{" "}
          <span
            className={
              !this.aprovado60Porcento() ? css.notabaixa : css.notaalta
            }
          >
            {this.aprovado60Porcento() ? "Sim" : "Não"}
          </span>
        </p>
        <p className={css.labelsCalculos}>
          Aprovado pelo percentual total (70%):{" "}
          <span
            className={
              !this.aprovado70Porcento() ? css.notabaixa : css.notaalta
            }
          >
            {this.aprovado70Porcento() ? "Sim" : "Não"}
          </span>
        </p>
      </div>
    );
  }
}
