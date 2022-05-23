import { atom } from 'recoil';
import { localStorageEffect } from 'recoil/effect/LocalStorageEffect'

export const user = atom({
    key: 'userInfo',
    default:{
      "email":"anonymous",
      "token":""
    },
    effects: [
      localStorageEffect('userInfo'),
    ]
 });

