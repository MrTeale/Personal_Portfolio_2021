function Projects() {
    return (
        <div id="projects" className="Projects" class="w-full  mt-40">
            <h2 class="text-5xl md:text-7xl lg:text-9xl w-auto mx-10 md:mx-40 lg:mx-80 text-ironmanred font-formula">PROJECTS</h2>

            <div class="flex overflow-x-scroll scrollbarhide overflow-y-hidden sm:mb-32">

                <div class="bg-customwhite flex-none w-96 h-120 mx-6 p-10 md:p-8 lg:p-10 ml-0 md:ml-32 lg:ml-70  relative">
                    <h1 class=" text-5xl font-formula">Personal Website</h1>
                    <h2 class="font-tt-demibold">This is Lachlan's Personal Portfolio, the one you're staring at right now. Built over the course of a week and fine tuned afterwards, the website embodies Lachlan's aesthetic at this current moment. If you'd like to see how it was made, click below. </h2>
                    <div class="absolute bottom-0 w-full">
                        <h3 class="text-3xl font-formula">TOOLS USED</h3>
                        <div class="grid grid-cols-2">
                            <h3 class="text-xl font-tt-demibold">HTML/CSS</h3>
                            <h3 class="text-xl font-tt-demibold">React</h3>
                            <h3 class="text-xl font-tt-demibold">Tailwind CSS</h3>
                            <h3 class="text-xl font-tt-demibold invisible">EMPTY</h3>
                        </div>
                        <div class="flex mt-4 h-8">
                            <a class="mr-4" href="https://github.com/MrTeale/Personal_Portfolio_2021"><svg class="w-8 h-8 hover:fill-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                            <a class="" href="https://lachlanteale.com"><svg class="w-9 h-9 hover:stroke-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></a>
                        </div>
                    </div>
                    
                </div>

                <div class="bg-customwhite flex-none w-96 h-120 mx-6 p-10 relative">
                    <h1 class=" text-5xl font-formula">BOM Radar</h1>
                    <h2 class="font-tt-demibold">This was developped in order to allow easy posting of Lachlan's local rain radar into Slack channels by creating a gif from the images and serving this at a URL.</h2>
                    <div class="absolute bottom-0 w-full">
                        <h3 class="text-3xl font-formula">TOOLS USED</h3>
                        <div class="grid grid-cols-2">
                            <h3 class="text-xl font-tt-demibold">Python 3</h3>
                            <h3 class="text-xl font-tt-demibold">Serverless</h3>
                            <h3 class="text-xl font-tt-demibold">AWS API Gateway</h3>
                            <h3 class="text-xl font-tt-demibold">AWS Lambda</h3>
                        </div>
                        <div class="flex mt-4 h-8">
                            <a class="mr-4" href="https://github.com/MrTeale/bom-radar"><svg class="w-8 h-8 hover:fill-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                            <a class="" href="https://radar.lachlanteale.com"><svg class="w-9 h-9 hover:stroke-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></a>
                        </div>
                    </div>
                </div>

                <div class="bg-customwhite flex-none w-96 h-120 mx-6 p-10 relative">
                    <h1 class=" text-5xl font-formula">Daily NYT</h1>
                    <h2 class="font-tt-demibold">This is an ongoing art piece whereby a 32" e-ink display automatically updates to showcase the latest New York Times front page. It's purpose is to allow a very non-invasive daily view of the world.</h2>
                    <div class="absolute bottom-0 w-full">
                        <h3 class="text-3xl font-formula">TOOLS USED</h3>
                        <div class="grid grid-cols-2">
                            <h3 class="text-xl font-tt-demibold">Python 3</h3>
                            <h3 class="text-xl font-tt-demibold">Serverless</h3>
                            <h3 class="text-xl font-tt-demibold">AWS API Gateway</h3>
                            <h3 class="text-xl font-tt-demibold">AWS Lambda</h3>
                        </div>
                        <div class="flex mt-4 h-8">
                            <a class="mr-4" href="https://github.com/MrTeale/daily-nyt"><svg class="w-8 h-8 hover:fill-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                            <a class="" href="https://nyt.lachlanteale.com"><svg class="w-9 h-9 hover:stroke-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></a>
                        </div>
                    </div>
                </div>

                <div class="bg-customwhite flex-none w-96 h-120 mx-6 p-10 relative">
                    <h1 class=" text-5xl font-formula">Tailwind-Basekick</h1>
                    <h2 class="font-tt-demibold">This is a TailwindCSS plugin that aligns text to it's baseline. Similarly to the open source tool by SEEK called <a class="underline decoration-black decoration-2" href="https://www.npmjs.com/package/@capsizecss/core">Capsize</a> (which this plugin was based upon), it aligns text using a combination of negative top margin to the before psuedo-element and a translation on the Y axis to the element itself.</h2>
                    <div class="absolute bottom-0 w-full">
                        <h3 class="text-3xl font-formula">TOOLS USED</h3>
                        <div class="grid grid-cols-2">
                            <h3 class="text-xl font-tt-demibold">Javascript</h3>
                            <h3 class="text-xl font-tt-demibold">TailwindCSS</h3>
                            <h3 class="text-xl font-tt-demibold invisible">EMPTY</h3>
                            <h3 class="text-xl font-tt-demibold invisible">EMPTY</h3>
                        </div>
                        <div class="flex mt-4 h-8">
                            <a class="mr-4" href="https://github.com/MrTeale/tailwind-basekick"><svg class="w-8 h-8 hover:fill-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                            <a class="" href="https://www.npmjs.com/package/tailwind-basekick"><svg class="w-9 h-9 hover:stroke-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></a>
                        </div>
                    </div>
                </div>

               <div class="bg-customwhite flex-none w-96 h-120 mx-6 p-10 relative">
                    <h1 class=" text-5xl font-formula" >CATO</h1>
                    <h2 class="font-tt-demibold">CATO is Lachlan's take on E.D.I.T.H from the Marvel Cinematic Universe's Iron Man and Spider-Man movies. This is a long term ongoing project that takes voice commands, determines the users intent and provides appropriate responses.</h2>
                    <div class="absolute bottom-0 w-full">
                        <h3 class="text-3xl font-formula">TOOLS USED</h3>
                        <div class="grid grid-cols-2">
                            <h3 class="text-xl font-tt-demibold">Python 3</h3>
                            <h3 class="text-xl font-tt-demibold">Tensorflow</h3>
                            <h3 class="text-xl font-tt-demibold">NLP/NLG</h3>
                            <h3 class="text-xl font-tt-demibold">Restful APIs</h3>
                        </div>
                        <div class="flex mt-4 h-8">
                            {/* <a class="mr-4" href="#project"><svg class="w-8 h-8 hover:fill-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a> */}
                            {/* <a class="" href="#project"><svg class="w-9 h-9 hover:stroke-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></a> */}
                        </div>
                    </div>
                    
                </div>

                <div class="bg-customwhite flex-none w-96 h-120 mx-6 p-10 md:p-8 lg:p-10 mr-0 md:mr-32 lg:mr-70 relative">
                    <h1 class=" text-5xl font-formula">ENSO</h1>
                    <h2 class="font-tt-demibold">This project is an iOS and Android app built in React Native as a response to Lachlan's growing frustration with OANDA's poorly designed version. This was designed in Adobe XD and implemented over the course of on and off weekends.</h2>
                    <div class="absolute bottom-0 w-full">
                        <h3 class="text-3xl font-formula">TOOLS USED</h3>
                        <div class="grid grid-cols-2">
                            <h3 class="text-xl font-tt-demibold">React Native</h3>
                            <h3 class="text-xl font-tt-demibold">AWS Amplify</h3>
                            <h3 class="text-xl font-tt-demibold">iOS/Android</h3>
                            <h3 class="text-xl font-tt-demibold">React Native</h3>
                        </div>
                        <div class="flex mt-4 h-8">
                            <a class="mr-4" href="https://github.com/MrTeale/enso"><svg class="w-8 h-8 hover:fill-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                            {/* <a class="" href="#project"><svg class="w-9 h-9 hover:stroke-current hover:text-ironmanred" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <p class="visible sm:hidden mt-10 mb-32 w-auto mx-10 text-ironmanred inline-flex align-right text-xl ">Scroll Across <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
        </div>
    );
}

export default Projects;
