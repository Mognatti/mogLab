import { User, updateProfile } from "firebase/auth";
import { useState } from "react";

export default function useUpdateProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isError, setIsError] = useState(false);

  async function uploadPhoto(file: File, user: User) {
    const URL = `${import.meta.env.VITE_API_BASE_URL}/user/${user.uid}/files`;

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      setIsUpdating(true);
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });
      if (response.status != 200) {
        setIsError(true);
        alert("Algo deu errado ao atualizar a foto. Verifique o console para mais informações ou tente novamente");
        console.log(response);
        setIsUpdating(false);
      } else {
        setIsUpdating(false);
        alert("Imagem atualizada com sucesso");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsUpdating(false);
    }
  }

  async function updateUserName(user: User, newName: string) {
    const minLength = 3;
    const lettersOnly = /^[a-zA-Z ]+$/;
    if (newName.length <= minLength || newName.length > 20) {
      return alert("Insira um nome entre 4 - 20 caracteres!");
    }
    if (!lettersOnly.test(newName)) {
      return alert("Insira apenas letras ou espaço!");
    }

    try {
      setIsUpdating(true);
      await updateProfile(user, {
        displayName: newName,
      });
      alert("Nome atualizado com sucesso!");
      setIsUpdating(false);
      return window.location.reload();
    } catch (error) {
      alert("Algo deu errado ao realizar a atualização");
      console.log(error);
      setIsUpdating(false);
    }
  }

  return [{ isUpdating, uploadPhoto, updateUserName, isError }];
}
