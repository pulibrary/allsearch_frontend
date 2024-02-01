<template>
  <header>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <nav>
      <a class="logo" href="https://library.princeton.edu">
        <img alt="Princeton University Logo" src="../../public/assets/pul-logo-new.svg" />
      </a>
      <ul class="menu-items">
        <li class="menu-item"><a class="main-menu" href="https://library.psb-prod.princeton.edu/accounts">Accounts</a></li>
        <li class="menu-item"><a class="main-menu" href="https://library.psb-prod.princeton.edu/hours">Hours</a></li>
        <li class="menu-item">
          <div class="list-wrapper">
            <ul>
            <a class="main-menu" href="https://library.psb-prod.princeton.edu/help">Help</a>
            <li><a href="https://library.psb-prod.princeton.edu/help/schedule-consultation">Schedule a Consultation</a></li>
          </ul>
          </div>
        </li>
        <li class="menu-item">
          <div class="list-wrapper for-you">
            <ul>
              <a class="main-menu" href="https://library.psb-prod.princeton.edu/you">For You</a>
              <li><a href="https://library.psb-prod.princeton.edu/you/faculty">Faculty</a></li>
              <li><a href="https://library.psb-prod.princeton.edu/you/graduate-students">Graduate Students</a></li>
              <li><a href="https://library.psb-prod.princeton.edu/you/undergraduate-students">Undergraduate Students</a></li>
              <li><a href="https://library.psb-prod.princeton.edu/you/visitors">Visitors</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    
  </header>
</template>
<style>
@import '../../assets/app.css';

header {
  padding: 10px 24px;
  height: 7rem;
  background-color: var(--gray-100);
  margin-bottom: 1em;
  border-bottom: solid var(--orange-50) 3px;
}

a.skip-link {
  z-index: 25;
  position: absolute;
  top: 0px;
  left: 0px;
  background: var(--orange-20);
  padding: 2px 8px 2px;
  color: var(--black);
}

.logo {
  display: flex;
  width: 240px;
  padding: 38px 0px;
}

.menu-items {
  z-index: 50;
  margin: 16px;
  position: relative;

  .menu-item {
    margin: 16px;
    
    display: inline-block;
    a {
      font-family: franklin-gothic-urw, "Helvetica Neue", Arial, sans-serif;
      color: var(--white);
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
    }

    .main-menu:hover {
      border-bottom: 1px solid var(--orange-50);
    }

    ul {
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
            display: block;
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

  ul {
    display: block;
    position: absolute;
    left: 0px;
  }
}

.for-you {
  margin-left: 32px;
  margin-right: 72px;
}

nav {
  display: flex;
  justify-content: space-between;
}

</style>
