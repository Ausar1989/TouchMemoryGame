import React from 'react';
import './Icon.css';
import Planet from '../Planet';

const Icon = props => (
    <div
      className={
       props.shake
        ? 'icon d-flex flex-wrap justify-content-center shake'
        : 'icon d-flex flex-wrap justify-content-center'
      }
    >
       {props.Planet.map((a, i) => <Planet name={a} key={i} clickEvent={props.clickEvent} />)}
    </div>
);




  export default Icon;
