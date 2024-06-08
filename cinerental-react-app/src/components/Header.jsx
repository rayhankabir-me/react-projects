import { useContext, useState } from "react";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { MovieContext } from "../context";
import CartModal from "./CartModal";

export default function Header() {
  const [cartModal, setCartModal] = useState(false);
  const { state } = useContext(MovieContext);
  function handleShowCart() {
    setCartModal(true);
  }
  function handleCloseCart() {
    setCartModal(false);
  }
  return (
    <>
      {cartModal && <CartModal onClose={handleCloseCart} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="/">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Sun} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => handleShowCart()}
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
                {state.cartMovie.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartMovie.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
