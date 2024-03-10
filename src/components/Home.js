import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import Rating from './Rating';
import Comment from './Comment';
import FormBuy from './FormBuy';
import CountDow from './CountDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDownLong, faUpLong, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const domain = "http://127.0.0.1:8000";

function Home() {


  const [quantity,setQuantity] = useState(1)
  const [productInput, setProductInput] = useState({
    "id":"",
    "price":''
  });
  const [event, setEvent] = useState('');

  const getQuantity_product = () =>{
      const data = {
        quantity:quantity,
        product:productInput
      }
      return data
  }
  

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prodcut, setProduct] = useState([])
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsVisible(currentPosition > 300); // Hiển thị nút khi cuộn trang xuống dưới 300px
    setIsScrollingUp(currentPosition > 300); // Kiểm tra xem trang có thể cuộn xuống được không
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleCartButtonClick = () => {
    const cartElement = document.getElementById('cart'); // Lấy phần tử có id là "cart"
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: 'smooth' }); // Cuộn đến phần tử "cart" một cách mượt
    }
  };

// API
useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get(`${domain}/api/product/mu1`);
          if (response.data.status){
            setProduct(response.data.data)
            console.log(response.data)
            setProductInput({
              "id": response.data.data.id ,
              "price":response.data.data.price 
            })
            setEvent(response.data.event[0])
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  fetchData();
}, []);




  return (
    <div>
      <ProductDetail handleCartButtonClick={handleCartButtonClick} domain={domain} product={prodcut} setQuantity={setQuantity} quantity={quantity}/>
      {/* rating */}
      <Rating/>
      {/* comments */}
      <Comment domain={domain} comment={prodcut.comment}/>
      {/* count dow */}
      <CountDow event={event}/>
      {/* mua hang */}
      <FormBuy prodcut={prodcut} scrollToTop={scrollToTop} domain={domain}  getQuantity_product={getQuantity_product} setQuantity={setQuantity}/>
      {/* Nút bấm lên */}
      {isVisible && (
        <>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faUpLong} />
          </button>
        </>
      )}
      {isScrollingUp && (
        <button className="scroll-to-bottom" onClick={scrollToBottom}>
          <FontAwesomeIcon icon={faDownLong} />
        </button>
      )}
      <a href="tel:0355197948" className="phone-link"><FontAwesomeIcon icon={faPhone} /></a>
      <button className="cart" onClick={handleCartButtonClick}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
}

export default Home;
