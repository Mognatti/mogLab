import { User } from "firebase/auth";
import { useState } from "react";

export default function useUpdateProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isError, setIsError] = useState(false);

  async function uploadPhoto(file: File, user: User) {
    const URL = `https://ill-blue-rooster-veil.cyclic.app/user/${user.uid}/files`;

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
  return [{ isUpdating, uploadPhoto, isError }];
}
