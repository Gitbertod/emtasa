import React from 'react'
import styles from './SectionComponent.module.css'

const SectionComponent = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default SectionComponent