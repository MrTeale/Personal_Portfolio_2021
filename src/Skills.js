import React, { Component } from 'react';
import './Skills.css';

const descriptions = {
  python: "PYTHON HERE",
  tensorflow: "TENSORFLOW HERE",
  webdev: "WEBDEV HERE",
  cloud: "CLOUD HERE",
  sql: "SQL HERE"
};

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillSelected: "python",
      activeClass: "text-7xl md:text-8xl xl:text-9xl lg:mx-10 mx-4 text-ironmanred",
      otherClass: "text-7xl md:text-8xl xl:text-9xl lg:mx-10 mx-4 stroke text-transparent hover:text-black"
    }
  }

  handleClick = (i) => {
    this.setState({ skillSelected: i });
  };

  render() {
    const skills = [{ "key": "python", "text": "PYTHON" }, { "key": "tensorflow", "text": "TENSORFLOW" }, { "key": "webdev", "text": "HTML/CSS/REACT" }, {"key": "sql", "text": "SQL"}, { "key": "cloud", "text": "AWS/GCP/AZURE" }];
    return (
      <div id="skills" className="Skills" class="w-auto lg:mt-44 pt-12">
        <h1 class="text-5xl lg:text-6xl text-black pb-5 border-b-2 border-customgray 2xl:mx-80 xl:mx-60 md:mx-40 mx-10">SKILLS & TOOLS</h1>

        <div class="scrollbarhide md:mt-6 xl:mt-8 mb-4 flex overflow-x-scroll pt-8 overflow-y-hidden">
          {skills.map((skill, index, skills) => {
            return <h2 class={(index === 0 ? "2xl:ml-80 xl:ml-60 lg:ml-40 md:ml-40 ml-10 ": "") + (index === skills.length - 1 ? "2xl:mr-80 xl:mr-60 lg:ml-40 md:mr-40 mr-10 ": "") + (this.state.skillSelected === skill.key ? this.state.activeClass : this.state.otherClass)} onClick={() => this.handleClick(skill.key)}>{skill.text}</h2>})
          }
        </div>

        <div class="2xl:mx-80 xl:mx-60 md:mx-40 mx-10 pt-5 border-t-2 h-120 border-customgray">
          
          <h3 class="text-xl md:text-2xl mt-5">{descriptions[this.state.skillSelected]}</h3>
        </div>
      </div>
    );
  }
};