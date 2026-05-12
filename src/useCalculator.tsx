import { useState } from 'react'
import type { Operator } from './types'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [current, setCurrent] = useState('')
  const [previous, setPrevious] = useState('')
  const [operator, setOperator] = useState<Operator>(null)

  function operate(a: number, b: number, op: Operator): number {
    switch (op) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return a / b
      default:  return b
    }
  }

  function handleButton(value: string) {
    if (value === 'C') {
      setCurrent('')
      setPrevious('')
      setOperator(null)
      setDisplay('0')
      return
    }

    if (value === '.') {
      if (!current.includes('.')) {
        const next = current + '.'
        setCurrent(next)
        setDisplay(next)
      }
      return
    }

    if (value === 'π') {
      const pi = Math.PI.toString()
      setCurrent(pi)
      setDisplay(pi)
      return
    }

    if (value === '√') {
      if (current) {
        const result = Math.sqrt(parseFloat(current)).toString()
        setCurrent(result)
        setDisplay(result)
      }
      return
    }

    if (value === 'x²') {
      if (current) {
        const result = Math.pow(parseFloat(current), 2).toString()
        setCurrent(result)
        setDisplay(result)
      }
      return
    }

    if (['+', '-', '*', '/'].includes(value)) {
      if (!current) return
      if (previous) {
        const result = operate(parseFloat(previous), parseFloat(current), operator).toString()
        setCurrent('')
        setPrevious(result)
        setDisplay(result)
      } else {
        setPrevious(current)
        setCurrent('')
      }
      setOperator(value as Operator)
      return
    }

    if (value === '=') {
      if (previous && operator && current) {
        const result = operate(parseFloat(previous), parseFloat(current), operator).toString()
        setDisplay(result)
        setCurrent(result)
        setPrevious('')
        setOperator(null)
      }
      return
    }

    // Number input
    const next = current + value
    setCurrent(next)
    setDisplay(next)
  }

  return { display, handleButton }
}