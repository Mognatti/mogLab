import { useContext, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { CurrentUser } from "../../../../context/authContext";
import useLogin from "../../../../hooks/useLogin";
import { Spinner } from "react-bootstrap";
import stockImg1 from "/img/stock_user_img_1.png";
import stockImg2 from "/img/stock_user_img_2.png";
import stockImg3 from "/img/stock_user_img_3.png";
import stockImg4 from "/img/stock_user_img_4.png";
import useUpdateProfile from "../../../../hooks/useUpdateProfile";

const stockImages = [stockImg1, stockImg2, stockImg3, stockImg4];
const randomNumber = Math.floor(Math.random() * stockImages.length - 0.0000000001);
const placeholderImage = stockImages[randomNumber];

export default function Dashboard() {
  const { user } = useContext(CurrentUser);
  const [changeName, setChangeName] = useState<boolean>(false);
  const [changePictureModal, setChangePictureModal] = useState<boolean>(false);
  const [imageData, setImageData] = useState<File | null>(null);
  const ModalRef = useRef<HTMLDivElement | null>(null);
  const [{ logout, isLoading }] = useLogin();
  const [{ uploadPhoto, isUpdating }] = useUpdateProfile();

  useEffect(() => {
    ModalRef.current?.addEventListener("click", () => {
      setChangePictureModal(false);
    });
  }, [setChangePictureModal, changePictureModal]);

  async function handleLogout() {
    await logout();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageData(file);
    }
  }

  async function handleChangePicture() {
    if (imageData && user) {
      await uploadPhoto(imageData, user);
    }
  }

  return (
    <>
      <S.ModalContainer>
        <S.ModalBg ref={ModalRef} display={changePictureModal} />
        <S.ModalContent display={changePictureModal}>
          <h3>Selecione uma imagem para usar de perfil</h3>
          <S.Input type="file" onChange={(e) => handleFileChange(e)} />
          <S.Button onClick={() => handleChangePicture()} disabled={isUpdating || !imageData}>
            {isUpdating ? <Spinner size="sm" /> : "Salvar"}
          </S.Button>
        </S.ModalContent>
      </S.ModalContainer>
      <h2>Bem vindo {user?.displayName ? `, ${user.displayName}!` : "!"}</h2>
      <S.Form>
        <div>
          <S.UserImage
            src={user?.photoURL ?? placeholderImage}
            alt="profile_picture"
            onClick={() => setChangePictureModal((prev) => !prev)}
          />
          <S.PencilIcon input={false} onClick={() => setChangePictureModal((prev) => !prev)} />
        </div>
        <label htmlFor="username">Nome</label>
        <S.InputDiv>
          <input
            type="text"
            id="username"
            name="username"
            disabled={!changeName}
            placeholder={user?.displayName ?? "Nome de usuário..."}
          />
          {user?.displayName}
          <S.PencilIcon onClick={() => setChangeName((prev) => !prev)} input />
        </S.InputDiv>
      </S.Form>
      <S.Button onClick={() => handleLogout()}> {isLoading ? <Spinner size="sm" /> : "logout"} </S.Button>
    </>
  );
}
