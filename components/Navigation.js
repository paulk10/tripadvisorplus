import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveMovies = {
    en: 'Movies',
    nl: 'Films',
  }
  const resolveCities = {
    en: 'Cities',
    nl: 'Steden',
  }
  const resolveRestaurants = {
    en: 'Restaurants',
    nl: 'Resto',
  }
  const resolveBars = {
    en: 'Bars',
    nl: 'Bars',
  }
  const resolvePeople = {
    en: 'People',
    nl: 'Mensen',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

      <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
              alt="IMDBPlus Logo"
              className=""
            /> */}
            <Image src="/trip-advisor-+-logo .png" alt="IMDBPlus Logo" width="128" height="128" />
          </a>
        </div>
        
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
          <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/cities`} className={styles.movie}>{resolveCities[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/restaurants`} className={styles.newsitem}>{resolveRestaurants[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/bars`} className={styles.newsitem}>{resolveBars[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
       
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation