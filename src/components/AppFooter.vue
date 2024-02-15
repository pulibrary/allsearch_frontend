<template>
  <footer>
    <div class="footer-main">
      <div class="footer-organization">
        <div itemscope itemtype="http://schema.org/Organization">
          <div
            class="library-logo"
            itemprop="logo"
            src="http://www.example.com/logo.svg"
          >
            <a href="https://library.princeton.edu">
              <img
                alt="Princeton University Library Logo"
                src="/assets/logos/pul-logo-new.svg"
              />
            </a>
          </div>
          <div
            class="address"
            itemscope
            itemtype="http://schema.org/PostalAddress"
          >
            <span itemprop="streetAddress">One Washington Road</span> <br />
            <span itemprop="addressLocality">Princeton, </span>
            <span itemprop="addressRegion">NJ</span>
            <span itemprop="postalCode"> 08544</span>
            <span itemprop="addressCountry"> USA</span><br />
            <span itemprop="telephone"> (609) 258-1470</span>
          </div>
        </div>
      </div>
      <div class="footer-links">
        <nav role="navigation" aria-label="Subscribe">
          <div class="subscribe-newsletter-title">
            <h2>Subscribe to our Newsletter</h2>
          </div>
          <SubscribeNewsletter></SubscribeNewsletter>
        </nav>
        <div class="social-icons">
          <div class="logo-x" itemprop="logo" src="http://example.com/logo.svg">
            <a href="http://www.facebook.com/PULibrary">
              <img alt="X Logo" src="/assets/logos/logo-x.svg" />
            </a>
          </div>
          <div
            class="logo-facebook"
            itemprop="logo"
            src="http://example.com/logo.svg"
          >
            <a href="http://www.facebook.com/PULibrary">
              <img alt="Facebook Logo" src="/assets/logos/logo-facebook.svg" />
            </a>
          </div>
          <div
            class="logo-instagram"
            itemprop="logo"
            src="http://example.com/logo.svg"
          >
            <a href="https://www.instagram.com/PULibrary">
              <img
                alt="Instagram Logo"
                src="/assets/logos/logo-instagram.svg"
                style="filter: invert(1)"
              />
            </a>
          </div>
          <div
            class="logo-depository"
            itemprop="logo"
            src="http://example.com/logo.svg"
          >
            <a href="http://libguides.princeton.edu/govdocs">
              <img
                alt="Depository Logo"
                src="/assets/logos/logo-depository.png"
              />
            </a>
          </div>
          <div
            class="logo-friends"
            itemprop="logo"
            src="http://example.com/logo.svg"
          >
            <a href="http://library.princeton.edu/about/friends">
              <img
                alt="Friends of PUL Logo"
                src="/assets/logos/logo-friends.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-links">
        <div class="library-staff">
          <nav role="navigation" aria-label="Library Staff">
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
    </div>
    <!-- Bottom footer section -->
    <div class="footer-bottom">
      <div class="footer-links">
        <div class="accessibility">
          <a href="https://accessibility.princeton.edu/help"
            >Digital Accessibility</a
          >
        </div>
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
            width="150px"
            height="50px"
            alt="Princeton University Logo"
            src="/assets/logos/logo-white.svg"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import SubscribeNewsletter from './SubscribeNewsletter.vue';
</script>

<style>
footer {
  max-height: 42rem;
  background-color: var(--gray-100);
  color: var(--white);
  padding: 0rem 3rem 0rem 3rem;
}

.footer-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 0rem 1rem 0rem;
}

.footer-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0rem;
}

.footer-links h2 {
  margin-top: 0;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.75em;
}

.footer-links {
  display: flex;
  flex-flow: column wrap;
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
    display: flex;
    flex-flow: column wrap;
  }

  li {
    margin-right: 1rem;
  }
}

.footer-organization {
  display: flex;
}

.library-logo {
  padding-bottom: 2rem;
}

.subscribe-newsletter-title {
  font-weight: 100;
}

.social-icons {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5rem;
}

.logo-x {
  padding: inherit;
  padding-left: 0rem;
}

.logo-facebook {
  padding: inherit;
}

.logo-instagram {
  padding: inherit;
}

.logo-depository {
  padding: inherit;
}

.logo-friends {
  padding: inherit;
}

nav {
  display: flex;
  align-self: flex-start;
  flex-flow: column wrap;
}

@media (min-width: 440px) and (max-width: 820px) {
  footer {
    display: flex;
    padding: 1rem;
    flex-flow: row wrap;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .footer-main {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: 3rem 1rem 1rem 1rem;
    gap: 8%;
  }
  .footer-bottom {
    display: flex;
    flex-flow: column wrap;
    padding: 3rem 3rem 1rem 1rem;
    justify-content: space-between;
    gap: 7px;
    align-content: flex-end;
    align-items: flex-start;
  }
  .subscribe-newsletter-title {
    padding-top: 2rem;
  }
}
</style>
