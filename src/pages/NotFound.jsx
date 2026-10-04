import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <main>
      <SEO 
        title="Page Not Found | BlackRoot Technologies"
        description="The page you are looking for could not be found."
        url="/404"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero-inner" style={{ textAlign: 'center', padding: '120px 0' }}>
            <h1 className="page-title">404 - Not Found</h1>
            <p className="page-lead">The page you are looking for does not exist.</p>
            <Link className="btn btn-primary" to="/" style={{ display: 'inline-flex', marginTop: '30px', justifyContent: 'center' }}>
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
