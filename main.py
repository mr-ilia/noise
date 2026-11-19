while True:
    level = input.sound_level()
    if level >= 150:
        basic.show_icon(IconNames.NO, 0)
    else:
        basic.clear_screen()
    basic.pause(100)
