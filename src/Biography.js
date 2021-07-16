import './Biography.css';

function Biography() {
  return (
    <div className="Biography" class="lg:mx-80 mt-36">
        <h2 class="text-gray-800 lg:text-8xl w-full">BIOGRAPHY</h2>
        <div class="w-full grid grid-cols-5 grid-rows-1 auto-cols-min mt-10">
            <div class="col-start-1 col-span-3 row-start-1">
                <img class="" src="https://via.placeholder.com/800x450?text=Photo-of-me-doing-something" alt=""/>
                {/* <p class="bio mx-32 mt-6">CAPTION TO GO HERE</p> */}
            </div>
            <p class="bio col-start-4 col-span-2 row-start-1 text-left ml-32 my-auto text-xl">Engineer. Adventurer. Founder. Visionary. <br/> Lachlan Teale’s fanatical lifestyle is only matched by his abilities as a programmer.</p>
        </div>
        <div class="w-full grid grid-cols-2 grid-rows-1 auto-cols-min mt-16">
            <div class="col-start-2 row-start-1">
                <img class="object-fit" src="https://via.placeholder.com/500x700?text=Photo-of-me-front-on" alt=""/>
                {/* <p class="caption">Image Caption Here under photo 2</p> */}
            </div>
            <p class="bio col-start-1 row-start-1 ml-32 mt-32 mr-20 text-xl">Lachlan Teale applies his skills to solving complicated problems both as Software Engineer and an Entrepreneur.</p>
            <a href="bio" class="bio text-base hover:text-ironmanred col-start-1 row-start-1 ml-32 mt-auto mb-16 mr-20"><u>Read a more in-depth background</u></a>
        </div>
   </div>
  );
}

export default Biography;