import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Why write documentation?',
    Svg: 'img/project-setup.png',
    description: (
      <>
        Developers should write documentation because it makes it easier for coworkers to use your code.

      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: 'img/take-it-easy.png',
    description: (
      <>
        W6D is a support useful for team members, easy to use. Every documentation will be gathered here and sorted by category.
      </>
    ),
  },
  {
    title: 'Get an overview',
    Svg: 'img/ophthalmology.png',
    description: (
      <>
        Allow you to get a global vision of <code>Wildcard</code> projects you are working on. Documentation is focused on the overview.
        How are the different functions made? How is it configured?
      </>
    ),
  },
  {
    title: 'Skill up!',
    Svg: 'img/development-skill.png',
    description: (
      <>
        Documentation will help team members to get better understanding of the project. Espacially for new developers and interns.
      </>
    ),
  },
  {
    title: 'Sharing knowledge',
    Svg: 'img/knowledge-transfer.png',
    description: (
      <>
        Well-written code is easy to read and understand. Documentation, on the other hand, is a bonus to everyone.
      </>
    ),
  },
  {
    title: 'Markdown',
    Svg: 'img/code-file.png',
    description: (
      <>
        Markdown provides semantic meaning for content in a relatively simple way. You can write rich formatted content extremely quickly.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={Svg} />
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
