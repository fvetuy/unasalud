const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  h1text: "font-dmsans font-bold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full",
  h2text: "font-dmsans text-[50px] xs:text-[45px] font-bold leading-[70px] xs:leading-[55px] text-black w-full",
  h3text: "font-dmsans text-[45px] xs:text-[30px] font-bold leading-[60px] xs:leading-[40px] text-black w-full",
  h4text: "font-dmsans text-[30px] xs:text-[25px] font-semibold leading-[35px] xs:leading-[25px] text-black w-full",
  h5text: "font-dmsans text-[25px] xs:text-[20px] font-medium leading-[30px] xs:leading-[20px] text-black w-full",
  ptext: "font-dmsans text-[18px] xs:text-[18px] font-medium leading-[27px] xs:leading-[31px] text-zinc-500 w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStsart} flex-col`,
};

export default styles;