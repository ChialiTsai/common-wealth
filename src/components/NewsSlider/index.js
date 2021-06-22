import React from 'react'
import { Link } from '@reach/router'
import NewsCard from '../NewsCard'

const NewsSlider = ({ title, cta, visibleCount, sliderBreakpoint, data }) => {
  const { attr, name } = cta

  return (
    <div className="news-slider">
      <div className="news-slider__header">
        <div className="news-slider__title h2">{title}</div>
        <div className="news-slider__cta">
          <Link {...attr}>{name}</Link>
        </div>
      </div>
      <div className="news-slider__items news-grid">
        {data.map((props) => (
          <NewsCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  )
}

export default NewsSlider
