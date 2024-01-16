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
import DefaultModal from "../Modal";

const stockImages = [stockImg1, stockImg2, stockImg3, stockImg4];
const randomNumber = Math.floor(Math.random() * stockImages.length - 0.0000000001);
const placeholderImage = stockImages[randomNumber];

export default function Dashboard() {
  const { user } = useContext(CurrentUser);
  const [isChanginName, setIsChanginName] = useState<boolean>(false);
  const [newName, setNewName] = useState("");
  const [changePictureModal, setChangePictureModal] = useState<boolean>(false);
  const [imageData, setImageData] = useState<File | null>(null);
  const NameInputRef = useRef<HTMLInputElement | null>(null);
  const [{ logout, isLoading }] = useLogin();
  const [{ uploadPhoto, isUpdating, updateUserName }] = useUpdateProfile();

  useEffect(() => {
    if (isChanginName) {
      NameInputRef.current?.focus();
    }
  }, [isChanginName]);

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

  function handleEditName() {
    setIsChanginName((prev) => !prev);
  }

  async function handleSubmitName() {
    if (user && newName) {
      await updateUserName(user, newName);
    }
  }

  return (
    <>
      <DefaultModal modalOpen={changePictureModal} setModalOpen={setChangePictureModal}>
        <>
          <h3>Selecione uma imagem para usar de perfil</h3>
          <S.InputModal type="file" onChange={(e) => handleFileChange(e)} />
          <S.Button onClick={() => handleChangePicture()} disabled={isUpdating || !imageData}>
            {isUpdating ? <Spinner size="sm" /> : "Salvar"}
          </S.Button>
        </>
      </DefaultModal>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <h2>Bem vindo{user?.displayName ? `, ${user.displayName}!` : "!"}</h2>
        <S.ImageContainer onClick={() => setChangePictureModal((prev) => !prev)} title="Trocar Foto">
          <S.UserImage src={user?.photoURL ?? placeholderImage} alt="profile_picture" />
          <S.PencilIconForImage size="20" />
        </S.ImageContainer>
        <S.InputDiv>
          <S.Input
            ref={NameInputRef}
            type="text"
            id="username"
            name="username"
            disabled={!isChanginName}
            placeholder={user?.displayName ?? "Nome de usuário..."}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={() => setTimeout(() => setIsChanginName(false), 100)} //Delay this event to be the last on queue
          />
          <S.SaveIcon editing={isChanginName} onClick={() => handleSubmitName()} />
          <S.PencilIcon editing={isChanginName} onClick={() => handleEditName()} input />
          {isUpdating && <S.Loading size="sm" />}
        </S.InputDiv>
      </S.Form>
      <br />
      <hr />
      <S.ButtonContainer>
        <S.Button onClick={() => handleLogout()}> {isLoading ? <Spinner size="sm" /> : "logout"} </S.Button>
      </S.ButtonContainer>
    </>
  );
}
