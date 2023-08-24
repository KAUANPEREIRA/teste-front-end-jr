import Econverse from "../../../assets/vtex.svg";
import { BaseBoardContainer, CopyText } from "./style";

export const BaseBoard = () => {
  return (
    <BaseBoardContainer>
      <CopyText>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </CopyText>
      <img src={Econverse} />
    </BaseBoardContainer>
  );
};
