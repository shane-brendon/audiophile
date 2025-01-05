import React from "react"
import "./footer.scss"
const Footer = () => {
  return (
    <footer className="tw-bg-dark tw-text-white tw-pt-20 tw-pb-12">
      <div className="container">
        <div className="tw-flex tw-justify-between tw-items-center tw-pb-9">
          <div className="">audiophile</div>
          <ul className="tw-uppercase tw-text-sm tw-flex tw-gap-8">
            <il>hOME</il>
            <il>headphone</il>
            <il>speakers</il>
            <il>earphones</il>
          </ul>
        </div>
        <div className="tw-flex tw-justify-between tw-items-end ">
          <div className="tw-max-w-[510px] tw-font-medium tw-text-sm tw-opacity-50 ">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="">
            <ul className="tw-flex">
              <li>facebook</li>
              <li>twitter</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>
        <div className="tw-pt-14 tw-opacity-50 tw-text-sm">Copyright 2021. All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer
