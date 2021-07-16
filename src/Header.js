import './Header.css';

function Header() {
  return (
    <div className="Header" class="w-auto lg:mx-40 lg:mt-40">
      <div class="lg:z-40 lg:flex w-full absolute">

        <div className="HeaderRight" class="w-1/2 lg:-mt-20">
          {/* Must Align Name with end of Software. Will Figure out later */}
          <h1 class="text-gray-800 lg:text-5xl lg:ml-40">LACHLAN TEALE</h1>
          <h2 class="text-ironmanred lg:text-8xl ml-20">SOFTWARE ENGINEER</h2>
        </div>

        <div className="HeaderLeft" class="w-1/2 mr-0">
          <h1 class="text-gray-800 lg:text-xl text-right mr-100 -mt-10">Brisbane, Australia</h1>
        </div>

      </div>
      <img class="w-full z-10" src="https://via.placeholder.com/1200x600?text=Cool-Header-Here" alt=""/>
   </div>
  );
}

export default Header;
