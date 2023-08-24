import {
  AbouUsTitle,
  AboutUs,
  AboutUsSociais,
  AboutUsSpan,
  FooterContainer,
  FooterContent,
  TypePayments,
} from "./style";

import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import Payments from "../../assets/formas_pagamento.png";
import { BaseBoard } from "./BaseBoard/BaseBoard";
import { SignUp } from "./SignUp/SignUp";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div style={{ display: "flex" }}>
          <AboutUs>
            <AbouUsTitle>Sobre nós</AbouUsTitle>
            <AboutUsSpan>CONHEÇA COMO COMPRAR INDICAÇÃO e DESCONTO</AboutUsSpan>
            <AboutUsSociais>
              <BiLogoFacebook style={{ color: "#fff" }} size={30} />
              <BiLogoInstagram
                style={{ color: "#fff", marginLeft: "5px" }}
                size={30}
              />
              <BiLogoYoutube
                style={{ color: "#fff", marginLeft: "5px" }}
                size={30}
              />
            </AboutUsSociais>
          </AboutUs>

          <AboutUs>
            <AbouUsTitle>INFORMAÇÕES UTEIS</AbouUsTitle>
            <AboutUsSpan>
              FALE CONOSCO DÚVIDAS Prazos de Entrega Formas de Pagamento
              Política de privacidade Trocas e Devoluções
            </AboutUsSpan>
          </AboutUs>
          <TypePayments>
            <AbouUsTitle>TIPOS DE PAGAMENTOS</AbouUsTitle>
            <img src={Payments} />
          </TypePayments>
        </div>
        <SignUp></SignUp>
      </FooterContent>
      <hr></hr>
      <BaseBoard />
    </FooterContainer>
  );
};
