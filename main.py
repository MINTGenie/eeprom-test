def on_button_pressed_a():
    global counter, value
    counter = 0
    for index in range(10):
        value = AT24CXX.read_dword(counter)
        serial.write_value("x", value)
        counter += 4
    serial.write_value("Done", 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

value = 0
counter = 0
counter = 0
for index2 in range(10):
    value = randint(100000, 150000)
    serial.write_value("x", value)
    AT24CXX.write_dword(counter, value)
    counter += 4
serial.write_value("Done", 0)

def on_forever():
    pass
basic.forever(on_forever)
