document.addEventListener("DOMContentLoaded", () => {
    // Accordion
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");
        title.addEventListener("click", () => {
            const content = item.querySelector(".accordion-content");

            accordionItems.forEach(i => {
                if (i !== item) i.querySelector(".accordion-content").style.display = "none";
            });

            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");
        const content = item.querySelector(".accordion-content");

        title.addEventListener("click", () => {
            accordionItems.forEach(i => {
                if (i !== item) {
                    i.querySelector(".accordion-content").classList.remove("open");
                }
            });

            content.classList.toggle("open");
        });
    });
});

// Fungsi untuk scroll ke bagian aturan
function scrollToRules() {
    const rulesSection = document.getElementById("rules");
    rulesSection.scrollIntoView({ behavior: "smooth" });
}


// Kalkulator Turunan
const input = document.getElementById('function').value;

const result = document.getElementById('result');

function calculateDerivative() {
    const input = document.getElementById('function').value; 
    const result = document.getElementById('result');

    // Fungsi untuk menghitung turunan dasar
    try {
        // Pisahkan suku-suku
        const terms = input.split(/([+-])/).filter(term => term.trim());
        let derivative = [];

        for (let i = 0; i < terms.length; i++) {
            let term = terms[i].trim();
            
            // Skip operators
            if (term === '+' || term === '-') {
                derivative.push(term);
                continue;
            }

            // Cek apakah ada x
            if (term.includes('x')) {
                // Cek apakah ada pangkat
                if (term.includes('^')) {
                    const [coef, power] = term.split('x^');
                    const newCoef = coef ? Number(coef) * Number(power) : Number(power);
                    const newPower = Number(power) - 1;
                    
                    if (newPower === 0) {
                        derivative.push(newCoef.toString());
                    } else if (newPower === 1) {
                        derivative.push(`${newCoef}x`);
                    } else {
                        derivative.push(`${newCoef}x^${newPower}`);
                    }
                } else {
                    // Kasus ax
                    const coef = term.replace('x', '') || '1';
                    derivative.push(coef === '1' ? '1' : coef);
                }
            } else {
                // Konstanta
                derivative.push('0');
            }
        }

        result.textContent = derivative.join(' ').replace(/\s+([+-])\s+/g, ' $1 ');
    } catch (error) {
        result.textContent = "Format fungsi tidak valid";
    }
}
