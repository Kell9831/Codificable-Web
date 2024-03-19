class Calculator {
  constructor() {
    this.numeroPrevio = "";
    this.operador = "";
    this.numeroActual = "";
    this.numDigit = 0;
    this.checkpoint = false;
    this.checkOperador = false;
    this.checkResult = false;
    this.checkDelete = false;
    this.indexOperation = -1;
    this.listOperation = ["÷", "×", "-", "+"];
    this.displayNumPrev = document.querySelector(".calculator--numeroPrevio");
    this.displayOperator = document.querySelector(".calculator--operador");
    this.displayNumActual = document.querySelector(".calculator--numeroActual");
    this.keys = document.querySelector(".calculator__keys");

    this.attachEventListeners();
  }

  redondearNumero(numero) {
    const numeroRendondeado = Number(numero.toFixed(2));
    return numeroRendondeado;
  }

  calcularResultado() {
    this.indexOperation = this.listOperation.indexOf(this.operador);
    let finalResult;

    if (this.numeroPrevio === "") this.numeroPrevio = "0";

    switch (this.indexOperation) {
      case 0:
        finalResult =
          parseFloat(this.numeroPrevio) / parseFloat(this.numeroActual);
        break;
      case 1:
        finalResult =
          parseFloat(this.numeroPrevio) * parseFloat(this.numeroActual);
        break;
      case 2:
        finalResult =
          parseFloat(this.numeroPrevio) - parseFloat(this.numeroActual);
        break;
      case 3:
        finalResult =
          parseFloat(this.numeroPrevio) + parseFloat(this.numeroActual);
        break;
    }

    finalResult = this.redondearNumero(finalResult);
    this.displayNumActual.textContent = "";
    this.numeroActual = "";

    this.displayOperator.textContent = "";
    this.numeroPrevio = finalResult;
    this.displayNumPrev.textContent = finalResult;

    this.checkResult = true;
  }

  actualizarDisplay() {
    this.displayNumPrev.textContent = this.numeroPrevio;
    this.displayOperator.textContent = this.operador;
    this.displayNumActual.textContent = this.numeroActual;
  }

  attachEventListeners() {
    this.keys.addEventListener("click", (event) => {
      const keyClicked = event.target;
      if (keyClicked.tagName === "LI") {
        const keyValue = keyClicked.textContent;
        console.log("Valor clicado:", keyValue);

        this.checkDelete =
          keyClicked.querySelector("svg") !== null ||
          keyClicked.tagName === "SVG";

        if (!this.checkDelete) {
          if (!this.checkOperador) {
            if (keyValue >= 0 && keyValue <= 9) {
              if (this.numDigit === 0) {
                this.numeroPrevio = keyValue;
                if (keyValue === "0") {
                  this.numeroPrevio = "0.";
                }
                this.numDigit++;
              } else if (this.numDigit >= 1 && this.numDigit < 5) {
                if (this.numeroPrevio !== "0") {
                  this.numeroPrevio += keyValue;
                  this.numDigit++;
                }
              }
            }

            if (keyValue === "." && !this.checkpoint) {
              if (this.numDigit === 0) {
                this.numeroPrevio = "0.";
                this.numDigit++;
              } else {
                this.numeroPrevio += keyValue;
                this.numDigit++;
              }
              this.checkpoint = true;
            }
          } else {
            if (keyValue >= 0 && keyValue <= 9) {
              if (this.numDigit === 0) {
                this.numeroActual = keyValue;
                if (keyValue === "0") {
                  this.numeroActual = "0.";
                }
                this.numDigit++;
              } else if (this.numDigit >= 1 && this.numDigit < 5) {
                if (this.numeroPrevio !== "0") {
                  this.numeroActual += keyValue;
                  this.numDigit++;
                }
              }
            }

            if (keyValue === "." && !this.checkpoint) {
              if (this.numDigit === 0) {
                this.numeroActual = "0.";
                this.numDigit++;
              } else {
                this.numeroActual += keyValue;
              }
              this.checkpoint = true;
            }
          }
        }

        this.actualizarDisplay();

        if (keyClicked.textContent === "=") {
          if (this.numeroActual !== "") {
            this.calcularResultado();
          }
        }

        this.indexOperation = this.listOperation.indexOf(keyValue);
        console.log("Soy una operacion de ", this.indexOperation);
        if (
          this.indexOperation !== -1 &&
          this.checkOperador &&
          this.numeroActual.length > 0
        ) {
          this.calcularResultado();
        }

        if (this.indexOperation !== -1) {
          this.operador = keyValue;
          this.checkOperador = true;
          this.checkpoint = false;
          this.numDigit = 0;
          this.displayOperator.textContent = this.operador;
        }
      }

      if (keyClicked.textContent === "c") {
        this.numeroPrevio = "";
        this.operador = "";
        this.numeroActual = "";
        this.displayNumPrev.textContent = this.numeroPrevio;
        this.displayOperator.textContent = this.operador;
        this.displayNumActual.textContent = this.numeroActual;
        this.numDigit = 0;
        this.checkpoint = false;
        this.checkOperador = false;
        this.checkResult = false;
      }

      if (this.checkDelete) {
        if (!this.checkOperador) {
          if (this.numeroPrevio.length > 0) {
            this.numeroPrevio = this.numeroPrevio.slice(0, -1);
            this.numDigit--;
            this.displayNumPrev.textContent = this.numeroPrevio;
          }
        } else {
          if (this.numeroActual.length > 0) {
            this.numeroActual = this.numeroActual.slice(0, -1);
            this.numDigit--;
            this.displayNumActual.textContent = this.numeroActual;
          }
        }
      }
    });
  }
}

const calculator = new Calculator();
