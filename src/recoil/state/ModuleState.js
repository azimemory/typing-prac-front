import { selectorFamily, atom } from 'recoil';
import axios from "axios";

export const moduleAtom = atom({
  key:'moduleAtom',
  default:null
})

export const moduleListAtom = atom({
  key:'moduleListAtom',
  default:null
})

export const moduleListSelector = selectorFamily({
   key: 'moduleListSelector',
   get:  (url) => async () => {
      const response = await axios.get(url);
      if (response.data.success) {
        return response.data.data.moduleList;
      }else{
        throw response.data.error;
      }
    }
});
