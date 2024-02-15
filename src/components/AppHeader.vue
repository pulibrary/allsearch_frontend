<template>
  <header>
    <div class="header--primary">
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <nav class="navbar">
        <a class="logo" href="https://library.princeton.edu">
          <img
            alt="Princeton University Logo"
            src="/assets/logos/pul-logo-new.svg"
          />
        </a>
        <div class="menu-items">
          <ul>
            <li class="menu-item">
              <a
                class="main-menu"
                href="https://library.psb-prod.princeton.edu/accounts"
                >Accounts</a
              >
            </li>
            <li class="menu-item">
              <a
                class="main-menu"
                href="https://library.psb-prod.princeton.edu/hours"
                >Hours</a
              >
            </li>
            <li class="menu-item">
              <div class="list-wrapper">
                <ul>
                  <a
                    class="main-menu"
                    href="https://library.psb-prod.princeton.edu/help"
                    >Help</a
                  >
                  <li>
                    <a
                      href="https://library.psb-prod.princeton.edu/help/schedule-consultation"
                      >Schedule a Consultation</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <div class="list-wrapper for-you">
                <ul>
                  <a
                    class="main-menu"
                    href="https://library.psb-prod.princeton.edu/you"
                    >For You</a
                  >
                  <li>
                    <a href="https://library.psb-prod.princeton.edu/you/faculty"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://library.psb-prod.princeton.edu/you/graduate-students"
                      >Graduate Students</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://library.psb-prod.princeton.edu/you/undergraduate-students"
                      >Undergraduate Students</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://library.psb-prod.princeton.edu/you/visitors"
                      >Visitors</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- End of head--primary class -->
  </header>
</template>

<script>
import '../../assets/app.css';
</script>

<style>
/* start min-width: 675 */
header {
  width: 100%;
  padding: 1rem;
  height: 8rem;
  margin-bottom: 1em;
  background-color: var(--gray-100);
  border-bottom: solid var(--orange-50) 3px;
}

.header--primary {
  align-content: center;
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
}

.header--primary .skip-link {
  z-index: 25;
  position: absolute;
  top: 0px;
  left: 0px;
  background: var(--orange-20);
  color: var(--black);
  align-self: flex-start;
}

.logo {
  display: flex;
  flex-grow: 0;
  width: 240px;
}

.menu-items {
  display: flex;
  z-index: 50;
  justify-content: space-between;
  padding-right: 3rem;

  .menu-item {
    display: flex;
    margin: 16px;
    a {
      font-family: franklin-gothic-urw, 'Helvetica Neue', Arial, sans-serif;
      color: var(--white);
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
    }

    .main-menu:hover {
      border-bottom: 1px solid var(--orange-50);
    }

    ul {
      display: flex;
      flex-grow: 1;
      padding: 0px;
      color: var(--white);
      white-space: nowrap;
      li:hover {
        border-bottom: 1px solid var(--orange-50);
      }
      &:hover {
        li {
          display: flex;
          list-style: none;
          background-color: var(--white);

          a {
            color: var(--gray-100);
            padding: 4px;
          }
        }
      }

      li {
        display: none;
        white-space: wrap;
      }
    }
  }
}

.list-wrapper {
  position: relative;
  display: flex;

  ul {
    display: flex;
    flex-flow: column wrap;
    position: absolute;
    left: 0px;
  }
}

.for-you {
  /* TODO: improve this style. Revisit 'Help' and 'For You'*/
  margin-left: 1rem;
  margin-right: 1rem;
}

.navbar {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  ul {
    display: flex;
  }
}
/* end min-width: 675 */
/* Add media query with rules less than 675px */
/* test tablet size and mobile size */
</style>
