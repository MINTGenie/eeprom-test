input.onButtonPressed(Button.A, function () {
    counter = 0
    for (let index = 0; index < 10; index++) {
        value = AT24CXX.read_dword(counter)
        serial.writeValue("x", value)
        counter += 4
    }
    serial.writeValue("Done", 1)
})
let value = 0
let counter = 0
counter = 0
for (let index = 0; index < 10; index++) {
    value = randint(100000, 150000)
    serial.writeValue("x", value)
    AT24CXX.write_dword(counter, value)
    counter += 4
}
serial.writeValue("Done", 0)
basic.forever(function () {
	
})
