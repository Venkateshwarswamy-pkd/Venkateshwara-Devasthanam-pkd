import { useEffect, useRef, useState } from 'react'
import './App.css'

const sectionBackgrounds = {
  namalu: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Tirumala_Venkateswara_Temple%2C_Andhra_Pradesh%2C_India.jpg',
  about: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Tirumala_hills_and_temple_complex.jpg',
  darshan: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Tirumala_temple.JPG',
  sevas: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Venkateswara_temple_tirumala.jpg',
  festivals: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Sri_Velugonda_Venkateswara_Swamy_temple.jpg',
  gallery: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Tirumala_Venkateswara_Temple%2C_Andhra_Pradesh%2C_India.jpg',
  contact: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Tirumala_hills_and_temple_complex.jpg',
}

const festivals = [
  {
    title: 'Ugadi - Visesha Pujalu, Panchanga Sravanam',
    month: 'March 19',
  },
  {
    title: 'Sri Rama Navami - Panchamruta Abhishekam, Seetha Rama Kalyanam',
    month: 'March 27',
  },
  {
    title: 'Hanumad Jayanthi',
    month: 'May 12',
  },
  {
    title: 'Sravanamasam Sukravaralu - Varalaxmi Vratam',
    month: 'Sravanamasam',
    details: 'Special Varalaxmi Vratam is performed on Fridays during Sravanamasam.',
  },
]

const namalu = [
  'శ్రీనివాసా గోవిందా.. శ్రీవేంకటేశా గోవిందా',
  'భక్తవత్సలా గోవిందా.. భాగవతప్రియా గోవిందా',
  'నిత్యనిర్మలా గోవిందా.. నీలమేఘశ్యామ గోవిందా',
  'పురాణపురుషా గోవిందా.. పుండరీకాక్ష గోవిందా',
  'నందనందనా గోవిందా.. నవనీతచోరా గోవిందా',
  'పశుపాలక శ్రీ గోవిందా.. పాపవిమోచన గోవిందా',
  'దుష్టశిక్షక గోవిందా.. శిష్టరక్షక గోవిందా',
  'కంజలోచనా గోవిందా.. కాంచనాంబరధర గోవిందా',
  'రామానుజనుత గోవిందా.. రాక్షసమర్దన గోవిందా',
  'అచ్యుతానంత గోవిందా.. అపరాధవినోద గోవిందా',
  'సకలశాస్త్రధర గోవిందా.. సత్యస్వరూపా గోవిందా',
  'దేవదేవోత్తమ గోవిందా.. దీనరక్షక గోవిందా',
  'నీలగిరివాసా గోవిందా.. నిఖిలలోకేశా గోవిందా',
  'తిరుమలవాసా గోవిందా.. తులసీవనమాలా గోవిందా',
  'శేషాద్రినిలయా గోవిందా.. శేషశాయి గోవిందా',
]

const galleryImages = [
  {
    title: 'Sri Venkateswara Swamy Temple Parlakimidi - Front View',
    src: '/images/frount view.png',
  },
  {
    title: 'Shree Krishna Janmastami - Balaji Temple PKD',
    src: '/images/Janmastami pics.png.jpeg',
  },
  {
    title: 'Lord Krishna idol at Sri Venkateswara Temple Parlakimidi',
    src: '/images/lord.png.jpeg',
  },
  {
    title: 'Swamy Varu Darshan - Venkateswara Swamy Devastanam PKD',
    src: '/images/more.png.jpeg',
  },
  {
    title: 'Swamivari Tiruveedhi Utsavam Parlakimidi',
    src: '/images/more1.png.jpeg',
  },
  {
    title: 'Srivari Tiruveedhi at PKD Balaji Temple',
    src: '/images/srivari trevedhi2.png.jpeg',
  },
  {
    title: 'Varalakshmi Vratam - Sri Venkateswara Swamy Temple Parlakimidi',
    src: '/images/Varalakshmi vratam.png.jpeg',
  },
  {
    title: 'Vykunta Ekadashi - Parlakimidi Temple Festival',
    src: '/images/Vykunta ekadashi.png.jpeg',
  },
  {
    title: 'Sri Venkateswara Swamy Temple Parlakimidi Main Gopuram View',
    src: '/images/temple2.png',
  },
  {
    title: 'PKD Balaji Temple Architecture and Surroundings',
    src: '/images/temple3.png',
  },
  {
    title: 'Parlakimidi Venkateswara Swamy Mandir Evening View',
    src: '/images/temple4.png',
  },
  {
    title: 'Sri Balaji Temple PKD Beautiful Architecture',
    src: '/images/temple5.png',
  },
]

