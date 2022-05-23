import { selector, atom } from 'recoil';
import { lazy } from 'react';

export const contentAtom = atom({
    key:'contentAtom',
    default:lazy(() => import('components/pages/document/Overview'))
})

export const contentSelector = selector({
    key:'content',
    get:({get}) => {
      return get(contentAtom);
    },
    set: ({set}, newValue) => set(contentAtom, newValue),
  })
  