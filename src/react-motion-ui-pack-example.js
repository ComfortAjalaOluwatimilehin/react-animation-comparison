import React, {PropTypes} from 'react'
import Transition from 'react-motion-ui-pack'
import Container from './container'

const AnimatedGridContents = (props) =>{
  return  (
    <Transition
      component='ul'
      className='grid'
      appear={{ opacity: 0, translateY: -30 }}
      enter={{ opacity: 1, translateY: 0 }}
      leave={{ opacity: 0, translateY: 30 }}
    >{ props.items.map((item)=> {
      return <div className="card" key={item}>{item}</div>
    }) }
    </Transition>
  )
}

const AnimatedGrid = props => {
  if (!props.items.length) return <div/>
  return (
    <Transition
      appear={{ translateX: -100, opacity : 0 }}
      enter={{ translateX: 0, opacity : 1 }}
      leave={{ translateX:  100, opacity : 0 }}
    >
      <div className="grid-to-animate" key='grid-to-animate'>
        <AnimatedGridContents items={props.items}/>
      </div>
    </Transition>
        );
    };

AnimatedGrid.props = {
  items : PropTypes.array.isRequired
}

export default () => <Container><AnimatedGrid /></Container>
