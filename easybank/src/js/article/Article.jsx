import React from 'react'
import currency from '../../images/image-currency.jpg'
import restaurant from '../../images/image-restaurant.jpg'
import plane from '../../images/image-plane.jpg'
import confetti from '../../images/image-confetti.jpg'

const Article = () => {
  return (
    <section className='article'>
      <h2>Latest Articles</h2>
      <div className="cardSection">
        <div className="articleCard">
          <img src={currency} alt="currency" />
          <div className="articleWordWrapper">
            <small>By Claire Robinson</small>
            <h4><a href="/story">Receive money in any currency with no fees</a></h4>
            <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
          </div> </div>
        <div className="articleCard">
          <img src={restaurant} alt="restaurant" />
          <div className="articleWordWrapper">
            <small>By Wilson Hutton</small>
            <h4><a href="/story">Treat yourself without worrying about money</a></h4>
            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </p>
          </div> </div>
        <div className="articleCard">
          <img src={plane} alt="plane" />
          <div className="articleWordWrapper">
            <small>By Wilson Hutton</small>
            <h4><a href="/story">take your Easybank card wherever you go</a></h4>
            <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … </p>
          </div> </div>
        <div className="articleCard">
          <img src={confetti} alt="confetti" />
          <div className="articleWordWrapper">
            <small>By Claire Robinson</small>
            <h4><a href="/story">Our invite-only Beta accounts are now live!</a></h4>
            <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... </p>
          </div> </div>
      </div>
    </section>
  )            
}

export default Article