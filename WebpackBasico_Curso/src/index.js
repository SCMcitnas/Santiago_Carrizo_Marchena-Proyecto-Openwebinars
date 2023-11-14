import comp from "./componentes/comp";
import './styles/styles.css';
document.body.appendChild(comp('Prueba'));


if(module.hot) {
    module.hot.accept('./componentes/comp.js', () =>{
        const newComponent = P();
        document.body.replaceChild(newComponent, comp);

        comp = newComponent;
    })
}