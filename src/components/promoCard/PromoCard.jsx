import Image from "next/image"
import React from "react"
import "./promoCard.scss"
const PromoCard = () => {
  return (
    <section id="promoCard" className="promoCard">
      <div className="container tw-flex tw-items-center tw-justify-between">
        <div className="promoCard__text  tw-max-w-[445px]">
          <h2>
            Bringing you the <em>best</em> audio gear
          </h2>
          <div>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <Image src={"/img/bitmap.png"} width={540} height={588} alt="promo" />
      </div>
    </section>
  )
}

export default PromoCard
