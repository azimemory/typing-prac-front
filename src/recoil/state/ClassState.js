import { atom, selectorFamily } from 'recoil';
import axios from "axios";

export const classAtom = atom({
  key:'classAtom',
  default:null
})

export const classListAtom = atom({
  key:'classListAtom',
  default:null
})

export const classListSelector = selectorFamily({
    key: 'classListSelector',
    get:  (url) => async () => {
       const response = await axios.get(url);
       if (response.data.success) {
         return response.data.data.classList;
       }else{
         throw response.data.error;
       }
    }
});
 
