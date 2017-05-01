import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import anime from 'animejs'
import Container from './container'
import animationTimings from './animationTimings'

const animateIn = (gridContainer) => {
  const cards = gridContainer.querySelectorAll('.card')
  anime.timeline()
  .add({
    targets: cards,
    opacity: 0,
    duration: 1
  })
  .add({
    targets: gridContainer,
    translateX: [-2000, 0],
    duration: animationTimings.gridEnter
  })
  .add({
    targets: cards,
    duration: 800,
    opacity: [0, 1],
    translateY: [-30, 0],
    delay: function (el, i, l) {
      return i * 100
    }
  })
}

const animateOut = (gridContainer, callback) => {
  const cards = gridContainer.querySelectorAll('.card')
  anime.timeline()
  .add({
    targets: cards,
    duration: 700,
    opacity: 0,
    translateY: -30,
    delay: function (el, i, l) {
      return i * 100
    }
  })
  .add({
    targets: gridContainer,
    translateX: 2000,
    opacity: 0,
    duration: 1000,
    complete: callback,
    offset: '-=200'
  })
}

class AnimatedGridContents extends React.Component {
  componentDidAppear () {
    animateIn(ReactDOM.findDOMNode(this))
  }
  componentDidEnter () {
    animateIn(ReactDOM.findDOMNode(this))
  }
  componentWillLeave (callback) {
    animateOut(ReactDOM.findDOMNode(this), callback)
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
