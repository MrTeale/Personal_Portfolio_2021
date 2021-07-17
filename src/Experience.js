import './Experience.css';

function Experience() {
  return (
    <div id="experience" className="Experience" class="w-full mt-36">
      <div class="z-1 sticky top-0 ">
        <h1 class="text-customwhite text-20xl text-center stroke">EXPERIENCE</h1>
      </div>

      <div class="relative mx-80 z-2 -mt-96">
        <div class="flex mt-10">
          <h2 class="text-9xl text-black opacity-60 hover:opacity-100">MATER PATHOLOGY</h2>
          <div class="flex ml-5 -mt-2">
            <h3 class="text-ironmanred mr-2 text-2xl">Mar 2020</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <h3 class="ml-2 text-2xl">Present</h3>
          </div>
        </div>

        <div class="flex mt-10">
          <h2 class="text-9xl text-black opacity-60 hover:opacity-100">ATHENIX</h2>
          <div class="flex ml-5 -mt-2">
            <h3 class="text-ironmanred mr-2 text-2xl">Sep 2019</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <h3 class="ml-2 text-2xl">Feb 2020</h3>
          </div>
        </div>

        <div class="flex mt-10">
          <h2 class="text-9xl text-black opacity-60 hover:opacity-100">PETRA DATA SCIENCE</h2>
          <div class="flex ml-5 -mt-2">
            <h3 class="text-ironmanred mr-2 text-2xl">Aug 2018</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <h3 class="ml-2 text-2xl">Sep 2019</h3>
          </div>
        </div>

        <div class="flex mt-10">
          <h2 class="text-9xl text-black opacity-60 hover:opacity-100">SITESEE</h2>
          <div class="flex ml-5 -mt-2">
            <h3 class="text-ironmanred mr-2 text-2xl">Feb 2018</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <h3 class="ml-2 text-2xl">Aug 2018</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
