import './Quote.css';

function Quote() {
  return (
    <div id="quote" className="Quote" class="lg:mx-20 mt-36">
        <h1 class="uppercase text-9xl text-ironmanred text-left">“Talent means <span class="stroke text-transparent">nothing</span>,</h1>
        <h1 class="uppercase text-9xl text-ironmanred text-right pr-40">while <span class="stroke text-transparent">experience</span>, </h1>
        <h1 class="uppercase text-9xl text-ironmanred text-center">acquired in <span class="stroke text-transparent">humility</span> and </h1>
        <h1 class="uppercase text-9xl text-ironmanred text-right">with <span class="stroke text-transparent">hard work</span>, means</h1>
        <h1 class="uppercase text-12xl -mt-10 text-ironmanred text-left pl-60">everything.”</h1>
   </div>
  );
}

export default Quote;
