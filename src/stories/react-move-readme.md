## react-move
[check out react-move](https://github.com/tannerlinsley/react-move)

### Pros:
- Simple wrapper over d3's interpolate function is easy to conceptually understand.
- d3-interpolate will be familiar already to anyone who's played with d3, and offers a lot of powerful interpolation options.
- Stagger utility for multiple animations provided.
### Cons:
- Difficult to sequence multiple animations or delay updates of other components until animations are complete (no callbacks provided or other sequencing helpers, or delay parameters).
- No way of adjusting stagger times based on list index for more natural animations.
- Difficult from the current docs to figure out how to animate a single element's enter and exit (although that could be a result of my misunderstanding!)
- Need to apply the style attributes yourself, which means you need to take care of vendor prefixing.
- Lots of code required to write for a basic animation effect.
- Each transition, even of a list of items, requires a single parent wrapper.
