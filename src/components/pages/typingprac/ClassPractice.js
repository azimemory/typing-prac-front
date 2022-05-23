import { useRecoilValue } from "recoil";
import { classAtom } from 'recoil/state/ClassState';

import 'styles/document/document.scss';
import Statistics from "components/UI/molecules/typingprac/Statistics";
import SentencePannel from "components/UI/molecules/typingprac/SentencePannel";

function ClassPractice() {

  console.dir('render ClassPractice');
  const classState = useRecoilValue(classAtom);

  return (
    <main role="main">
      <div className="header">
        <div className="sub-title"><span className="packageLabelInType">Module</span>&nbsp;<a href="#">{classState.packaze.module.name}</a></div>
        <div>
          <span className="packageLabelInType">Package {classState.packaze.name}</span>&nbsp;
          <a href="#"></a>
        </div>
        <h2 className="title">Class {classState.name}</h2>
      </div>

      <div className="contentContainer">
          <Statistics />
          <SentencePannel />
      </div>
    </main>
  );
}

export default ClassPractice;

