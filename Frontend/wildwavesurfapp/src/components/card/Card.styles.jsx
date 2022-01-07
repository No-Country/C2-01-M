import styled from "styled-components"

export const CardStyle=styled.div`
.card-product-info{
	width: 100%;
	height: auto;
	transform: scale(1);
	
}

.card-product-info:hover{
	transform: scale(1);

}

.image-container{
	display: inline-block;
	width: 100%;
}

.image-container img{
	width: 100%;
	height: 300px;
	object-fit: contain;
}

.card-like-container{
	display:flex;
	justify-content: flex-end;
	width: 100%;
}

.card-like-container img{
	display: inline-block;
	width: 50px;
	height: auto;
	margin: 0;
	padding: 0;
}

.card-title{
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	box-sizing: border-box;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 50px;
	padding-right: 50px;
	font-size: 22px;
}

.card-price-detail{
	display: flex;
	justify-content: center;
	width: 100%;
}`