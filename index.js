(() => {
    const html = document.documentElement;
    if (html.getAttribute("data-theme") !== "dark") {
        html.setAttribute("data-theme", "dark");
    }

    const codes = {
        BONITA: 0, //#0 En el bolsillo
        GARFIELD: 1, //#1 Air Fryer
        MUNCH: 2, //#2 Se lo doy dia 2
        CARBONELL: 3, //#3 Se lo doy dia 3
        SASORI: 4, //#4 Se lo doy dia 4
        BEPO: 5, //#5 Se lo doy dia 5
    };

    const prizes = [
        "Dame un beso 😘", 
        "Tienda Campaña",
        "CTRL + Mery.jpg",
        "Estante de libros",
        "Buzón",
        "¿Al final ha llegado a tiempo?",
    ];

    const input = document.getElementById("userInput");
    const grid = document.getElementById("prizeGrid");

    const openWindow = (idx) => {
        const win = grid && grid.querySelector(`.window[data-index="${idx}"]`);
        if (!win) return;
        if (win.classList.contains("open")) {
            win.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.02)" },
                    { transform: "scale(1)" },
                ],
                { duration: 300 }
            );
            return;
        }
        const prizeEl = win.querySelector(".prize");
        prizeEl.textContent = prizes[idx] || "🎉";
        win.classList.add("open");

        win.classList.add("celebrate");
        setTimeout(() => win.classList.remove("celebrate"), 1200);
    };

    const markWrong = () => {
        if (!input) return;
        input.classList.add("wrong");
        setTimeout(() => input.classList.remove("wrong"), 700);
    };

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const code = input.value.trim().toUpperCase();
                if (!code) return;
                if (codes.hasOwnProperty(code)) {
                    openWindow(codes[code]);
                } else {
                    markWrong();
                }
                input.value = "";
            }
        });
    }
})();
