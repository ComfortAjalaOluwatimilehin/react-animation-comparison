import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import 'gsap/TweenLite'
import 'gsap/CSSPlugin'
import 'gsap/EasePack'
import 'gsap/TimelineLite'
import Container from './container'
import animationTimings from './animationTimings'
// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf
const animateIn = (gridContainer) => {
  const cards = gridContainer.querySelectorAll('.card')
  new TimelineLite()
  .fromTo(gridContainer, animationTimings.gridEnter / 1000, {x: -2000}, {x: 0, ease: Elastic.easeOut})
  .staggerFromTo(cards, animationTimings.cardEnter / 1000, {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0}, 0.1)
}

class AnimatedGridContents extends React.Component {
  componentDidAppear () {
    animateIn(ReactDOM.findDOMNode(this))
  }
  componentDidEnter () {
    animateIn(ReactDOM.findDOMNode(this))
  }
  componentWillLeave (callback) {
    const gridContainer = ReactDOM.findDOMNode(this)
    const cards = gridContainer.querySelectorAll('.card')
    const tl = new TimelineLite()
    tl
    .staggerTo(cards, animationTimings.cardLeave / 1000, {autoAlpha: 0, y: -30}, 0.1)
    .fromTo(gridContainer, animationTimings.gridLeave / 1000, {x: 0}, {x: 2000, autoAlpha: 0, onComplete: callback})
  }
  render () {
    return (<div className='grid grid-to-animate' >
      {this.props.items.map((item) => {
        return <div className='card' key={item}>{item}</div>
      })}
    </div>)
  }
}

const AnimatedGrid = props => {
  return (
    <TransitionGroup>{
      props.items.length
        ? <AnimatedGridContents items={props.items} key='animated-grid' />
      : <div />
    }
    </TransitionGroup>
  )
}

AnimatedGrid.props = {
  items: PropTypes.array.isRequired
}

export default () => <Container><AnimatedGrid /></Container>
