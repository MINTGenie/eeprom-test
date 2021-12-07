/**
 * Etch-a-sketch EEPROM data format
 * 
 * 0: <Display type> 
 * 
 * 1: <pattern count>
 * 
 * 2,3,4: pattern1_name(3)
 * 
 * 5,6: <pattern_length>
 * 
 * 7,8: <pattern_start_addr>
 * 
 * 0x50: data start
 * 
 * 0x50,0x51: <LED_number><color_idx> ... repeat
 */
input.onButtonPressed(Button.A, function () {
    counter2 = 0
    for (let index = 0; index < 10; index++) {
        v2 = AT24CXX.read_dword(counter2)
        serial.writeValue("x", v2)
        counter2 += 4
    }
    serial.writeValue("Done", 1)
})
input.onButtonPressed(Button.B, function () {
    c1 = 0
    pins.i2cWriteNumber(
    80,
    0,
    NumberFormat.UInt16LE,
    true
    )
    pins.i2cWriteNumber(
    80,
    0,
    NumberFormat.Int8LE,
    false
    )
    for (let index = 0; index < 9; index++) {
        v1 = pins.i2cReadNumber(80, NumberFormat.UInt32BE, true)
        serial.writeValue("x", v1)
        c1 += 1
    }
    v1 = pins.i2cReadNumber(80, NumberFormat.UInt32BE, false)
    serial.writeValue("x", v1)
    serial.writeValue("Done", 1)
})
let v1 = 0
let c1 = 0
let v2 = 0
let counter2 = 0
let value1 = 0
let counter1 = 0
for (let index = 0; index < 10; index++) {
    value1 = randint(100000, 150000)
    serial.writeValue("x", value1)
    AT24CXX.write_dword(counter1, value1)
    counter1 += 4
}
serial.writeValue("Done", 0)
basic.forever(function () {
	
})
