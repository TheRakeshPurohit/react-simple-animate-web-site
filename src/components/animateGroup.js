import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import { PropType } from '../styled/typography';
import { PropsContentContainer} from '../styled/containers';

const sequences = `<AnimateGroup play> 
  <Animate endStyle={{ opacity: 1 }} sequnceIndex={0} /> // play first
  <Animate endStyle={{ opacity: 0.5 }} sequnceIndex={1} /> // play second
  <Animate endStyle={{ opacity: 0 }} sequnceIndex={2} /> // play last
</AnimateGroup>
`

const example = `import react from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';

const props = {
  startStyle: { opacity: 0 },
  endStyle: { opacity: 1 }
};

export default () =>
  <AnimateGroup play sequences={[
    { sequenceId: 'header', ...props } // play first
    { sequenceId: 'content', ...props, overlaySeconds: 0.1 } // play during header animation and overlay by 0.1s
    { sequenceId: 'footer', ...props, delaySeconds: 0.4 } // play after content with 0.4s seconds delay
  ]}>
    <Animate sequenceId="header" />
    <Animate sequenceId="content" />
    <Animate sequenceId="footer" />
  </AnimateGroup>
);`

export default function Content() {
  return (
    <PropsContentContainer>
      <p>
        <code>{'<AnimateGroup />'}</code> is made to chain up <code>{'<Animate />'}</code> and{' '}
        <code>{'<AnimateKeyframes />'}</code> in sequences, so animations will play one after another in such order
        which has been defined.
      </p>
      <h3>Props</h3>
      <ul>
        <li>
          <code>
            play: <PropType>boolean</PropType> = false
          </code>

          <p>
            Defaults to <code>false</code>, set to true to start the animation.
          </p>
        </li>
        <li>
          <code>
            sequences: <PropType>{`Array<number> | Array<Object>`}</PropType>
          </code>

          <p>
            Array with <code>sequenceIndex</code> or <code>sequenceId</code>. This prop is <b>optional</b>, if not
            provided, then it will animate in order of <code>sequenceIndex</code>.
          </p>

          <SyntaxHighlighter language="javascript" style={docco}>
            {sequences}
          </SyntaxHighlighter>
        </li>
        <li>
          <code>
            reverseSequences: <PropType>{`Array<number> | Array<Object>`}</PropType>
          </code>

          <p>
            Share the same behaviour as <code>sequences</code>. This prop is <b>optional</b>, except this will applied when <code>play</code> set to <code>false</code>.
          </p>
        </li>
      </ul>

      <h3>Examples</h3>
      <p>Set up animation sequence with sequenceId.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {example}
      </SyntaxHighlighter>
    </PropsContentContainer>
  )
}
