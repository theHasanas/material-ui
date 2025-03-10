import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import CssBaseline from '@mui/material/CssBaseline';
import BrandingProvider from 'docs/src/BrandingProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import XHero from 'docs/src/components/productX/XHero';
import XComponents from 'docs/src/components/productX/XComponents';
import XDataGrid from 'docs/src/components/productX/XDataGrid';
import XTheming from 'docs/src/components/productX/XTheming';
import XRoadmap from 'docs/src/components/productX/XRoadmap';
import References, { ADVANCED_CUSTOMERS } from 'docs/src/components/home/References';
import AppFooter from 'docs/src/layouts/AppFooter';
import XPlans from 'docs/src/components/productX/XPlans';
import SurveyBanner from 'docs/src/components/home/SurveyBanner';

export default function Home() {
  return (
    <BrandingProvider>
      <Head
        title="MUI X: Performant advanced components"
        description="We are kicking it off with the most powerful Data Grid on the market and there's a lot more to come. Build complex applications with our advanced React components."
        card="/static/social-previews/x-preview.jpg"
      />
      <CssBaseline />
      <SurveyBanner />
      <AppHeader />
      <main>
        <XHero />
        <References companies={ADVANCED_CUSTOMERS} />
        <XComponents />
        <XDataGrid />
        <XTheming />
        <XPlans />
        <XRoadmap />
      </main>
      <AppFooter />
    </BrandingProvider>
  );
}
