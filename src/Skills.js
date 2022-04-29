import React, { Component } from 'react';

const descriptions = {
  python: "Due to his experience in machine learning and data science, Python is Lachlan's main choice of language. He loves it's diversity of applications coupled with it's easy to read, simple syntax and has utilised it for a wide array of personal and professional projects such as: optimising mine sites, predicting failures of machinery, and backend rest APIs for web app frontends.",
  tensorflow: "Being exposed to machine learning, Lachlan's framework of choice for building machine learning models is Tensorflow (with a flavour of Keras too). Lachlan has built models with over 22.8 million parameters, maintained the infrastructure they run on and had a good time maxing out V100 GPUs on AWS. Tasks such as computer vision, reinforcement learning, voice recognition and forecasting are all use cases that Lachlan has spent his professional career building solutions for.",
  webdev: "Lachlan began his passion for software developement and programming through web development taught in his high school IT class. Since then, he's developped a range of reporting dashboards, web apps and personal website as an outlet for his more backend work. An example of his work is this current website you are viewing or ENSO down below written in React Native.",
  cloud: "Lachlan has deployed web services, microservices, API, and Machine Learning models onto a range of cloud providers and their respective architectures. Currently working on his AWS ML certification, he is mostly adpet in their offerings but that doesn't limit him as clients previously have asked for it to be deployed on their choice of provider or even on their own onsite data centers.",
  sql: "An essential skill for any data or web backend related career, Lachlan is adept at designing, building and maintaining databases and is highly comfortable in writing some SQL queries for a wide arrange of tasks. He won't drop your table \"on accident\" "
};

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillSelected: "python",
      activeClass: "text-7xl md:text-8xl xl:text-9xl text-ironmanred font-formula",
      otherClass: "text-7xl md:text-8xl xl:text-9xl stroke text-transparent hover:text-black font-formula"
    }
  }

  handleClick = (i) => {
    this.setState({ skillSelected: i });
  };

  render() {
    const skills = [{ "key": "python", "text": "PYTHON" }, { "key": "tensorflow", "text": "TENSORFLOW" }, { "key": "webdev", "text": "HTML/CSS/REACT" }, {"key": "sql", "text": "SQL"}, { "key": "cloud", "text": "AWS/GCP/AZURE" }];
    return (
      <div id="skills" className="Skills" class="w-auto lg:mt-44 pt-12">
        <h1 class="text-5xl lg:text-6xl text-black pb-5 border-b-2 border-customgray 2xl:mx-80 xl:mx-60 md:mx-40 mx-10 font-formula">SKILLS & TOOLS</h1>

        <div class="scrollbarhide md:mt-6 xl:mt-8 mb-4 flex overflow-x-scroll pt-8 overflow-y-hidden">
          {skills.map((skill, index, skills) => {
            return <h2 class={(index !== 0 && index !== skills.length - 1 ? "lg:mx-10 mx-4 " : "") + (index === 0 ? "2xl:ml-80 xl:ml-60 lg:ml-40 md:ml-40 ml-10 lg:mr-10 mr-4 ": "") + (index === skills.length - 1 ? "after:2xl:mr-80 after:xl:mr-60 after:lg:mr-40 after:md:mr-40 after:mr-10 after:w-px lg:ml-10 ml-4 ": "") + (this.state.skillSelected === skill.key ? this.state.activeClass : this.state.otherClass)} onClick={() => this.handleClick(skill.key)}>{skill.text}</h2>})
          }
        </div>

        <div class="2xl:mx-80 xl:mx-60 md:mx-40 mx-10 pt-5 border-t-2 h-120 border-customgray">
          
          <h3 class="text-xl md:text-2xl mt-5 font-tt-demibold">{descriptions[this.state.skillSelected]}</h3>
        </div>
      </div>
    );
  }
};