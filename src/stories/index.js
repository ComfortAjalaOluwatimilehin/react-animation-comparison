import React from 'react'
import { storiesOf } from '@kadira/storybook'
import withReadme from 'storybook-readme/with-readme'

import reactMotionRM from './react-motion-readme.md'
import reactMotionUIRM from './react-motion-ui-pack-readme.md'
import reactMoveRM from './react-move-readme.md'
import velocityReactRM from './velocity-react-readme.md'
import reactTransitionRM from './react-transition-group-readme.md'

import ReactMoveGrid from './../react-move-example'
import ReactMotionUIPackGrid from './../react-motion-ui-pack-example'
import VelocityReact from './../velocity-react-example'
import ReactMotion from './../react-motion-example'
import ReactTransitionGroup from './../react-transition-group-example'

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
  .add('Using react-move', withReadme(reactMoveRM, () => (
    <ReactMoveGrid />
  )))
  .add('Using react-motion-ui-pack', withReadme(reactMotionUIRM, () => (
    <ReactMotionUIPackGrid />
  )))
  .add('Using velocity-react', withReadme(velocityReactRM, () => (
    <VelocityReact />
  )))
  .add('Using react motion', withReadme(reactMotionRM, () => (
    <ReactMotion />
  )))
  .add('Using react transition group + gsap', withReadme(reactTransitionRM, () => (
    <ReactTransitionGroup />
  )))
