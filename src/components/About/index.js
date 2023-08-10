import React from 'react';

import { AboutWrapper, Introduction, Wrapper, FeaturesWrapper, Feature } from './styles';
import jsonText from './text.json';

const About = () => {
  const features = jsonText.jsonText.slice(2, 6);

  return (
    <AboutWrapper>
      <Introduction>
        <h1>{jsonText.jsonText[0].introduction}</h1>
        <p>{jsonText.jsonText[0].intContent}</p>
      </Introduction>

      <FeaturesWrapper>
        {features.map((item, index) => (
          <Feature key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </Feature>
        ))}
      </FeaturesWrapper>

      <Wrapper>
        <h3>{jsonText.jsonText[6].title}</h3>
        <p>{jsonText.jsonText[6].content}</p>
        <p>{jsonText.jsonText[7].content}</p>
        <p>{jsonText.jsonText[8].content}</p>
      </Wrapper>

    </AboutWrapper>
  );
};

export default About;
