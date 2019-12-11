(function () {
    const FlexPanel = {
        start(){
            document.documentElement.classList.add('js-enabled');
            this.panels = document.querySelectorAll('.panel');
            this.growPanel();
        },
        growPanel() {
            for(let panel of this.panels) {
                panel.addEventListener('click', (e) => {
                    panel.classList.toggle('open');
                });

                panel.addEventListener('transitionend', (e) => {
                    if (panel.classList.contains('open') === true){
                        panel.classList.add('open-active');
                    } else {
                        panel.classList.remove('open-active');
                    }
                });
            }
        }

    }
    FlexPanel.start();
}
)();

//si panel have class open active alors remove et add dans celui cliqué`