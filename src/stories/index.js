import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ReactMoveGrid from './../react-move-example'
import ReactMotionUIPackGrid from './../react-motion-ui-pack-example'
import VelocityReact from './../velocity-react-example'
import ReactMotion from './../react-motion-example'
import ReactTransitionGroup from './../react-transition-group-example'
import ReactTransitionGroupAnime from './../react-transition-group-example-anime'

import { setOptions } from '@kadira/storybook-addon-options'
import './../index.css'

setOptions({
  name: 'React Animation Libraries',
  url: 'https://github.com/kadirahq/storybook-addon-options',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false
})

storiesOf('Animation Examples', module)
  .add('Using react-move', () => (
    <ReactMoveGrid />
  ))
  .add('Using react-motion-ui-pack', () => (
    <ReactMotionUIPackGrid />
  ))
  .add('Using velocity-react', () => (
    <VelocityReact />
  ))
  .add('Using react motion', () => (
    <ReactMotion />
  ))
  .add('Using react transition group + gsap', () => (
    <ReactTransitionGroup />
  ))
  .add('Using react transition group + animejs', () => (
    <ReactTransitionGroupAnime />
  ))
