import confetti from 'canvas-confetti'

export function sideCannons(seconds = 3) {
  const end = Date.now() + seconds * 1000
  const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1']

  const frame = () => {
    if (Date.now() > end)
      return

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors,
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors,
    })

    requestAnimationFrame(frame)
  }

  frame()
}
