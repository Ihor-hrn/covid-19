// function changeColor(newColor) {
//     let elem = document.getElementById("#logo-main");
//     let randomIndex = Math.floor(Math.random() * 4);
//     let color = [#8c16db, #65149c, #4a1070, #3a0b59];
//     let randomColor = color[randomIndex];
// }

    var r_col = 0;

    function get_random_color() {
        r_col = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        return r_col;
    }
    get_random_color();
    alert.onclick.document.getElementById("#id");