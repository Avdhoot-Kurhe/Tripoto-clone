import React from "react";
import SgVideo from "./SgVideo";
import SGWebseries from "./SGWebseries"
import SGArticles from "./SGArticles";
import SGArts from './SGArts'
import SGEvents from './SGEvents'
import SGFoodies from './SGFoodies'
import SGWhatnew from './SGWhatnew'
import SGVideos from './SGVideos'
import SGShop from "./SGShop";
import Crouselbtn from "./Crouselbtn"
import Imagecrousel from "./Imagecrousel";
import Masterimage from "./Masterimage";
import SGSocial from "./SGSocial";
import { SingaporeWrapper } from "../../styles/singapore.styled";
const Singapore = () => {

  return (
    <>
    <SgVideo/>
    <SingaporeWrapper>
     <Crouselbtn/>
     <Imagecrousel/>
     <SGShop/>
     <Masterimage/>
     <SGWebseries/>
     <SGEvents/>
     <SGWhatnew/>
     <SGFoodies/>
     <SGArts/>
     <SGVideos/>
     <SGArticles/>
     <SGSocial/>
    </SingaporeWrapper>
    </>
  );
};

export default Singapore;
