import { useState } from 'react';

export const useTranslate = () => {
     const [translate, setTranslate] = useState(true);
     const [translationLang, setTranslationLang] = useState("Bn");

     const handleChangeLang = (e) => {
          setTranslationLang(e.target.value);
     }

     return [translate, setTranslate, translationLang, handleChangeLang]
};