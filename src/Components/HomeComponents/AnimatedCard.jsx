import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider';
import './Card.css';

const AnimatedCard = ({ item }) => {
  const [ authUser ] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBuyNowClick = (e) => {
  e.preventDefault();
  if (!authUser) {
    // If not logged in, redirect to signup with return URL
    navigate('/signup', { state: { redirectTo: `/bookdetail/${item._id}` } });
  } else {
    // If logged in, go directly to book detail page
    navigate(`/bookdetail/${item._id}`);
  }
};

  return (
    <div className="mt-5 mb-10 ml-5">
      <div id="card" className="card dark:bg-black dark:shadow-xl dark:shadow-slate-100">
        <div className="bg dark:bg-black dark:outline-2 dark:outline-black">
          <figure><img className="h-44 w-full" src={item.img} alt={item.title} /></figure>
          <div className="card-body">
            <h2 className="card-title dark:text-blue-600">{item.title}</h2>
            <p className="text-sm text-justify dark:text-slate-400 line-clamp-3">{item.disc}</p>
            <div className="card-actions justify-between">
              <div className="badge font-semibold border-blue-500 badge-outline dark:border-blue-300 dark:text-slate-300">
                ${item.price}
              </div>

              <button
                onClick={handleBuyNowClick}
                className="border border-blue-500 rounded-lg px-2 text-[12px] py-1 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer dark:hover:bg-blue-700 dark:border-blue-700 dark:text-slate-100"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="blob dark:bg-[#ff9966]"></div>
      </div>
    </div>
  );
};

export default AnimatedCard;