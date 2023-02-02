import React from 'react';
import Feature from '../../components/feature/Feature';
import vihaan from '../../assets/vihaan2.png';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">ABOUT US</h1>
    </div>
    <img src={vihaan} />
    <br />
    <div className="gpt3__whatgpt3-feature">
      <Feature text="One of the biggest IEEE Student branches in Delhi, IEEE DTU has emerged as the most active & prolific student organisation in the past 35 years. With over 400 active student members. IEEE DTU provides students extensive opportunities for skill development in various domains of engineering by actively organising seminars, SIGs and workshops by senior members of the organisation and collaborating with other premier institutions." />
    </div>
    <br />
    <div className="gpt3__whatgpt3-feature">
      <Feature text="Vihaan is an annual event organized by IEEE DU, a university wide professional organization dedicated to encourage students to take up and continue their careers in STEM Fields. IEEE DU believes in encouraging talent that is not bounded by gender inequalities and with Vihaan, IEEE DTU aims at carrying this thought forward. The event is a 24 hour Hackathon which provides a platform to budding programmers to come up with a solution to an existing problem using technology. Students can participate in a team size of upto 4 members." />
    </div>
  </div>
);

export default WhatGPT3;
