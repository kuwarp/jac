import React from 'react'
import './slide.css';
import Carousel from 'react-bootstrap/Carousel';
import sil from '../../assets/silver01.png';
import red from '../../assets/red01.png';
import org from '../../assets/or01.png';
import bl from '../../assets/bl01.png';
import blk from '../../assets/black01.png';

const Slide = () => {
  return (
    <Carousel className="cr-dash">
    <Carousel.Item>
      <img
        className="cr-dash d-block"
        src={sil}
        alt="Aj Star"
      />
      <Carousel.Caption>
        <h3>Aj Star</h3>
        <p>AJSTAR presenting by Yakuza.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="cr-dash d-block "
        src={red}
        alt="Rubic"
      />

      <Carousel.Caption>
        <h3>Rubie</h3>
        <p>RUBIE from Yakuza.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="cr-dash d-block  "
        src={bl}
        alt="Ck phantom"
      />

      <Carousel.Caption>
        <h3>CK Phantom</h3>
        <p>Yakuza presenting CK PHANTOM.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="cr-dash d-block "
        src={org}
        alt="Delta"
      />

      <Carousel.Caption>
        <h3>DELTA</h3>
        <p>Yakuza presenting DELTA.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="cr-dash d-block "
        src={blk}
        alt="Poppy"
      />

      <Carousel.Caption>
        <h3>POPPY</h3>
        <p>Yakuza presenting POPPY.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slide