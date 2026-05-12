import React from 'react'
import styles from './CalcButton.module.css'

interface Props {
  label: string
  onClick: (value: string) => void
  variant?: 'default' | 'operator' | 'equals' | 'clear' | 'fn'
}

export default function CalcButton({ label, onClick, variant = 'default' }: Props) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}