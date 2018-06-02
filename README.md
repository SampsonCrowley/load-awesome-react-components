# load-awesome-react-components
[![](https://badge.fury.io/js/load-awesome-react-components.svg)](https://www.npmjs.com/package/load-awesome-react-components)

[![](https://nodei.co/npm/load-awesome-react-components.png)](https://www.npmjs.com/package/load-awesome-react-components)

### React Components for Load Awesome

React Components for the fantastic `Load Awesome` CSS library

```jsx
import React, {Component} from 'react';
import LoadAwesomeComponents from 'load-awesome-react-components';

class ComponentWithAwesomeLoader extends Component {
  render() {
    return (
      <LoadAwesomeComponents.Ball.Atom />
    )
  }
}
```

Components are broken up into categories:

#### Ball

```jsx
import { Ball } from 'load-awesome-react-components';

const {
  Atom,
  Beat,
  Circus,
  ClimbingDot,
  ClipRotate,
  ClipRotateMultiple,
  ClipRotatePulse,
  EightBits,
  ElasticDots,
  Fall,
  Fusion,
  GridBeat,
  GridPulse,
  NewtonCradle,
  Pulse,
  PulseRise,
  PulseSync,
  Rotate,
  RunningDots,
  Scale,
  ScaleMultiple,
  ScalePulse,
  ScaleRipple,
  ScaleRippleMultiple,
  SpinClockwise,
  SpinClockwiseFade,
  SpinClockwiseFadeRotating,
  SpinFade,
  SpinFadeRotating,
  Spin,
  SpinRotate,
  SquareSpin,
  SquareClockwiseSpin,
  TrianglePath,
  ZigZag,
  ZigZagDeflect,
} = Ball

class BallLoaders extends Component {
  render() {
    return (
      <div>
        <Atom />
        <Beat />
        <Circus />
        <ClimbingDot />
        <ClipRotate />
        <ClipRotateMultiple />
        <ClipRotatePulse />
        <EightBits />
        <ElasticDots />
        <Fall />
        <Fusion />
        <GridBeat />
        <GridPulse />
        <NewtonCradle />
        <Pulse />
        <PulseRise />
        <PulseSync />
        <Rotate />
        <RunningDots />
        <Scale />
        <ScaleMultiple />
        <ScalePulse />
        <ScaleRipple />
        <ScaleRippleMultiple />
        <SpinClockwise />
        <SpinClockwiseFade />
        <SpinClockwiseFadeRotating />
        <SpinFade />
        <SpinFadeRotating />
        <Spin />
        <SpinRotate />
        <SquareSpin />
        <SquareClockwiseSpin />
        <TrianglePath />
        <ZigZag />
        <ZigZagDeflect />
      </div>
    )
  }
}
```

#### Line

```jsx
import { Line } from 'load-awesome-react-components';

const {
  Scale,
  ScaleParty,
  ScalePulseOut,
  ScalePulseOutRapid,
  SpinClockwiseFade,
  SpinClockwiseFadeRotating,
  SpinFade,
  SpinFadeRotating,
} = Line

class LineLoaders extends Component {
  render() {
    return (
      <div>
        <Scale />
        <ScaleParty />
        <ScalePulseOut />
        <ScalePulseOutRapid />
        <SpinClockwiseFade />
        <SpinClockwiseFadeRotating />
        <SpinFade />
        <SpinFadeRotating />
      </div>
    )
  }
}
```

#### Misc

```jsx
import { Misc } from 'load-awesome-react-components';

const {
  Cog,
  CubeTransition,
  Fire,
  Pacman,
  Timer,
} = Misc

class MiscLoaders extends Component {
  render() {
    return (
      <div>
        <Cog />
        <CubeTransition />
        <Fire />
        <Pacman />
        <Timer />
      </div>
    )
  }
}
```

#### Square

```jsx
import { Square } from 'load-awesome-react-components';

const {
  JellyBox,
  Loader,
  Spin,
} = Square

class SquareLoaders extends Component {
  render() {
    return (
      <div>
        <JellyBox />
        <Loader />
        <Spin />
      </div>
    )
  }
}
```

#### Triangle

```jsx
import { Triangle } from 'load-awesome-react-components';

const {
  SkewSpin,
} = Triangle

class TriangleLoaders extends Component {
  render() {
    return (
      <div>
        <SkewSpin />
      </div>
    )
  }
}
```

# [Load Awesome](http://github.danielcardoso.net/load-awesome/)

### An awesome collection of — Pure CSS — Loaders and Spinners

A full suite of **53 animations** for websites,
created and maintained by [Daniel Cardoso](http://www.danielcardoso.net).

## License
#### The MIT License (MIT)
Copyright (c) 2015 DanielCardoso.net
Copyright (c) 2018 Sampson Crowley
