import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

// Não usamos mais uma lista FeatureList
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* Renderizando as Features uma por uma */}

          <Feature
            title="Totem"
            Svg={require('@site/static/img/totemm.svg').default}
            description={
              <>
                Totem de Pré-triagem de Acesso aos recursos do ambulatório.
              </>
            }
          />

          <Feature
            title="Sistema Interno"
            Svg={require('@site/static/img/visorr.svg').default}
            description={
              <>
                Sistema Interno para acompanhamento dos pacientes e gerenciamento interno.
              </>
            }
          />

          <Feature
            title="Visor"
            Svg={require('@site/static/img/undraw_docusaurus_react.svg').default}
            description={
              <>
                Visor para exibição de senhas.
              </>
            }
          />

        </div>
      </div>
    </section>
  );
}
