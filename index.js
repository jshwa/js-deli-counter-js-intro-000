var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + " you are number " + (katzDeliLine.length + 1) + " in line."
}

function nowServing(line) {
  if (line.length > 0) {
    return line.pop()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      return "The line is currently: " + (line.length + 1) + line[i]
    }
  } else {
    return "The line is currently empty."
  }
}
