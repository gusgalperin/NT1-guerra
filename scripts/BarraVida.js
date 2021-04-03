class BarraVida{
    constructor(container, nivelInicial) {
        this._container = document.getElementById(container);
        this.set(nivelInicial);
    }

    set(cuanto){
        const progress = this._container.querySelector('.progress-done');

        progress.style.width = cuanto + '%';
        progress.style.opacity = 1;

        // this._container.getElementsByClassName('staminaInfo')[0].innerText = cuanto;
    }
}