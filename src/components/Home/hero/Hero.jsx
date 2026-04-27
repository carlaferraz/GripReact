import React from 'react'
import './Hero.css'
import { useState } from 'react'

function Hero() {
    return (
        <div class="container hero-box">
                <div className="hero-txt">
                    <span className="eyebrow">★ Escola de Ballet de Excelência</span>
                    <h1>
                        Aprenda Ballet com<br />
                        <em>Graça e Precisão</em>
                    </h1>
                    <p>
                        Domine a arte do ballet de qualquer lugar do mundo. Treine com
                        instrutores renomados através de aulas ao vivo e sessões gravadas
                        abrangentes para todos os níveis de habilidade.
                    </p>
                    <div className="hero-btns">
                        <a href="#planos" className="btn">Começar a Aprender Ballet</a>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <span className="num">30+</span>
                            <span className="leg">Anos de Experiência</span>
                        </div>
                        <div className="stat">
                            <span className="num">50k+</span>
                            <span className="leg">Alunos Formados</span>
                        </div>
                        <div className="stat">
                            <span className="num">10k+</span>
                            <span className="leg">Aulas Realizadas</span>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Hero