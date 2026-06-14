import { ref } from 'vue'

const activeSection = ref('#welcome-section')
let observer = null

export function useActiveSection() {
  const registerObserver = () => {
    if (typeof window === 'undefined' || observer) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = `#${entry.target.id}`
          }
        })
      },
      { root: null, threshold: 0.17 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((sec) => observer.observe(sec))
  }

  const cleanupObserver = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return {
    activeSection,
    registerObserver,
    cleanupObserver
  }
}
