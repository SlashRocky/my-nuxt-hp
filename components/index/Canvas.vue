<template>
  <canvas id="texture"></canvas>
</template>

<script>
export default {
  mounted() {
    this.canvasAnimStart()
  },
  destroyed() {
    createjs.Ticker.reset()
  },
  methods: {
    canvasAnimStart() {
      let windowWidth = window.innerWidth
      let windowHeight = window.innerHeight
      document.getElementById('texture').width = windowWidth
      document.getElementById('texture').height = windowHeight
      const stage = new createjs.Stage('texture')

      let circles = []
      let circleMaxSize = 50
      let lines = []
      let lineMaxSize = 200
      createjs.Ticker.addEventListener('tick', stage)
      createjs.Ticker.timingMode = createjs.Ticker.RAF

      createjs.Ticker.addEventListener('tick', handleTick)
      function handleTick() {
        updateCircles()
        updateLines()
      }

      const emitParticles = function() {
        for (let i = 0; i < 1; i++) {
          const circle = new createjs.Shape()
          const circleSize = Math.random() * circleMaxSize
          const circleMaxAlpha = Math.random()
          circle.graphics.beginFill('#efefef').drawCircle(0, 0, circleSize)
          stage.addChild(circle)
          circle.x = Math.random() * stage.canvas.width
          circle.y = Math.random() * stage.canvas.height
          circle.vx = 10 * (Math.random() - 0.5)
          circle.vy = 10 * (Math.random() - 0.5)
          circle.maxalpha = circleMaxAlpha
          circle.alpha = 0
          circle.alpha_flug = false
          circle.life = 500
          circle.size = circleSize
          circles.push(circle)

          const line = new createjs.Shape()
          const lineSize = Math.random() * lineMaxSize
          const lineMaxAlpha = Math.random()
          const initX = Math.random() * stage.canvas.width
          const initY = Math.random() * stage.canvas.height
          stage.addChild(line)
          line.graphics.setStrokeStyle(1)
          line.graphics.beginStroke('#ddd')
          line.graphics.moveTo(initX, initY)
          line.graphics.lineTo(
            parseInt(initX) + parseInt(lineSize),
            parseInt(initY) - parseInt(lineSize)
          )
          line.graphics.endStroke()
          line.vx = 10 * (Math.random() - 0.5)
          line.vy = 10 * (Math.random() - 0.5)
          line.maxAlpha = lineMaxAlpha
          line.alpha = 0
          line.alpha_flug = false
          line.life = 500
          lines.push(line)
        }
      }

      setInterval(emitParticles, 100)

      function updateCircles() {
        for (let i = 0; i < circles.length; i++) {
          const circle = circles[i]
          circle.vy += -1
          circle.vx += 1
          circle.vx *= 0.2
          circle.vy *= 0.2
          circle.x += circle.vx
          circle.y += circle.vy
          if (circle.alpha_flug) {
            circle.alpha = circle.alpha - (circle.maxalpha / circle.life) * 2
          } else {
            circle.alpha = circle.alpha + (circle.maxalpha / circle.life) * 2
            if (circle.alpha >= circle.maxalpha) {
              circle.alpha_flug = true
            }
          }
          circle.life -= 1
          if (circle.life <= 0) {
            stage.removeChild(circle)
            circles.splice(i, 1)
          }
        }
      }

      function updateLines() {
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i]
          line.vy += -1
          line.vx += 1
          line.vx *= 0.5
          line.vy *= 0.5
          line.x += line.vx
          line.y += line.vy

          if (line.alpha_flug) {
            line.alpha = line.alpha - (line.maxAlpha / line.life) * 2
          } else {
            line.alpha = line.alpha + (line.maxAlpha / line.life) * 2
            if (line.alpha >= line.maxAlpha) {
              line.alpha_flug = true
            }
          }
          line.life -= 1
          if (line.life <= 0) {
            stage.removeChild(line)
            lines.splice(i, 1)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
canvas#texture {
  vertical-align: bottom;
}
</style>
