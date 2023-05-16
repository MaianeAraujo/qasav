import { elementos } from "../Simulacao/elementos";
import { elemento } from "./elementos";

class MenuUI {
    acessarMenu(){
        cy.get(elemento.buttonAcessoMenu).click()
    }

    menuComercial(){
        cy.get(elemento.selectMenuComercial).click()    
    }

    menuPosVendas(){
        cy.get(elemento.selectMenuPosVendas).click()
    }


}





class MenuAPI {}
const AcessoMenu = {
  menuUI: new MenuUI(),
  menuAPI: new MenuAPI(),
};
export default AcessoMenu;