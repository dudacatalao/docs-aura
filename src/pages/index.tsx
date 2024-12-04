import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import TotemFeatures from '../components/TotemFeature';
import SystemFeature from '../components/SystemFeature';
import DisplayFeature from '../components/DisplayFeature';
import ToolsFeature from '../components/ToolsFeature';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.wrapper}>
          <img src="/img/logo-aura-dark.svg" alt="" />
          <div className={styles.staticTxt}>AURA é</div>
          <ul className={styles.dynamicTxts}>
            <li><span>tecnologia</span></li>
            <li><span>otimização</span></li>
            <li><span>agilidade</span></li>
            <li><span>inovação!</span></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <TotemFeatures />
        <SystemFeature />
        <DisplayFeature />
        <ToolsFeature />
      </main>
    </Layout>
  );
}
