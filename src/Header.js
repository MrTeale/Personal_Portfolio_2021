import './Header.css';

function Header() {
  return (
    <div className="Header" class="2xl:mx-40 xl:mx-32 lg:mx-24 md:mx-16 sm:mx-10 mx-0 mt-24 lg:mt-40 sm:relative">
      <div class="z-40 flex flex-wrap w-full absolute">

        <div className="HeaderRight" class="sm:w-2/3 w-full lg:-mt-20 -mt-16 mr-auto ml-auto">
          <h1 class="text-black 2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl lg:ml-40 md:ml-36 sm:ml-20 text-center sm:text-left">LACHLAN TEALE</h1>
          <h2 class="text-ironmanred 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl md:ml-20 sm:ml-10 text-center sm:text-left">SOFTWARE ENGINEER</h2>
        </div>

        <div className="HeaderLeft" class="sm:w-1/3 w-full">
          <h1 class="text-black lg:text-2xl text-xl text-right xl:mr-24 lg:mr-12 mr-6 sm:-mt-8 invisible sm:visible">Brisbane, Australia</h1>
        </div>

      </div>
      <img class="z-10 w-full h-120 sm:h-auto bg-auto" src="https://via.placeholder.com/1200x600?text=Cool-Header-Here" alt=""/>
   </div>
  );
}

export default Header;
