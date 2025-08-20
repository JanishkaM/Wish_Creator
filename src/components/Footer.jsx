import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container mx-auto mt-20 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
		<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com" className="hover:underline" target="_blank">doxDesigner Facebook page</a>. All Rights Reserved.
    </span>
		<ul className="flex flex-wrap items-center mt-3 sm:mt-0">
			<li>
				<a href="https://www.facebook.com/people/DoxDesigner/61556561968928/" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400" target="_blank"><i className="bi bi-facebook"></i> About</a>
			</li>
			<li>
				<Link to='/send-message' className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"><i className="bi bi-envelope-paper-heart-fill"></i> Send Message</Link>
			</li>
		</ul>
	</footer>
  )
}
