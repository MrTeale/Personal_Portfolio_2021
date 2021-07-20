import './Header.css';

function Header() {
  return (
    <div className="Header" class="w-auto lg:mx-40 lg:mt-40 relative">
      <div class="lg:z-40 lg:flex w-full absolute">

        <div className="HeaderRight" class="w-2/3 lg:-mt-20">
          {/* Must Align Name with end of Software. Will Figure out later */}
          <h1 class="text-black lg:text-7xl lg:ml-40">LACHLAN TEALE</h1>
          <h2 class="text-ironmanred lg:text-9xl ml-20">SOFTWARE ENGINEER</h2>
        </div>

        <div className="HeaderLeft" class="w-1/3">
          <h1 class="text-black lg:text-2xl text-right mr-24 -mt-10">Brisbane, Australia</h1>
        </div>

      </div>
      <img class="w-full z-10" src="https://via.placeholder.com/1200x600?text=Cool-Header-Here" alt=""/>
   </div>
  );
}

export default Header;
