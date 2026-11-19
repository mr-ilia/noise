let level: number;
while (true) {
    level = input.soundLevel()
    if (level >= 150) {
        basic.showIcon(IconNames.No, 0)
    } else {
        basic.clearScreen()
    }
    
    basic.pause(100)
}
