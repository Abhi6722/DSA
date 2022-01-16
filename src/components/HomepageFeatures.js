import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/h1.svg').default,
    description: (
      <>
        This repository contains all of my progress while learning DS. I have tried to note down as much information as possible and I hope it will benifit others.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/h2.svg').default,
    description: (
      <>
        My goal behind this project was making it a complete <code>open source</code> and believe you will also contribute to this documentation and share your knowledge.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/h3.svg').default,
    description: (
      <>
        This is a documentation website built using Docusaurus and powered with React. Docusaurus is great for open source documentation projects and I love using it a lot.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
