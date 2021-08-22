import React, { Component } from 'react';
import './Experience.css';

const descriptions = {
  deloitte: {title: "Deloitte Australia", position: "Senior Consultant", location: "Brisbane, Australia", description: "DELOITEE DESCRIPTION HERE", start: "August 2021", end: "Present"},
  mater: {title: "Mater Pathology", position: "Business Analytics Lead", location: "Brisbane, Australia", description: (<p class="mt-10 text-xl description-text">I was tasked with proposing and developing a solution to an ongoing billing issue costing the company upwards of 6 figures annually. Utilising skills within software development, business management and data science, the solution utilised optical character recognition (OCR) in Python hosted on Cloud Infrastructure to allow for fast iteration, ease of use/development with limited APIs and resulted in a superior system than the manual processing previously employed within a team of 4 individuals.<br/><br/>I then proceeded to work on improving business processes utilising automation and exploratory data analysis focused on the commercial impact on the organisation.</p>), start: "March 2020", end: "August 2021"},
  athenix: {title: "Athenix", position: "Co-Founder", location: "Brisbane, Australia", description: (<p class="mt-10 text-xl description-text">Co-Founded and developed a solution to help customers make better decisions with their investments, through automation, proper risk management processes and backtesting on historical data, all without the need to code.<br/><br/>A member of the Suncorp Digital Labs Incubator 2.0 whereby we’re focused on customer testing, UX/UI design and ensuring our product market fit.</p>), start: "September 2019", end: "February 2020"},
  petra: {title: "PETRA Data Science", position: "Data Scientist", location: "Brisbane, Australia", description: (<p class="mt-10 text-xl description-text">I was tasked with designing solutions for problems faced by large, multinational mining companies. Working on tasks such as preventative maintenance, computer vision and optimisation, I utilised machine learning and statistical models written in python to further their business and create new opportunities and value for each client.</p>), start: "August 2018", end: "September 2019"},
  sitesee: {title: "SiteSee", position: "Machine Learning Engineer", location: "Brisbane, Australia", description: (<p class="mt-10 text-xl description-text">I maintained a package that allows for semantic segmentation of antenna tower scenes utilising U-Net (fully connected CNN with transposed convolution) and ResNet (Dilated Convolution with Bilinear Interpolation and Conditional Random Field). Implementations being in Tensorflow.<br/><br/>Alongside this, I converted the existing machine learning package to utilise an Xception network (an intermediate step in-between regular convolution and the depth-wise separable convolution operation) in an Encoder-Decoder structure.<br/><br/>These packages were being used for a number of large infrastructure clients such as oil and gas, telecommunications and energy related assets.</p>), start: "February 2018", end: "August 2018"}
}

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleCardClick = () => {
    this.setState({
      skillSelected: "",
      show: false,
      card: (<div></div>)
    });
   
  };

  handleClick = (i) => {
    this.setState({
      skillSelected: i,
      show: true,
      card: (
        <div class="fixed inset-0 bg-gray-800 bg-opacity-25 w-screen h-screen z-50 flex" onClick={() => this.handleCardClick()}>
          <div class="mx-80 bg-customwhite rounded-lg my-auto w-full h-4/5">
            <div class="w-full relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 absolute top-2 right-2 hover:stroke-current hover:text-ironmanred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div class="px-16 py-16">
              <div class="grid grid-cols-2 grid-rows-1">
                <div class="col-start-1 row-start-1">
                  <h2 class="text-5xl font-semibold ">{descriptions[i].position}</h2>
                  <h2 class="text-6xl font-semibold mt-6 text-ironmanred">{descriptions[i].title}</h2>
                </div>
                <div class="col-start-2 row-start-1 mb-2 mt-auto">
                  <h3 class="text-2xl text-right">{descriptions[i].location}</h3>
                  <h3 class="text-2xl text-right flex justify-end"><span class="text-ironmanred">{descriptions[i].start}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> {descriptions[i].end}</h3>
                </div>
              </div>
              {descriptions[i].description}
            </div>
          </div>
        </div>
          )
    });
    
  };

        render() {
    const experience = [
        {"key": "deloitte", "text": "DELOITTE", "start": "August 2021", "end": "Present" },
        {"key": "mater", "text": "MATER PATHOLOGY", "start": "Mar 2020", "end": "August 2021" },
        {"key": "athenix", "text": "ATHENIX", "start": "Sep 2019", "end": "Feb 2020" },
        {"key": "petra", "text": "PETRA DATA SCIENCE", "start": "Aug 2018", "end": "Sep 2019" },
        {"key": "sitesee", "text": "SITESEE", "start": "Feb 2018", "end": "Aug 2018" },];

        return (
        <div id="experience" className="Experience" class="w-full mt-32 sm:mt-96 md:mt-48 lg:mt-72 mb-12 md:mb-32">
          <div class="z-1 sticky top-0 ">
            <h1 class="text-transparent scalable-text text-8_5xl sm:text-14xl md:text-16xl lg:text-18xl xl:text-20xl text-center stroke">EXPERIENCE</h1>
          </div>

          <div class="relative mx-10 sm:mx-20 md:mx-28 lg:mx-40 xl:mx-60 2xl:mx-80 z-2 -mt-32 sm:-mt-48 md:-mt-64 lg:-mt-72 xl:-mt-96">
            {experience.map((job, index) => {

              return (<div class={index === 0 ? "mt-24" : "sm:flex sm:mt-10"}>
                <h2 class="text-6_5xl sm:text-6xl md:text-6_5xl lg:text-8xl xl:text-8_5xl 2xl:text-9xl text-black opacity-60 hover:opacity-100" onClick={() => this.handleClick(job.key)}>{job.text}</h2>
                <div class="hidden ml-3 2xl:ml-5 -mt-2 sm:flex">
                  <h3 class="text-ironmanred mr-2 text-base xl:text-xl">{job.start}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <h3 class="ml-2 text-base xl:text-xl">{job.end}</h3>
                </div>
              </div>)
            })
            }
          </div>
          {this.state.card}
        </div>
        );
  }
}

