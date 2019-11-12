import React from 'react'
import Img from 'gatsby-image'

export default function Hero({ banner }) {
  return (
    <section class="react_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="react_text">
              <h2>The Original React Conference in Europe</h2>
              <h1>ReactEurope</h1>
              <div class="react_text_content">
                <h3>
                  May 14-15th, 2020 <span>(conference)</span>
                </h3>
                <h3>
                  May 12-13th, 2020 <span>(workshops)</span>
                </h3>
                <h4>Paris, France</h4>
              </div>
            </div>
            <div class="react_btns">
              <a href="#conference" class="learn_more">
                Learn More
              </a>
              <a href="#tickets" class="book_now">
                Tickets
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="react_image">
              {/* 75%, 100%, 500px, 655px */}
              <Img fluid={banner} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
