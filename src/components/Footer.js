import React from 'react'

const Footer = () => {
  return (
    <>
    
<br></br><br></br><br></br>

<footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="data:image/png;base64,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" class="mr-3 h-8" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Book Store</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://flowbite.com/" class="hover:underline">Create</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href=" " class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href=" " class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href=" " class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href=" " class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href=" " class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href=" " class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span class="sr-only">GitHub account</span>
            </a>
            <a href=" " class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                <span class="sr-only"> account</span>
            </a>
        </div>
    </div>
</footer>



    </>
  )
}

export default Footer;