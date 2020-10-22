import React, { Component } from "react";
import css from "./Grades.module.css";

export default class Grade extends Component {
  handleChangeChield = (id, nota) => {
    this.props.handleChange(id, nota);
  };

  render() {
    const { g } = this.props;

    return (
      <div className="row">
        <label className={css.labels}>{g.descricao}</label>
        <input
          className={g.nota < 60 ? css.notabaixa : css.notaalta}
          id={g.id}
          value={g.nota}
          type="number"
          min="0"
          max="100"
          onChange={(e) => this.handleChangeChield(g.id, e.target.value)}
        />
      </div>
    );
  }
}
