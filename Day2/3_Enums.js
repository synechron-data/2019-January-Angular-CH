var Mode;
(function (Mode) {
    Mode[Mode["Read"] = 0] = "Read";
    Mode[Mode["Write"] = 1] = "Write";
    Mode[Mode["ReadWrite"] = 2] = "ReadWrite";
})(Mode || (Mode = {}));
function Open(mode) {
    console.log("File opened in mode: ", mode);
}
Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
