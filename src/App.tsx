import React from 'react'
import { useCalculator } from './useCalculator'
import CalcButton from './components/CalcButton'
import styles from './App.module.css'

const BUTTONS: { label: string; variant?: 'default' | 'operator' | 'equals' | 'clear' | 'fn' }[] = [
  { label: 'C',  variant: 'clear' },
  { label: '√',  variant: 'fn' },
  { label: 'x²', variant: 'fn' },
  { label: 'π',  variant: 'fn' },
  { label: '7' }, { label: '8' }, { label: '9' },
  { label: '/', variant: 'operator' },
  { label: '4' }, { label: '5' }, { label: '6' },
  { label: '*', variant: 'operator' },
  { label: '1' }, { label: '2' }, { label: '3' },
  { label: '-', variant: 'operator' },
  { label: '0' }, { label: '.' },
  { label: '=', variant: 'equals' },
  { label: '+', variant: 'operator' },
]

export default function App() {
  const { display, handleButton } = useCalculator()

  return (
    <div className={styles.wrapper}>
      <div className={styles.calculator}>
        <div className={styles.display}>{display}</div>
        <div className={styles.grid}>
          {BUTTONS.map(({ label, variant }) => (
            <CalcButton
              key={label}
              label={label}
              variant={variant}
              onClick={handleButton}
            />
          ))}
        </div>
      </div>
    </div>
  )
}