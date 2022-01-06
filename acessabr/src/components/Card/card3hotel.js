import React from 'react'
import './style.scss'
import Button from '../Button'
import iconAudio from '../../images/icon-audio-descricao.png'
import iconBanheiro from '../../images/icon-banheiro-acessivel.png'
import iconBraile from '../../images/icon-braile.png'
import iconCao from '../../images/icon-cao-guia.png'
import iconElevador from '../../images/icon-elevador.png'
import iconEstacionamento from '../../images/icon-estacionamento.png'
import iconLibras from '../../images/icon-libras.png'
import iconPiso from '../../images/icon-piso-tatil.png'
import iconPorta from '../../images/icon-porta-larga.png'
import iconRampa from '../../images/icon-rampa.png'
import pousada from '../../images/pousada.jpg'

const Card2 = () => {
  return(
      <div className="card__container">
          <div className="card__image">
            <img 
              src={pousada}
              alt='Hotel Pousada São Francisco'
              title='Hotel Pousada São Francisco'/>
          </div>
          <div className="card__content">
              <h3>Hotel Pousada São Francisco</h3>
              <ul className="card__facilities">
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconBraile}
                          alt="Sinalização em Braile"
                          title="Sinalização em Braile" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconAudio}
                          alt="Audio descrição"
                          title="Audio descrição" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconBanheiro}
                          alt="Banheiro acessível"
                          title="Banheiro acessível" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconElevador}
                          alt="Elevador para cadeirantes"
                          title="Elevador para cadeirantes" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconEstacionamento}
                          alt="Estacionamento para idosos / deficientes"
                          title="Estacionamento para idosos / deficientes" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconCao}
                          alt="Permite acesso de cães-guias"
                          title="Permite acesso de cães-guias" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconPiso}
                          alt="Piso tátil de alerta"
                          title="Piso tátil de alerta" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconPorta}
                          alt="Portas de acesso largas"
                          title="Portas de acesso largas" />
                  </li>
                  <li className="card__facilities__item">
                      <img 
                          src={iconRampa}
                          alt="Rampas de acesso para cadeirante"
                          title="Rampas de acesso para cadeirante" />
                  </li>
                  <li className="card__facilities__item card__facilities__item--unchecked">
                      <img 
                          src={iconLibras}
                          alt="Atendimento em Libras"
                          title="Atendimento em Libras" />
                  </li>
              </ul>
              <p>Pousada próxima ao Centro Histórico de Olinda.</p>
              <Button>Como chegar</Button>
          </div>
      </div>
  )
}

export default Card2