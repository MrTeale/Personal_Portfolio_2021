import './Biography.css';
import fun_image from './images/800x450.jpg'
import fun_image_2 from './images/1400x1000.jpg'

function Biography() {
  return (
    <div id="about" className="Biography" class="2xl:mx-80 xl:mx-60 lg:mx-40 mx-10 md:mt-24 mt-12 pt-12">
        <h2 class="text-black lg:text-9xl text-6xl w-full">BIOGRAPHY</h2>
        <div class="w-full md:grid md:grid-cols-5 md:grid-rows-1 md:auto-cols-min mt-10">
            <p class="bio md:col-start-4 md:col-span-2 md:row-start-1 text-left lg:ml-32 md:ml-16 md:my-auto text-base md:text-xl mb-10">Engineer. Adventurer. Founder. Visionary. <br/> Lachlan Teale’s fanatical lifestyle is only matched by his abilities as a programmer.</p>
            <div class="md:col-start-1 md:col-span-3 md:row-start-1">
                <img class="" src={fun_image} alt=""/>
            </div>
        </div>
        <div class="w-full md:grid md:grid-cols-2 md:grid-rows-1 md:auto-cols-min md:mt-16 mt-12">
            <img class="md:object-fit md:col-start-2 md:row-start-1 md:w-auto float-left w-1/2 mr-5 mb-5" src={fun_image_2} alt=""/>
            <p class="bio md:col-start-1 md:row-start-1 md:text-xl text-base md:ml-16 xl:mt-32 lg:mt-24 md:mt-16 xl:mr-32 lg:mr-24 md:mr-16 md:w-auto">Lachlan Teale applies his skills to solving complicated problems through the lens of Software Engineer and an Entrepreneur. <br/><br/>With experience as a Machine Learning Engineer, Data Scientist, Analytics Team Lead and Co-founder, Lachlan's led large cross-functional teams for organisations in Mining, Healthcare and Finance.</p>
            {/* <a href="bio" class="bio underline text-base hover:text-ironmanred col-start-1 row-start-1 ml-16 mt-auto mb-16 mr-20">Read a more in-depth background</a> */}
        </div>
   </div>
  );
}

// 
export default Biography;
