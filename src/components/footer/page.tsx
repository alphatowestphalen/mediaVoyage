import React from "react";

export default function page() {
  return (

    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="">
          
          <div className="flex gap-2 justify-around">
            <div className=''>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
              <ul className="text-gray-600 ml-0  dark:text-gray-400 font-medium">
                <li >
                  <a href="/" className="hover:underline">Email: mediaVoyage@gmail.com</a>
                </li>
                <li className='mt-3'>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tel: 034 00 000 00 / 034 00 000 00  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 up  percase dark:text-white">ADRESSE</h2>
              <ul className="text-gray-600 ml-0 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Fianarantsoa Talata Maty</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Lot: IG 53B</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 ml-0 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Contact </a>Veillez comptacter 
          </span>
          
        </div> */}
      </div>
    </footer>

  )
}
