import './Navigation.css';

function Navigation() {
    return (
        <div className="Navigation">
            <nav class="flex bg-customwhite flex-wrap items-center justify-between p-4">
                <div class="lg:order-1 w-auto lg:w-1/3 lg:text-left">
                    <p class="invisible lg:visible uppercase text-2xl lg:ml-60 text-black font-semibold font-heading">
                        Lachlan Teale
                    </p>
                </div>
                {/* <div class="block lg:hidden">
                    <button class="navbar-burger flex items-center py-2 px-3 text-ironmanred rounded border border-ironmanred">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu
                            </title>
                            <path d="M0 5h20v2H0V3zm0 10h20v2H0v-2z">
                            </path>
                        </svg>
                    </button>
                </div> */}
                <div class="hidden lg:order-2 lg:block w-full lg:w-1/3 lg:text-center">
                    <a class="uppercase block lg:inline-block mt-4 lg:mt-0 xl:mr-10 lg:mr-4 text-black hover:text-ironmanred text-xl" href="#about">
                        About
                    </a>
                    <a class="uppercase block lg:inline-block mt-4 lg:mt-0 xl:mr-10 lg:mr-4 text-black hover:text-ironmanred text-xl" href="#experience">
                        Experience
                    </a>
                    <a class="uppercase block lg:inline-block mt-4 lg:mt-0 xl:mr-10 lg:mr-4 text-black hover:text-ironmanred text-xl" href="#skills">
                        Skills
                    </a>
                    <a class="uppercase block lg:inline-block mt-4 lg:mt-0 text-black hover:text-ironmanred text-xl" href="#projects">
                        Projects
                    </a>
                </div>
                <div class="hidden lg:order-3 lg:block w-full lg:w-1/3 lg:text-right">
                    <a class="uppercase block lg:inline-block mt-4 lg:mt-0 mr-60 text-ironmanred hover:text-black text-xl" href="#contact">
                        Contact Me
                    </a>

                </div>
            </nav>

        </div>
    );
}

export default Navigation;
