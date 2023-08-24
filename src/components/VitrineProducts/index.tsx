// import Swiper core and required modules

import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import axios from "axios";
import { useEffect, useState } from "react";
import { ModalContainer } from "./ModalContainer";
import {
  ButtonPurchase,
  Card,
  CardDescription,
  Price,
  PriceInstallments,
  PriceTraced,
  VitrineProductsContainer,
} from "./style";

SwiperCore.use([]);

export type Props = {
  descriptionShort: string;
  photo: string;
  price: number;
  productName: string;
};

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const VitrineProducts = () => {
  const [dataProducts, setDataProducts] = useState<Props[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Props | any>(null);
  function OpenModal(product: Props) {
    setModalIsOpen(true);
    setSelectedProduct(product);
  }

  function CloseModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(
          `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`
        )
        .then((res) => {
          setDataProducts(res.data.products);
        });
    };
    getProducts();
  }, []);

  const swiperParams = {
    slidesPerView: 4,
    navigation: true,
  };

  return (
    <>
      <VitrineProductsContainer>
        <Swiper {...swiperParams}>
          {dataProducts.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <Card>
                  <img src={data?.photo} />
                  <CardDescription>{data?.descriptionShort}</CardDescription>
                  <PriceTraced>R$ 30,90</PriceTraced>
                  <Price>R${data.price},00</Price>
                  <PriceInstallments>
                    ou 2x de R$ 49,95 sem juros
                  </PriceInstallments>
                  <ButtonPurchase onClick={() => OpenModal(data)}>
                    Comprar
                  </ButtonPurchase>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>{" "}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={CloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={CloseModal}>X</button>

          {selectedProduct && (
            <ModalContainer selectedProduct={selectedProduct} />
          )}
        </Modal>
      </VitrineProductsContainer>
    </>
  );
};
