<template>
  <footer>
    <div class="footer--region">
      <div itemscope itemtype="http://schema.org/Organization">
        <div
          class="library-logo"
          itemprop="logo"
          src="http://www.example.com/logo.svg"
        >
          <a href="https://library.princeton.edu">
            <img
              alt="Princeton University Library Logo"
              src="../../public/assets/pul-logo-new.svg"
            />
          </a>
        </div>
        <div itemscope itemtype="http://schema.org/PostalAddress">
          <span itemprop="streetAddress">One Washington Road</span> <br />
          <span itemprop="addressLocality">Princeton</span>,
          <span itemprop="addressRegion">NJ</span>
          <span itemprop="postalCode">08544</span>
          <span itemprop="addressCountry">USA</span>
        </div>
        <span itemprop="telephone">(609) 258-1470</span>
      </div>
      <div class="footer-links">
        <nav role="navigation" aria-label="Library Staff">
          <nav role="navigation" aria-label="Subscribe">
            <div class="subscribe-newsletter">
              <h2>Subscribe to our Newsletter</h2>
            </div>
          </nav>
        </nav>
      </div>
      <div class="footer-links">
        <nav role="navigation" aria-label="Subscribe">
          <ul>
            <li>
              <a href="https://library.princeton.edu/staff"
                >For Library Staff</a
              >
            </li>
            <li>
              <a href="https://library.princeton.edu/staff/directory"
                >Staff Directory</a
              >
            </li>
            <li>
              <a href="https://library.princeton.edu/about/jobs"
                >Library Jobs</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footer--region">
      <div class="footer-links">
        <a href="https://accessibility.princeton.edu/help">Accessibility</a>
      </div>
      <div class="copyright-library-trustees">
        &copy; 2024 The Trustees of Princeton University
      </div>
      <div
        class="university-logo"
        itemprop="logo"
        src="http://www.example.com/logo.svg"
      >
        <a href="https://library.princeton.edu">
          <img
            width="142px"
            height="40px"
            alt="Princeton University Logo"
            src="../../public/assets/logo-white.svg"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

@import '../../assets/app.css';

<style>
footer {
  height: 15rem;
  background-color: var(--gray-100);
  border: 0;
  color: var(--white);
  padding-bottom: 2em;
  padding-top: 2em;
}

.footer--region {
  padding-top: 2.5rem;
  column-gap: 10em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem 1rem 1rem;
  row-gap: 10px;
}
.footer--region h2 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.75em;
}

.footer-links {
  order: 0;
  align-self: flex-start;

  a {
    text-decoration: none;
    color: white;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}

.subscribe-newsletter {
  font-weight: 100;
}
</style>
