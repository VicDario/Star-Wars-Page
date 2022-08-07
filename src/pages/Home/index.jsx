import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from '@styles/Home.module.css';

import imageCentralMenu from '@assets/darthVaderMenu.jpg';

const Home = () => {
  useEffect(() => {});
  return (
    <main className={style.main}>
      <div className={style.main__central}>
        <img className={style['main__central--image']} src={imageCentralMenu} alt="Darth Vader" />
        <h1 className={style['main__central--title']}>Star Wars!</h1>
      </div>
      <Link className={`${style['main__link-characters']} ${style.link_position}`} to="characters">
        Characters
      </Link>
      <Link className={`${style['main__link-planets']} ${style.link_position}`} to="planets">
        Planets
      </Link>
      <Link className={`${style['main__link-species']} ${style.link_position}`} to="species">
        Species
      </Link>
      <Link className={`${style['main__link-starships']} ${style.link_position}`} to="starships">
        Starships
      </Link>
      <Link className={`${style['main__link-vehicles']} ${style.link_position}`} to="vehicles">
        Vehicles
      </Link>
      <Link className={`${style['main__link-films']} ${style.link_position}`} to="films">
        Films
      </Link>
    </main>
  );
};

export default Home;