const todaysSpecial = {
  id: 1,
  title: "Today's Story - Sri Venkateswara Swamy Temple PKD",
  thumbnail: '/images/lord.png.jpeg',
  media: [
    { type: 'image', url: '/images/lord.png.jpeg', caption: 'Morning Nitya Seva darshan at Sri Venkateswara Swamy Temple Parlakimidi' },
    { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Temple video highlight showing Lord Balaji PKD' },
    { type: 'image', url: '/images/temple2.png', caption: "Today's special Alankaram at Balaji Temple Parlakimidi" },
  ],
}

const donationOptions = [
  {
    title: 'General Donation',
    details: 'Support daily pooja, temple maintenance, and devotee facilities.',
  },
  {
    title: 'Annadanam Seva',
    details: 'Sponsor prasadam and meals for visiting devotees.',
  },
  {
    title: 'Festival Sponsorship',
    details: 'Contribute to special alankarams and major utsavams.',
  },
]

const trustees = [
  {
    name: 'P. Venkateswarulu',
    image: '/images/trusty images/trust1.png.jpeg',
    caption: 'In Revered Memory',
  },
  {
    name: 'Paidighantam Krishnayya Pantulu Garu',
    image: '/images/trusty images/trusty2.png.jpeg',
    caption: 'In Revered Memory',
  },
  {
    name: 'Paidighantam Sitarama Swamy Pantulu',
    image: '/images/trusty images/trusty3.png.jpeg',
    caption: 'In Revered Memory',
  },
  {
    name: 'Trustee Family',
    image: '/images/trusty images/familytrusty.png',
    caption: 'Family of Trustees',
    featured: true,
    description:
      'They are the long-standing trustees of this temple and key pillars of its heritage. Their guidance, devotion, and years of service continue to protect sacred traditions for future generations.',
  },
]

const navItems = [
  { href: '#home', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '#timings', label: 'Timings' },
  { href: '#festivals', label: 'Festivals' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#trustees', label: 'Trustees' },
  { href: '#donations', label: 'Donations' },
  { href: '#contact', label: 'Contact' },
]

const templeLocationUrl = 'https://maps.app.goo.gl/YbMMZ3TLXhoyi81p8?g_st=aw'

function sectionBg(url) {
  return { '--section-image': `url(${url})` }
}

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isGallerySliderOpen, setIsGallerySliderOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [lightboxTouchStartX, setLightboxTouchStartX] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const [activeSpecial, setActiveSpecial] = useState(null)
  const [specialMediaIndex, setSpecialMediaIndex] = useState(0)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const bgMusicRef = useRef(null)
  const isMusicManuallyStoppedRef = useRef(false)

  const previewGalleryImages = galleryImages.slice(0, 3)

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  const openGallerySlider = () => {
    setActiveSlide(0)
    setIsGallerySliderOpen(true)
  }

  const closeGallerySlider = () => {
    setIsGallerySliderOpen(false)
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const goToNextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const goToPreviousLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const goToPreviousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleGalleryTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleGalleryTouchEnd = (event) => {
    if (touchStartX === null) return
    const touchEndX = event.changedTouches[0].clientX
    const swipeDistance = touchStartX - touchEndX
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        goToNextSlide()
      } else {
        goToPreviousSlide()
      }
    }
    setTouchStartX(null)
  }

  const handleLightboxTouchStart = (event) => {
    setLightboxTouchStartX(event.touches[0].clientX)
  }

  const handleLightboxTouchEnd = (event) => {
    if (lightboxTouchStartX === null) return
    const touchEndX = event.changedTouches[0].clientX
    const swipeDistance = lightboxTouchStartX - touchEndX
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        goToNextLightboxImage()
      } else {
        goToPreviousLightboxImage()
      }
    }
    setLightboxTouchStartX(null)
  }

  const openSpecial = (special) => {
    setActiveSpecial(special)
    setSpecialMediaIndex(0)
  }

  const closeSpecial = () => {
    setActiveSpecial(null)
    setSpecialMediaIndex(0)
  }

  const goToNextSpecialMedia = () => {
    if (!activeSpecial) return
    if (specialMediaIndex < activeSpecial.media.length - 1) {
      setSpecialMediaIndex((prev) => prev + 1)
    } else {
      closeSpecial()
    }
  }

  const goToPrevSpecialMedia = () => {
    if (specialMediaIndex > 0) {
      setSpecialMediaIndex((prev) => prev - 1)
    }
  }

  useEffect(() => {
    if (lightboxIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      } else if (event.key === 'ArrowRight') {
        goToNextLightboxImage()
      } else if (event.key === 'ArrowLeft') {
        goToPreviousLightboxImage()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxIndex])

  useEffect(() => {
    const audio = bgMusicRef.current
    if (!audio) return

    const tryStartMusic = () => {
      if (isMusicManuallyStoppedRef.current || !audio.paused) return
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false))
    }

    audio.volume = 0.9
    tryStartMusic()

    const passiveListenerOptions = { passive: true }
    window.addEventListener('pointerdown', tryStartMusic, passiveListenerOptions)
    window.addEventListener('touchstart', tryStartMusic, passiveListenerOptions)
    window.addEventListener('scroll', tryStartMusic, passiveListenerOptions)
    window.addEventListener('wheel', tryStartMusic, passiveListenerOptions)
    window.addEventListener('click', tryStartMusic, passiveListenerOptions)
    window.addEventListener('keydown', tryStartMusic)
    window.addEventListener('focus', tryStartMusic)
    document.addEventListener('visibilitychange', tryStartMusic)

    return () => {
      window.removeEventListener('pointerdown', tryStartMusic)
      window.removeEventListener('touchstart', tryStartMusic)
      window.removeEventListener('scroll', tryStartMusic)
      window.removeEventListener('wheel', tryStartMusic)
      window.removeEventListener('click', tryStartMusic)
      window.removeEventListener('keydown', tryStartMusic)
      window.removeEventListener('focus', tryStartMusic)
      document.removeEventListener('visibilitychange', tryStartMusic)
    }
  }, [])

  const toggleBackgroundMusic = async () => {
    const audio = bgMusicRef.current
    if (!audio) return

    if (isMusicPlaying) {
      isMusicManuallyStoppedRef.current = true
      audio.pause()
      setIsMusicPlaying(false)
      return
    }

    try {
      isMusicManuallyStoppedRef.current = false
      await audio.play()
      setIsMusicPlaying(true)
    } catch {
      setIsMusicPlaying(false)
    }
  }

  return (
    <div className="site-shell">
      <audio
        ref={bgMusicRef}
        src="/music/huming.m4a"
        autoPlay
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />
      <header className="header-bar">
        <nav className="nav-container">
          <div className="brand">
            <div className="brand-logo-wrapper">
              <img src="/images/webiconandlogo.png" alt="Sri Venkateswara Swamy Temple Parlakimidi Logo" className="brand-logo" />
            </div>
            <span className="brand-title">శ్రీ వేంకటేశ్వర స్వామి వారి దేవస్థానం</span>
            <button
              type="button"
              className={`music-toggle ${isMusicPlaying ? 'playing' : 'paused'}`}
              onClick={toggleBackgroundMusic}
              aria-label={isMusicPlaying ? 'Stop background music' : 'Play background music'}
              title={isMusicPlaying ? 'Stop music' : 'Play music'}
            >
              <span className="music-icon-wrap" aria-hidden="true">
                {isMusicPlaying ? (
                  <svg viewBox="0 0 24 24" className="music-icon-svg" role="img" aria-label="Music on icon">
                    <path d="M3 10v4h4l5 4V6L7 10H3z" fill="currentColor" />
                    <path d="M16 9a4 4 0 0 1 0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="music-icon-svg" role="img" aria-label="Music off icon">
                    <path d="M3 10v4h4l5 4V6L7 10H3z" fill="currentColor" />
                    <path d="M16 8l5 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 8l-5 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
          </div>
          <button
            className={`nav-toggle ${isMobileNavOpen ? 'open' : ''}`}
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="site-nav-links"
            aria-label="Toggle navigation menu"
            onClick={toggleMobileNav}
          >
            <span />
            <span />
            <span />
          </button>
          <div id="site-nav-links" className={`nav-links ${isMobileNavOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={item.active ? 'active' : ''}
                onClick={closeMobileNav}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-image-container">
            <img src="/images/herosection.png" alt="Lord Balaji - Sri Venkateswara Swamy Temple Parlakimidi (PKD)" className="hero-deity-img" />
          </div>
          <div className="hero-text">
            <p className="om-namah">OM SRI VENKATESHAYA NAMAH</p>
            <h1>Sri Venkateswara Swamy devasthanam</h1>
            <p className="description">
              Sri Venkateswara Swamy Temple is a historic temple established in the year 1880 by
              Sri Paidighantam Krishnaya Pantulu Garu, the then Deewan of Parlakhemundi
              Maharaja Palace. The temple has been serving devotees for more than a century
              and continues to be maintained by the Paidighantam family as hereditary trustees.
            </p>
            <div className="hero-actions">
              <a href="#timings" className="btn-darshan">View Darshan Timings</a>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-location-strip" aria-label="Temple location">
        <div className="quick-location-inner">
          <p className="location-kicker">Live Temple Location</p>
          <p className="location-address">
            Near Beberta Street / Kumuti Sahi, Parlakhemundi, Gajapati District, Odisha
          </p>
          <div className="location-actions">
            <a
              href={templeLocationUrl}
              className="btn-location primary"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
            <a href="#contact" className="btn-location secondary">Contact Temple</a>
          </div>
        </div>
      </section>

      <main>
        <section className="section namalu-section section-bg" id="namalu" style={sectionBg(sectionBackgrounds.namalu)}>
          <div className="section-header">
            <h2 style={{ color: 'white', textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700' }}>Govinda namas</h2>
            <p style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Experience peace by chanting the sacred names of Lord Venkateswara.</p>
          </div>
          <div className="namalu-wrapper">
            {/* First Row - Moving Left */}
            <div className="namalu-scroll">
              <div className="namalu-track track-left">
                {[...namalu, ...namalu].map((name, index) => (
                  <span key={`row1-${index}`} className="namam-pill">{name}</span>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Right */}
            <div className="namalu-scroll">
              <div className="namalu-track track-right">
                {[...namalu, ...namalu].map((name, index) => (
                  <span key={`row2-${index}`} className="namam-pill secondary">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-bg about" id="about" style={sectionBg(sectionBackgrounds.about)}>
          <div className="about-content">
            <p className="about-kicker">Temple Legacy</p>
            <h2>About the Temple</h2>
            <p className="about-lead">
              <h4>Jai srimanarayana🙏</h4>
              The Sri Venkateswara Swamy Temple is a cornerstone of faith in Parlakhemundi.
              Our temple preserves ancient traditions and provides a serene environment
              for spiritual growth and community gathering.
            </p>
            <p>
              Daily rituals, soul-stirring chants, and selfless service define the
              sanctity of this shrine. We invite all devotees to seek the blessings
              of the Swamy through Darshan and Seva.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              Discover profound spiritual peace at the historic Sri Venkateswara Swamy Temple in Parlakimidi (PKD), a deeply revered Hindu shrine in Odisha. Often known simply as the PKD temple or Balaji temple Parlakimidi, it draws countless devotees seeking Lord Vishnu's divine blessings. If you are searching for a beautiful Venkateswara temple near me, this sacred mandir provides daily darshan, soul-stirring poojas, and grand festival celebrations. Locals take immense pride in preserving the heritage of this Sri Venkateswara Swamy vari Devasthanam PKD, making it a must-visit destination for anyone traveling through the Gajapati district. Come experience the powerful presence of Lord Balaji at the most famous Venkateswara temple Parlakimidi has to offer.
            </p>
          </div>
          <aside className="highlight-card">
            <p className="highlight-kicker" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Daily Darshan</p>
            <h3>Today's Highlights</h3>
            <ul>
              <li>Morning Darshan: 5:30 AM - 10:30 AM</li>
              <li>Evening Darshan: 6:00 PM - 8:00 PM</li>
              <li>Main Festivals: March 19, March 27, and May 12</li>
            </ul>

            <div className="wow-special-container">

              <button
                type="button"
                className="single-status-slide"
                onClick={() => openSpecial(todaysSpecial)}
                aria-label={`View ${todaysSpecial.title}`}
              >
                <span className="single-status-ring" />
                <div className="single-status-thumb-wrap">
                  <img src={todaysSpecial.thumbnail} alt={todaysSpecial.title} className="single-status-thumb" />
                </div>
                <span className="single-status-label">{todaysSpecial.title}</span>
                <span className="single-status-sub">Tap to open</span>
              </button>
            </div>
          </aside>
        </section>

        <section className="section timings-section" id="timings">
          <h2>Darshan Timings</h2>
          <div className="timing-grid">
            <article>
              <h3>Morning Session</h3>
              <p>5:30 AM - 10:30 AM</p>
            </article>
            <article>
              <h3>Evening Session</h3>
              <p>6:00 PM - 8:00 PM</p>
            </article>
          </div>
        </section>

        <section className="section festivals-section" id="festivals">
          <h2>Major Festivals</h2>
          <div className="festival-list">
            {festivals.map((festival) => (
              <article key={festival.title} className="festival-card">
                <h3>{festival.title}</h3>
                <p className="festival-month">{festival.month}</p>
                {festival.details ? <p className="details">{festival.details}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <h2>Divine Gallery</h2>
          <div className="gallery-grid">
            {previewGalleryImages.map((image, index) => (
              <figure key={image.title} className="gallery-card">
                <button
                  type="button"
                  className="gallery-open-btn"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open full image: ${image.title}`}
                >
                  <div className="gallery-media">
                    <img src={image.src} alt={image.title} loading="lazy" />
                  </div>
                </button>
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="gallery-actions">
            <button type="button" className="btn-more-gallery" onClick={openGallerySlider}>
              More images
            </button>
          </div>

          {isGallerySliderOpen ? (
            <div className="gallery-slider" aria-label="Gallery slideshow">
              <button
                type="button"
                className="gallery-nav prev"
                onClick={goToPreviousSlide}
                aria-label="Previous image"
              >
                ‹
              </button>
              <div
                className="gallery-viewport"
                onTouchStart={handleGalleryTouchStart}
                onTouchEnd={handleGalleryTouchEnd}
              >
                <div
                  className="gallery-track"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <figure key={`slide-${image.title}`} className="gallery-slide">
                      <button
                        type="button"
                        className="gallery-open-btn"
                        onClick={() => openLightbox(index)}
                        aria-label={`Open full image: ${image.title}`}
                      >
                        <div className="gallery-slide-media">
                          <img src={image.src} alt={image.title} loading="lazy" />
                        </div>
                      </button>
                      <figcaption>{image.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="gallery-nav next"
                onClick={goToNextSlide}
                aria-label="Next image"
              >
                ›
              </button>
              <div className="gallery-slider-actions">
                <div className="gallery-dots" role="tablist" aria-label="Slide selector">
                  {galleryImages.map((image, index) => (
                    <button
                      key={`dot-${image.title}`}
                      type="button"
                      className={`gallery-dot ${activeSlide === index ? 'active' : ''}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to ${image.title}`}
                    />
                  ))}
                </div>
                <button type="button" className="btn-more-gallery secondary" onClick={closeGallerySlider}>
                  Close
                </button>
              </div>
            </div>
          ) : null}
        </section>

        <section className="section trustees-section" id="trustees">
          <div className="trustees-head">
            <h2>Trustees</h2>
            <p>The temple trust continues to preserve traditions and serve devotees with devotion.</p>
          </div>
          <div className="trustees-grid">
            {trustees.map((trustee, index) => (
              <article
                key={`trustee-${index}`}
                className={`trustee-card ${trustee.featured ? 'trustee-card-featured' : ''}`}
              >
                <div className={`trustee-image-wrap ${trustee.featured ? 'trustee-image-featured' : ''}`}>
                  <img src={trustee.image} alt={trustee.name} loading="lazy" />
                </div>
                <div className="trustee-body">
                  <h3>{trustee.name}</h3>
                  <p className="trustee-memory">{trustee.caption}</p>
                  {trustee.description ? <p className="trustee-note">{trustee.description}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section donation-contact-section" id="donations">
          <div className="donation-panel">
            <p className="panel-kicker">Support The Temple</p>
            <h2>Donations</h2>
            <p className="panel-lead">
              Every heartfelt contribution helps preserve rituals, maintain the temple, and serve devotees.
            </p>
            <div className="donation-grid">
              {donationOptions.map((option) => (
                <article key={option.title} className="donation-card">
                  <h3>{option.title}</h3>
                  <p>{option.details}</p>
                  <span>Offer with devotion and gratitude.</span>
                </article>
              ))}
            </div>
            <div className="donation-actions">
              <a href={templeLocationUrl} target="_blank" rel="noreferrer" className="btn-donation primary">
                Donate at Temple Office
              </a>
              <a href="#contact" className="btn-donation secondary">Call for Bank / UPI Details</a>
            </div>
          </div>

          <div className="contact-panel" id="contact">
            <p className="panel-kicker">Reach Us</p>
            <h2>Contact</h2>
            <div className="contact-list">
              <p><strong>Pradhana Archakulu:</strong> Bhadram Srinivas Acharyulu</p>
              <p><strong>Phone:</strong> +91 9861943833</p>
              <p><strong>Email:</strong> bhadram50@gmail.com</p>
              <p><strong>Office Hours:</strong> 8:00 AM - 8:00 PM (All Days)</p>
            </div>
            <div className="contact-actions">
              <a href="tel:+919861943833" className="btn-donation primary">Call Now</a>
              <a href="mailto:bhadram50@gmail.com" className="btn-donation secondary">Send Email</a>
            </div>
            <div style={{ marginTop: '2rem', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=Venkateswara+Swamy+Temple+Parlakimidi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {lightboxIndex !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Full image preview">
          <button type="button" className="lightbox-backdrop" onClick={closeLightbox} aria-label="Close full image view" />
          <div className="lightbox-content">
            <div className="lightbox-header">
              <span className="lightbox-count">{lightboxIndex + 1} / {galleryImages.length}</span>
              <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close full image">
                &times;
              </button>
            </div>
            <figure className="lightbox-figure">
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].title}
                loading="eager"
                onTouchStart={handleLightboxTouchStart}
                onTouchEnd={handleLightboxTouchEnd}
              />
            </figure>
            <div className="lightbox-footer">
              <p className="lightbox-caption">{galleryImages[lightboxIndex].title}</p>
              <div className="lightbox-controls">
                <button
                  type="button"
                  className="lightbox-nav prev"
                  onClick={goToPreviousLightboxImage}
                  aria-label="Previous full image"
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="lightbox-nav next"
                  onClick={goToNextLightboxImage}
                  aria-label="Next full image"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {activeSpecial !== null ? (
        <div className="story-popup-overlay">
          <button type="button" className="story-close" onClick={closeSpecial} aria-label="Close story">
            &times;
          </button>
          <div className="story-popup-content">
            <div className="story-progress-bar">
              {activeSpecial.media.map((_, idx) => (
                <div
                  key={`progress-${idx}`}
                  className={`story-progress-segment ${idx === specialMediaIndex ? 'active' : ''} ${idx < specialMediaIndex ? 'completed' : ''
                    }`}
                />
              ))}
            </div>
            <div className="story-popup-header">
              <img src={activeSpecial.thumbnail} alt={activeSpecial.title} className="story-header-thumb" />
              <span className="story-header-title">{activeSpecial.title}</span>
            </div>

            <div
              className="story-media-container"
              onClick={goToNextSpecialMedia}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') goToNextSpecialMedia()
              }}
            >
              {activeSpecial.media[specialMediaIndex].type === 'video' ? (
                <video
                  src={activeSpecial.media[specialMediaIndex].url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="story-media-frame"
                />
              ) : (
                <img
                  src={activeSpecial.media[specialMediaIndex].url}
                  alt="special media"
                  className="story-media-frame"
                />
              )}
              <div className="story-caption">
                <p>{activeSpecial.media[specialMediaIndex].caption}</p>
              </div>
            </div>

            {specialMediaIndex > 0 ? (
              <button
                type="button"
                className="story-nav-btn prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevSpecialMedia()
                }}
                aria-label="Previous media"
              >
                ‹
              </button>
            ) : null}
            <button
              type="button"
              className="story-nav-btn next"
              onClick={(e) => {
                e.stopPropagation()
                goToNextSpecialMedia()
              }}
              aria-label="Next media"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-info">
            <h2>Sri Venkateswara Swamy Temple</h2>
            <p>Pradhana Archakulu: Bhadram Srinivas Acharyulu</p>
          </div>
          <div className="footer-links">
            <p className="chant">"Govinda Govinda"</p>
            <a href="#home" className="back-to-top">Back to Top</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
