/*
## Énoncé
Votre mission est de contrôler l’ouverture du panneau, en deux temps :
1. au clic, JavaScript déclenche l’animation qui élargit le panneau ;
2. quand celle-ci se termine, JavaScript déclenche l’apparition du texte.

## Aides

1. Sur chacun des `.panel` vous devrez ajouter une classe `open` au clic pour provoquer l'ouverture de ce panel.
2. Quand la _transition_ **css** de cette ouverture se termine (voir l'écouteur d'événement [transitionend](https://developer.mozilla.org/fr/docs/Web/Events/transitionend), vous devez ajouter la classe `open-active` qui fait apparaître le texte.
2. Quand on clique une seconde fois sur un `.panel` alors qu'il est déjà ouvert, les classes `open` et `open-active` doivent être retirées.
*/

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
