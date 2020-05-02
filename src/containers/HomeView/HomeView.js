import React from 'react';

import Cover from '../../components/Cover/Cover';
import LineSeaparator from '../../components/LineSeparator/LineSeparator';
import Services from '../../components/Services/Services';
import Directories from '../../components/Directories/Directories';
import MemberBenefits from '../../components/MemberBenefits/MemberBenefits';

export default () => {

  const scrollToTop = () => {
    window.scrollTo({top: 0})
  }

  return (
    <>
      <Cover />
      <LineSeaparator  />
      <Services  scrollToTop={scrollToTop}/>
      <LineSeaparator />
      <Directories id="directories" scrollToTop={scrollToTop}/>
      <LineSeaparator />
      <MemberBenefits />
      <LineSeaparator />
    </>
  )
}