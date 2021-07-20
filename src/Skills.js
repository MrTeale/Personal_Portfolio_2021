import React, { Component } from 'react';
import './Skills.css';

const descriptions = {
  python: "PYTHON HERE",
  tensorflow: "TENSORFLOW HERE",
  webdev: "WEBDEV HERE",
  cloud: "CLOUD HERE"
};

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillSelected: "python",
      activeClass: "text-9xl mx-10 text-ironmanred",
      otherClass: "text-9xl mx-10 stroke text-transparent hover:text-black"
    }
  }

  handleClick = (i) => {
    this.setState({ skillSelected: i });
  };

  render() {
    const skills = [{ "key": "python", "text": "PYTHON" }, { "key": "tensorflow", "text": "TENSORFLOW" }, { "key": "webdev", "text": "HTML/CSS/REACT" }, { "key": "cloud", "text": "AWS/GCP/AZURE" }];
    return (
      <div id="skills" className="Skills" class="w-auto lg:mt-44 pt-12">
        <h1 class="text-6xl text-black pb-5 border-b-2 border-customgray mx-80">SKILLS & TOOLS</h1>

        <div class="scrollbarhide mt-8 mb-4 flex overflow-x-scroll pt-8 overflow-y-hidden">
          {skills.map((skill, index, skills) => {
            return <h2 class={(index === 0 ? "ml-80 ": "") + (index === skills.length - 1 ? "mr-80 ": "") + (this.state.skillSelected === skill.key ? this.state.activeClass : this.state.otherClass)} onClick={() => this.handleClick(skill.key)}>{skill.text}</h2>})
          }
        </div>

        <div class="mx-80 pt-5 border-t-2 h-120 border-customgray">
          <h3 class="text-2xl mt-5">{descriptions[this.state.skillSelected]}</h3>
        </div>
      </div>
    );
  }
};