import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import Industries from 'sections/Industries';
import HowWorks from 'sections/HowWorks';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';
import Contact from 'sections/contact'
import TechStack from 'sections/techStack';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Digita Solutions" />
          <Banner />
          <Services />
          <BoostAgencies />
          <CallToAction />
          <HowWorks />
          <Testimonials />
          <Industries />
          <Contact/>
          <TechStack />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
