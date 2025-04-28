import React from 'react'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <>

    <footer className=" footer p-10 mt-10 text-neutral-content bg-slate-800">
  <aside>
    <Link to="/" className="text-5xl font-[Agbalumo] text-blue-600 pb-3">BookMitra</Link>
    <p>Copyright © 2025 - All rights reserved.</p>
  </aside> 
  <nav>
    <h4 className="footer-title text-[16px] underline">Company</h4> 
    <Link to="/about" className="link link-hover">About us</Link>
    <Link to="/contact" className="link link-hover">Contact</Link>
    <Link className="link link-hover">Jobs</Link>
    <Link to="/contact" className="link link-hover">FAQs</Link>
  </nav> 
  <nav>
    <h4 className="footer-title text-[16px] underline">Legal</h4> 
    <Link className="link link-hover">Terms of use</Link>
    <Link className="link link-hover">Privacy policy</Link>
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
  <nav>
    <h2 className="footer-title text-[16px] underline">Follow us</h2> 
    <div className="grid grid-flow-col gap-4">
  <a
    href="https://twitter.com/https://x.com/KrishnaBis63077?t=ItFB5sSlDf96slhpvL1uMg&s=09"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-blue-500 rounded-full p-2 hover:bg-slate-800"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="fill-current cursor-pointer"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    </svg>
  </a>
  <a
  href="https://www.instagram.com/krish_bisht_25/"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-blue-500 rounded-full p-2 hover:bg-slate-800"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    className="fill-current cursor-pointer"
  >
    <path d="M7.5 2h9C19.985 2 22 4.015 22 6.5v9c0 2.485-2.015 4.5-4.5 4.5h-9C5.015 20 3 17.985 3 15.5v-9C3 4.015 5.015 2 7.5 2zm0 2C6.12 4 5 5.12 5 6.5v9c0 1.38 1.12 2.5 2.5 2.5h9c1.38 0 2.5-1.12 2.5-2.5v-9C19 5.12 17.88 4 16.5 4h-9zm4.5 3.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 2C10.12 9.5 9 10.62 9 12s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm5-2.5a1 1 0 110 2 1 1 0 010-2z"></path>
  </svg>
</a>

  <a
  href="https://www.linkedin.com/in/krishna-bisht-5619ab255/"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-blue-500 rounded-full p-2 hover:bg-slate-800"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    className="fill-current cursor-pointer"
  >
    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.44c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.96v5.72H9.3V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.39 4.31 5.5v6.26z"></path>
  </svg>
</a>

</div>

  </nav>
</footer>
    </>
  )
}

export default Footer