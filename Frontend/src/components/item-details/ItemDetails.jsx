import React from "react"
import { useNavigate } from "react-router-dom"
import Counter from "../counter/counter"
import { Link } from "react-router-dom"

// styles
import { ItemDetailsStyle } from "./ItemDetails.styles"
import useResize from "../../hooks/useResize"

function ItemDetails({ product, onAdd, goCart }) {
  const navigate = useNavigate()
  const { width } = useResize()

  return (
    <>
      {!product?.image ? (
        <div className='preloader-container'>
          <img
            className='preloader'
            src='https://i.imgur.com/NTByPHS.gif'
            alt='gif'
          />
        </div>
      ) : (
        <ItemDetailsStyle>
          <div
            className='arrow-back'
            style={{ display: width > 960 ? "none" : "" }}
          >
            <span onClick={() => navigate("/")}>Home</span>
            <span onClick={() => navigate("/products")}>Products</span>
          </div>

          <div className='grid-centrador'>
            <section className='itemDetailsContainer'>
              <div className='imageContainer'>
                <img
                  src={product.image}
                  alt={product.title + "-" + product._id}
                  className='img-detail'
                />
              </div>

              <div className='detailsItems'>
                <div className='block'>
                  <span className='title'>{product.title}</span>
                </div>

                <div className='block'>
                  <span className='price-detail'>Price: ${product.price}</span>
                </div>

                <div className='block'>
                  <span className='description-detail'>
                    {product.description}
                  </span>
                </div>

                <div className='block'>
                  <div className='pay-delivery'>
                    <div className='pay-delivery-options'>
                      <div className='img-pay-delivery'>
                        <img
                          src='https://i.imgur.com/nbV08hR.png'
                          alt='paypal'
                        />
                        <img
                          src='https://i.imgur.com/vwVpgJJ.png'
                          alt='efectivo'
                        />
                        <img
                          src='https://i.imgur.com/84JsEeM.png'
                          alt='delivery'
                        />
                        <img
                          src='https://i.imgur.com/7Mk43zS.png'
                          alt='local'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {goCart ? (
                  <div className='finish-shop-container'>
                    <Link to='/cart' className='finish-shop'>
                      Finish shop
                    </Link>
                  </div>
                ) : (
                  <div className='block'>
                    <div className='buttonAddToCart'>
                      <Counter onAdd={onAdd} />
                    </div>
                  </div>
                )}
                <div className='block'>
                  <span>
                    SHIPPING/PICKUP Finish your purchase and choose if you want
                    to receive it at your home or pick it up, free of charge, by
                    Almagro, Belgrano, Ca??itas, Recoleta or Villa Crespo from
                    Monday to Saturday from 10 a.m. to 8 p.m.
                  </span>
                </div>
                <div className='block'>
                  <span>
                    RETURNS & EXCHANGES Local changes can be made within 30 days
                    once the purchase is made by presenting a ticket. The return
                    of your purchase is made within 10 days once the product has
                    been delivered to you. To do this, you must send an email to
                    tienda@wildwavesurf.com.
                  </span>
                </div>
              </div>
            </section>
          </div>
        </ItemDetailsStyle>
      )}
    </>
  )
}
export default ItemDetails
