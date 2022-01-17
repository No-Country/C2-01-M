import React from "react";
import { ItemDetailsStyle } from "./ItemDetails.styles";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import Counter from "../counter/counter";
import { Link } from "react-router-dom";

function ItemDetails({ product, onAdd, goCart }) {
  const { image, details, price, title, _id } = product;
  const navigate = useNavigate();

  return (
    <ItemDetailsStyle>
      <div className="arrow-back">
        <img src={back} alt="back" onClick={() => navigate("/products")} />
        <span onClick={() => navigate("/products")}>Back</span>
      </div>

      {/* Para centrar el contenedor de los detalles */}
      <div className="grid-centrador">
        {/* Este es el grid que contiene el contenedor de la imagen y el contenedor de los detalles */}
        <section className="itemDetailsContainer">
          {/* Lado izquierdo del grid, muestra la imagen del producto */}
          <div className="imageContainer">
            <img src={image} alt={title + "-" + _id} />
          </div>

          {/* Lado derecho del grid, muestra los detalles del producto */}
          <div className="detailsItems">
            <div className="block">
              <span className="title">{title}</span>
            </div>

            <div className="block">
              <span>{details}</span>
            </div>

            <div className="block">
              <img
                className="imageTarjetas"
                src="https://www.volcom.com.ar//images/ico-tarjcredito2.png"
                alt="formas de pago aceptadas"
              />
            </div>

            <div className="block">
              <span>Price: ${price}</span>
            </div>

            {/* <div className="block">
						<span>Cantidad: </span>‼‼
					</div>

					<div className="block">
						<span>Talla:</span>
					</div> */}

            {/* <div className="block">
						<div className="tallasContainer">
							<div><span>XS</span></div>
							<div><span>S</span></div>
							<div><span>M</span></div>
							<div><span>L</span></div>
							<div><span>XL</span></div>
							<div><span>XXL</span></div>
						</div>
					</div> */}
            {goCart ? (
              <div className="buttonAddToCart">
                <Link to="/cart" className="finish-shop">
                  Terminar compra
                </Link>
                <Link to="/products">Seguir comprando</Link>
              </div>
            ) : (
              <div className="block">
                <div className="buttonAddToCart">
                  <Counter onAdd={onAdd} />
                </div>
              </div>
        }    
          </div>
        </section>

      </div>{/* Cerrar grid-centrador */}

    </ItemDetailsStyle>
  );
}
export default ItemDetails;
