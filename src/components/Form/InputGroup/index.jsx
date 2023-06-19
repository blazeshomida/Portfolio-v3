import React from 'react'
import styles from './index.module.scss'

const InputGroup = ({label, placeholder, type}) => {
  return (
    <div className={styles['input-group']}>
        <label className={styles['input-label']}>{label}</label>
        {type === "textarea" 
        ? <textarea name={label} className={styles['input-field']} placeholder={placeholder} required></textarea> 
        : <input name={label} className={styles['input-field']} placeholder={placeholder} type={type} required/>}
        
    </div>
  )
}

export default InputGroup