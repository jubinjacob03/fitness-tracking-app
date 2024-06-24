import React from "react";

const Footer = () => {
   const currYear = new Date().getFullYear();

  return (
    <div>
      <footer class="absolute bottom-0 left-0 mt-auto w-full py-2 px-4 sm:px-6 lg:px-8 mx-auto bg-amber-500">
        <div class="grid grid-cols-1 items-center gap-5 text-white text-center">
            All rights reserved &copy; {currYear} Fit-Help 
        </div>
      </footer>
    </div>
  );
};

export default Footer;
