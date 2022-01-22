import './Quote.css';

function Quote() {
  return (
    <div id="quote" className="Quote" class="mx-2 sm:mx-10 md:mx-28 lg:mx-20 md:pt-8 lg:mt-16 2xl:mt-36">
        <h1 class="uppercase xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-ironmanred text-left">“Talent means <span class="stroke text-transparent">nothing</span>,</h1>
        <h1 class="uppercase xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-ironmanred text-right xl:pr-40 lg:pr-32 md:pr-12">while <span class="stroke text-transparent">experience</span>, </h1>
        <h1 class="uppercase xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-ironmanred text-center">acquired in <span class="stroke text-transparent">humility</span> and </h1>
        <h1 class="uppercase xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-ironmanred text-right">with <span class="stroke text-transparent">hard work</span>, means</h1>
        <h1 class="uppercase xl:text-12xl lg:text-9xl md:text-8xl sm:text-7xl text-6xl text-ironmanred text-left xl:pl-60 lg:pl-32 md:pl-12 sm:pl-20 pl-24">everything.”</h1>
   </div>
  );
}

export default Quote;
