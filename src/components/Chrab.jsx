import React from 'react'
import { Link } from 'react-router-dom'
import {Wtj} from './Wtj'
const Chrab = () => {
  console.log(Wtj)
    const chroubou = [
      {id:1, img: 'https://www.aeliadutyfree.fr/media/catalog/product/cache/image/1200x/040ec09b1e35df139433887a97daa66f/b/3/b385ceafa327793caa16cb62550b91c6b99fd42f_5000267023625_1.jpg', title:'whisky black label', price: '671,88 $US',
    description:"Drawing on flavours from all over Scotland, Johnnie Walker Black Label is full of dark fruit note and sweet vanilla flavours topped off with the signature smoky" ,},
    {id:2, img: 'http://cdn.shopify.com/s/files/1/0354/2650/0743/products/Rectangle47_52f3657c-39c2-4b9a-a69f-d174df0c44d8.jpg?v=1649166050', title: 'white wine', price: '40$',
  description:"White wine is a wine that is fermented without skin contact. The colour can be straw-yellow, yellow-green, or yellow gold. ... It is produced by the alcoholic grape varieties fermented without 5.5 20.5 "},
  {id:3, img: 'https://www.aeliadutyfree.fr/media/catalog/product/cache/image/1200x/040ec09b1e35df139433887a97daa66f/e/1/e1d409bee6df9779ae46ed56aeca49f90e990518_5000267114293.jpg', 
  title: 'whisky blue label', price: '245$', 
  description:"Le Johnnie Walker Blue Label est un whisky doux, velouté et vif, issu de l'assemblage d'une sélection de whiskys rares venant des quatre coins de l'Écosse.254,00 €"},
 {id:4, img: 'https://www.geantdrive.tn/tunis-city/330975-large_default/biere.jpg', title:'celtia good beer', price: '2.5dt',
  description:"Celtia (Arabic: سلتيا) is a historical brand of Tunisian beer. Summary. 1 Type; 2 History; 3 Generation; 4 Distribution; 5 Picture ..."},
{id:5, img: 'https://images-na.ssl-images-amazon.com/images/I/51YVNidtBoL.jpg' , title: 'whisky red label', price: '347,88 $US',
 description:"Johnnie Walker Red Label Blended Scotch Whisky · Scotland · Avg Price (ex-tax); $ 23 / 750ml · Johnnie Walker Red Label Blended Scotch whisky is the flagship of ...Note : 87 % · ‎8 votes · ‎7,99 $US à 347,75 $US · ‎En stock"},
{id:6, img: 'https://www.highlandmanorwinery.com/wp-content/uploads/2017/02/highland-bottle-cab-berry.png', title: 'red wine', price:'40$',
description:"Red wine is a type of wine made from dark-colored grape varieties. The color of the wine can range from intense violet, typical of young wines, ...Ingredients : Dark-colored grape cultivarsAlcohol by volume : 5.5–20.5%" },
{id:7, img: 'https://www.absolut.com/wp-content/uploads/absolut-vodka-original-2021-against-white-background.jpg', title: 'absolute vodka', price:'323,88 $US',
description:"Absolut Vodka is the leading brand of Premium vodka offering the true taste of vodka in original or your favorite flavors made from natural ingredients."},
{id:8, img: 'https://www.alkostore.ee/wp-content/uploads/2023/01/img.5a4b2cc56698058a.jpg', title: 'corona extra', price: '2.5€',
description:"Prix : 15,36 € (43,27 € / l) 14,59 € (41,10 € / l) ; Parfum: Corona Extra 4.5% ; Taille: Pack 12 Bouteilles 35.5cl ; Marque, Corona ; Poids du produit, 7.12 ..."} 
]
  return (
    <div className='vu'>
    
    
    { chroubou.map((el, key)=>
    <Link to="/Birra" key={key} state={el}>
        <div className='mama'>
        <img src={el.img} alt="hi" className='wa'/>
          <h2>{el.title}</h2>
          <p>{el.price}</p>
        </div>
        </Link>
        )}


    </div>
  )
}

export default Chrab