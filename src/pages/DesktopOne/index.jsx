import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="sm:h-[688px] md:h-[753px] h-[922px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat sm:h-[688px] md:h-[753px] h-[915px] inset-[0] justify-center m-auto p-[34px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group20.png')" }}
            >
              <div className="sm:h-[688px] md:h-[753px] h-[817px] m-auto w-[93%] md:w-full">
                <div className="absolute md:h-[548px] h-[587px] left-[0] top-[0] w-[42%] sm:w-full">
                  <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[77%]">
                    <div className="flex flex-col gap-[38px] justify-start w-full">
                      <Img
                        className="h-[65px] md:h-auto object-cover w-[29%]"
                        src="images/img_logo1.png"
                        alt="logoOne"
                      />
                      <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[102px] w-[77%] md:w-full">
                        <div className="border-[9px] border-solid border-white-A700_89 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="border-[9px] border-solid border-white-A700_89 h-[196px] mt-[78px] rounded-[50%] w-[196px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 h-[15px] left-[45%] rounded-[7px] top-[1%] w-[15px]"></div>
                  <div className="absolute bottom-[12%] flex flex-col gap-3 justify-start left-[3%] w-[12%]">
                    <div className="border-8 border-solid border-white-A700_89 h-[30px] md:ml-[0] ml-[33px] rounded-[50%] w-[30px]"></div>
                    <div className="border-[9px] border-solid border-white-A700_89 h-12 mr-[15px] rounded-[50%] w-12"></div>
                  </div>
                  <div className="absolute bottom-[0] h-[548px] inset-x-[0] mx-auto w-[548px] sm:w-full">
                    <Img
                      className="h-[548px] m-auto rounded-[50%] w-[548px]"
                      src="images/img_pexelsandreap.png"
                      alt="pexelsandreap"
                    />
                    <div className="absolute border-[9px] border-solid border-white-A700_89 h-[76px] left-[20%] rounded-[50%] top-[32%] w-[76px]"></div>
                    <div className="absolute border-[9px] border-solid border-white-A700_89 h-[42px] right-[23%] rounded-[50%] top-[13%] w-[42px]"></div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[142px] items-center justify-start right-[13%] top-[2%] w-[44%]">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtLatoMedium20"
                    >
                      Courses
                    </Text>
                    <div className="flex flex-col h-2.5 items-center justify-end ml-1.5 sm:ml-[0] sm:mt-0 mt-[9px] rotate-[180deg] w-2.5">
                      <Img
                        className="h-1.5"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[72px] text-white-A700 text-xl"
                      size="txtLatoMedium20"
                    >
                      Platforms
                    </Text>
                    <div className="flex flex-col h-2.5 items-center justify-end ml-1 sm:ml-[0] sm:mt-0 mt-[9px] rotate-[180deg] w-2.5">
                      <Img
                        className="h-1.5"
                        src="images/img_vector.svg"
                        alt="vector_One"
                      />
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[79px] text-white-A700 text-xl"
                      size="txtLatoMedium20"
                    >
                      Resources
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[95px] text-white-A700 text-xl"
                      size="txtLatoMedium20"
                    >
                      About
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[78%] md:w-full">
                    <Text
                      className="md:text-5xl text-[64px] text-white-A700"
                      size="txtLatoBold64"
                    >
                      <>
                        A revolutionary
                        <br />
                        way to educate.
                      </>
                    </Text>
                    <Text
                      className="mt-[21px] text-lg text-white-A700"
                      size="txtLatoLight18"
                    >
                      <>
                        “Online education is electronically supported learning
                        that
                        <br /> relies on the Internet for teacher/student
                        interaction and
                        <br /> the distribution of class materials.”
                      </>
                    </Text>
                    <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[3px] mt-[52px] w-[30%] md:w-full">
                      <Img
                        className="h-[45px] w-[45px]"
                        src="images/img_antdesignplaycirclefilled.svg"
                        alt="antdesignplayci"
                      />
                      <div className="flex flex-col items-start justify-start w-[57%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtLatoRegular14"
                        >
                          What’s null?
                        </Text>
                        <Line className="bg-white-A700 h-px rotate-[-180deg] w-[96%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start right-[0] w-[82%]">
                  <div className="bg-white-A700 border border-deep_purple-A200 border-solid flex flex-col items-center justify-start md:mt-0 mt-[37px] p-[26px] sm:px-5 rounded-[15px] w-[16%] md:w-full">
                    <Img
                      className="h-[50px] mt-[7px] w-[50px]"
                      src="images/img_bxbxstime.svg"
                      alt="bxbxstime"
                    />
                    <Text
                      className="mt-3 text-2xl md:text-[22px] text-deep_purple-A400 sm:text-xl"
                      size="txtLatoHeavy24"
                    >
                      60,000+
                    </Text>
                    <Text
                      className="mb-[13px] text-deep_purple-A400 text-lg"
                      size="txtRobotoMedium18"
                    >
                      Hours content
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-deep_purple-A200 border-solid flex flex-col items-center justify-center md:ml-[0] ml-[147px] md:mt-0 mt-[37px] p-[27px] sm:px-5 rounded-[15px] w-[16%] md:w-full">
                    <Img
                      className="h-[50px] mt-1.5 w-[50px]"
                      src="images/img_elgroup.svg"
                      alt="elgroup"
                    />
                    <Text
                      className="mt-3 text-2xl md:text-[22px] text-deep_purple-A400 sm:text-xl"
                      size="txtLatoHeavy24"
                    >
                      1,00,000+
                    </Text>
                    <Text
                      className="mb-3 text-deep_purple-A400 text-lg"
                      size="txtRobotoMedium18"
                    >
                      Students
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-deep_purple-A200 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[147px] md:mt-0 mt-[37px] p-[33px] sm:px-5 rounded-[15px] w-[16%] md:w-full">
                    <div className="flex flex-col font-lato gap-[15px] items-start justify-start w-[55%] md:w-full">
                      <Img
                        className="h-[45px] ml-0.5 md:ml-[0] w-[45px]"
                        src="images/img_emojionemonoto.svg"
                        alt="emojionemonoto"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_purple-A400 sm:text-xl"
                        size="txtLatoHeavy24"
                      >
                        110+
                      </Text>
                    </div>
                    <Text
                      className="mb-1.5 text-deep_purple-A400 text-lg"
                      size="txtRobotoMedium18"
                    >
                      Countries
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] justify-start ml-24 md:ml-[0] w-[18%] md:w-full">
                    <div className="flex flex-row gap-[43px] items-start justify-end ml-10 md:ml-[0] w-4/5 md:w-full">
                      <div className="border-8 border-solid border-white-A700_89 h-[30px] mt-[31px] rounded-[50%] w-[30px]"></div>
                      <div className="border-[9px] border-solid border-white-A700_89 h-[78px] rounded-[50%] w-[78px]"></div>
                    </div>
                    <div className="border-[9px] border-solid border-white-A700_89 h-12 rounded-[50%] w-12"></div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[31%] h-[260px] left-[5%]"
                src="images/img_ellipse45.svg"
                alt="ellipseFortyFive"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-[196px] object-cover right-[0] w-[11%]"
              src="images/img_ellipse2.png"
              alt="ellipseTwo_One"
            />
          </div>
          <Text
            className="md:ml-[0] mt-[55px] mx-[553px] text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
            size="txtLatoHeavy36"
          >
            Our Popular Courses
          </Text>
          <Text
            className="mt-[5px] mx-auto text-center text-gray-800 text-sm w-[31%] sm:w-full"
            size="txtLatoRegular14Gray800"
          >
            Lorem ipsum dolor sit amet, in sed integer. Scelerisque nam evget
            imperdiet accumsan, ipsum turpis cursus. In elit amet, tortor nunc.
          </Text>
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-end md:ml-[0] ml-[243px] mr-[170px] mt-[66px] md:px-5 w-[72%] md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[73px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[93%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[214px] relative w-full">
                    <Img
                      className="h-[214px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <Button
                      className="absolute cursor-pointer leading-[normal] left-[3%] min-w-[83px] text-center text-sm top-[3%]"
                      shape="round"
                    >
                      Creative
                    </Button>
                  </div>
                  <Text
                    className="mt-[17px] text-2xl md:text-[22px] text-center text-indigo-900_01 sm:text-xl"
                    size="txtLatoBold24"
                  >
                    Creative Writing
                  </Text>
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[85%] md:w-full">
                    <Text
                      className="text-center text-gray-800 text-sm"
                      size="txtLatoRegular14Gray800"
                    >
                      <>
                        Creative Writing : Creative writing is
                        <br /> any writing that goes outside <br />
                        the bounds of normal professional{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_antdesignplaycirclefilled_deep_purple_a200.svg"
                        alt="antdesignplayci"
                      />
                      <Text
                        className="ml-2 text-[13px] text-center text-indigo-900_01"
                        size="txtLatoBold13"
                      >
                        12x Lessons
                      </Text>
                      <Button
                        className="border border-deep_purple-A200 border-solid cursor-pointer flex items-center justify-center min-w-[56px] ml-[75px] rounded-[9px]"
                        rightIcon={
                          <Img
                            className="h-[19px] ml-[3px]"
                            src="images/img_flatcoloriconsrating.svg"
                            alt="flat-color-icons:rating"
                          />
                        }
                        shape="round"
                        color="deep_purple_A200"
                      >
                        <div className="leading-[normal] text-center text-sm">
                          4.9
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[214px] relative w-full">
                    <Img
                      className="h-[214px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle9.png"
                      alt="rectangleNine"
                    />
                    <Button
                      className="absolute cursor-pointer leading-[normal] left-[3%] min-w-[83px] text-center text-sm top-[3%]"
                      shape="round"
                    >
                      Creative
                    </Button>
                  </div>
                  <Text
                    className="mt-[17px] text-2xl md:text-[22px] text-center text-indigo-900_01 sm:text-xl"
                    size="txtLatoBold24"
                  >
                    {" "}
                    Web Development
                  </Text>
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[85%] md:w-full">
                    <Text
                      className="text-center text-gray-800 text-sm"
                      size="txtLatoRegular14Gray800"
                    >
                      <>
                        Creative Writing : Creative writing is
                        <br /> any writing that goes outside <br />
                        the bounds of normal professional{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_antdesignplaycirclefilled_deep_purple_a200.svg"
                        alt="antdesignplayci"
                      />
                      <Text
                        className="ml-2 text-[13px] text-center text-indigo-900_01"
                        size="txtLatoBold13"
                      >
                        12x Lessons
                      </Text>
                      <Button
                        className="border border-deep_purple-A200 border-solid cursor-pointer flex items-center justify-center min-w-[56px] ml-[75px] rounded-[9px]"
                        rightIcon={
                          <Img
                            className="h-[19px] ml-[3px]"
                            src="images/img_flatcoloriconsrating.svg"
                            alt="flat-color-icons:rating"
                          />
                        }
                        shape="round"
                        color="deep_purple_A200"
                      >
                        <div className="leading-[normal] text-center text-sm">
                          4.9
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[214px] relative w-full">
                    <Img
                      className="h-[214px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle12.png"
                      alt="rectangleTwelve"
                    />
                    <Button
                      className="absolute cursor-pointer leading-[normal] left-[3%] min-w-[83px] text-center text-sm top-[3%]"
                      shape="round"
                    >
                      Creative
                    </Button>
                  </div>
                  <Text
                    className="mt-[17px] text-2xl md:text-[22px] text-center text-indigo-900_01 sm:text-xl"
                    size="txtLatoBold24"
                  >
                    Graphic Design
                  </Text>
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[85%] md:w-full">
                    <Text
                      className="text-center text-gray-800 text-sm"
                      size="txtLatoRegular14Gray800"
                    >
                      <>
                        Creative Writing : Creative writing is
                        <br /> any writing that goes outside <br />
                        the bounds of normal professional{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_antdesignplaycirclefilled_deep_purple_a200.svg"
                        alt="antdesignplayci"
                      />
                      <Text
                        className="ml-2 text-[13px] text-center text-indigo-900_01"
                        size="txtLatoBold13"
                      >
                        12x Lessons
                      </Text>
                      <Button
                        className="border border-deep_purple-A200 border-solid cursor-pointer flex items-center justify-center min-w-[56px] ml-[75px] rounded-[9px]"
                        rightIcon={
                          <Img
                            className="h-[19px] ml-[3px]"
                            src="images/img_flatcoloriconsrating.svg"
                            alt="flat-color-icons:rating"
                          />
                        }
                        shape="round"
                        color="deep_purple_A200"
                      >
                        <div className="leading-[normal] text-center text-sm">
                          4.9
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <Button
              className="flex h-[25px] items-center justify-center mb-[219px] md:mt-0 mt-[107px] w-[25px]"
              shape="square"
              size="xs"
            >
              <Img
                className="h-[21px]"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </Button>
          </div>
          <div className="h-[1400px] sm:h-[1526px] md:h-[2388px] mt-[130px] md:px-5 relative w-full">
            <div className="absolute h-[1387px] sm:h-[1396px] md:h-[2258px] inset-[0] justify-center m-auto w-full">
              <div className="h-[1387px] sm:h-[1396px] md:h-[2258px] m-auto w-full">
                <div className="h-[1387px] sm:h-[1396px] md:h-[2258px] m-auto w-full">
                  <div className="h-[1387px] sm:h-[1396px] md:h-[2258px] m-auto w-full">
                    <div className="absolute flex flex-col gap-[37px] h-max inset-[0] justify-center m-auto w-full">
                      <div className="bg-deep_purple-A200 flex flex-col items-center justify-start p-[3px] w-full">
                        <div className="flex flex-col md:gap-10 gap-[63px] justify-start mb-[7px] mt-12 w-full">
                          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[94%] md:w-full">
                            <div className="border-[9px] border-solid border-white-A700_89 h-12 rounded-[50%] w-12"></div>
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                              size="txtLatoBlack48"
                            >
                              <>
                                Benifits from our online <br />
                                learning
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-end md:ml-[0] ml-[66px] w-[96%] md:w-full">
                            <Img
                              className="h-[248px] md:h-auto mb-[70px] md:mt-0 mt-[114px] rounded-[50%] w-[248px]"
                              src="images/img_ellipse9.png"
                              alt="ellipseNine"
                            />
                            <div className="flex flex-col gap-[53px] items-start justify-start mb-[82px] md:ml-[0] ml-[516px] md:mt-0 mt-[19px] w-[7%] md:w-full">
                              <div className="flex flex-col gap-[41px] items-start justify-start w-full">
                                <div className="bg-white-A700 flex flex-col items-center justify-end ml-1 md:ml-[0] p-[11px] rounded-[40px] w-20 md:w-full">
                                  <Img
                                    className="h-[50px] mt-[7px] w-[50px]"
                                    src="images/img_mdicertificate.svg"
                                    alt="mdicertificate"
                                  />
                                </div>
                                <div className="bg-white-A700 flex flex-col items-center justify-start p-[15px] rounded-[40px] w-[96%] md:w-full">
                                  <Img
                                    className="h-[45px] mb-[3px] w-[45px]"
                                    src="images/img_icbaselineplaylesson.svg"
                                    alt="icbaselineplayl"
                                  />
                                </div>
                              </div>
                              <div className="bg-white-A700 flex flex-col h-20 items-center justify-start p-[15px] rounded-[50%] w-20">
                                <Img
                                  className="h-[50px] w-[50px]"
                                  src="images/img_ggprofile.svg"
                                  alt="ggprofile"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[57px] w-[27%] md:w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtLatoBold24WhiteA700"
                              >
                                Online Degrees
                              </Text>
                              <Text
                                className="mt-[7px] text-sm text-white-A700 w-full"
                                size="txtLatoRegular14"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non enim
                              </Text>
                              <Text
                                className="mt-[49px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtLatoBold24WhiteA700"
                              >
                                Short courses
                              </Text>
                              <Text
                                className="mt-[9px] text-sm text-white-A700 w-[96%] sm:w-full"
                                size="txtLatoRegular14"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                              </Text>
                              <Text
                                className="mt-[52px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtLatoBold24WhiteA700"
                              >
                                Expert Traning
                              </Text>
                              <Text
                                className="mt-[3px] text-sm text-white-A700 w-[96%] sm:w-full"
                                size="txtLatoRegular14"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna,
                                porttitor
                              </Text>
                              <div className="flex flex-row gap-6 items-start justify-end md:ml-[0] ml-[265px] mt-4 w-[28%] md:w-full">
                                <div className="border-[9px] border-solid border-white-A700_89 h-12 mt-[23px] rounded-[50%] w-12"></div>
                                <div className="border-8 border-solid border-white-A700_89 h-[30px] rounded-[50%] w-[30px]"></div>
                              </div>
                            </div>
                            <div className="border-[9px] border-solid border-white-A700_89 h-[78px] mb-[66px] md:ml-[0] ml-[11px] md:mt-0 mt-72 rounded-[50%] w-[78px]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[639px] md:ml-[0] ml-[840px] relative w-[39%] sm:w-full">
                        <div className="border-[9px] border-deep_purple-A100 border-solid h-[116px] ml-auto mr-[152px] mt-[216px] rounded-[50%] w-[116px]"></div>
                        <div className="absolute h-[639px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="h-[639px] m-auto object-cover w-full"
                            src="images/img_maskgroup.png"
                            alt="maskgroup"
                          />
                          <div className="absolute flex flex-col gap-[21px] items-center justify-start right-[7%] top-[1%] w-[79%]">
                            <div className="flex flex-row items-start justify-between w-[53%] md:w-full">
                              <div className="border-[9px] border-deep_purple-A100 border-solid h-[60px] mb-9 rounded-[50%] w-[60px]"></div>
                              <div className="border-[9px] border-deep_purple-A100 border-solid h-10 mt-14 rounded-[50%] w-10"></div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="border-[9px] border-deep_purple-A100 border-solid h-[146px] mt-1.5 rounded-[50%] w-[146px]"></div>
                              <div className="border-[9px] border-deep_purple-A100 border-solid h-[88px] rounded-[50%] w-[88px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[366px] left-[15%] rounded-[50%] top-[0] w-[366px]"
                      src="images/img_ellipse8.png"
                      alt="ellipseEight"
                    />
                  </div>
                  <Img
                    className="absolute h-[292px] left-[17%] rounded-[50%] top-[33%] w-[292px]"
                    src="images/img_ellipse10.png"
                    alt="ellipseTen"
                  />
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[175px] justify-start left-[3%] top-[13%] w-[48%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[220px] md:h-auto mb-[43px] rounded-[50%] w-[220px]"
                      src="images/img_ellipse11.png"
                      alt="ellipseEleven"
                    />
                    <Img
                      className="h-[220px] md:h-auto sm:mt-0 mt-[43px] rounded-[50%] w-[220px]"
                      src="images/img_ellipse12.png"
                      alt="ellipseTwelve"
                    />
                  </div>
                  <Img
                    className="h-[156px] md:h-auto md:ml-[0] ml-[57px] rounded-[50%] w-[156px]"
                    src="images/img_ellipse15.png"
                    alt="ellipseFifteen"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[298px] left-[30%] rounded-[50%] top-[28%] w-[298px]"
                src="images/img_ellipse13.png"
                alt="ellipseThirteen"
              />
            </div>
            <div className="absolute bottom-[5%] flex flex-col md:gap-10 gap-[536px] justify-start left-[16%] w-[43%]">
              <div className="flex flex-row items-start justify-start md:ml-[0] ml-[86px] w-[26%] md:w-full">
                <Img
                  className="h-[71px] md:h-auto object-cover w-[89%]"
                  src="images/img_logo1.png"
                  alt="logoTwo"
                />
                <div className="bg-white-A700 h-[15px] mb-[51px] ml-[3px] mt-[5px] rounded-[7px] w-[15px]"></div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-900_01"
                  size="txtLatoBlack48Indigo90001"
                >
                  Become an Instructor
                </Text>
                <Text
                  className="mt-[39px] text-black-900 text-lg"
                  size="txtLatoRegular18"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elementum facilisis leo,
                    <br />
                    <br />
                    vel fringilla est ullamcorper eget nulla facilisi etiam
                    dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus in ornare quam viverra orci
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[252px] mt-[22px] rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl"
                  shape="round"
                  color="deep_purple_A200"
                  size="md"
                  variant="outline"
                >
                  Click Here to Apply
                </Button>
              </div>
            </div>
            <div className="absolute border-[9px] border-solid border-white-A700_89 h-[102px] left-[3%] rounded-[50%] top-[0] w-[102px]"></div>
            <Img
              className="absolute bottom-[39%] h-[196px] object-cover right-[0] w-[9%]"
              src="images/img_ellipse19.png"
              alt="ellipseNineteen"
            />
          </div>
          <Text
            className="md:ml-[0] mt-[165px] mx-[505px] text-5xl sm:text-[38px] md:text-[44px] text-indigo-900_01"
            size="txtLatoBlack48Indigo90001"
          >
            Student Testimonial
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[188px] mr-[98px] mt-[35px] md:px-5 w-[81%] md:w-full">
            <Img
              className="h-[114px] md:h-auto mb-[9px] md:mt-0 mt-[5px] rounded-[50%] w-[114px]"
              src="images/img_ellipse31.png"
              alt="ellipseThirtyOne"
            />
            <Text
              className="md:ml-[0] ml-[111px] text-black-900 text-center text-lg w-[54%] sm:w-full"
              size="txtLatoRegular18"
            >
              vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque fermentum dui faucibus in
              ornare quam viverra orci
            </Text>
            <Img
              className="h-[102px] md:h-auto md:ml-[0] ml-[214px] md:mt-0 mt-[26px] rounded-[50%] w-[102px]"
              src="images/img_ellipse33.png"
              alt="ellipseThirtyThree"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1283px] mt-4 mx-auto md:px-5 w-full">
            <Img
              className="h-[152px] md:h-auto md:mt-0 mt-[183px] rounded-[50%] w-[152px]"
              src="images/img_ellipse32.png"
              alt="ellipseThirtyTwo"
            />
            <div className="h-[197px] md:h-[334px] mb-[138px] md:ml-[0] ml-[214px] relative w-[46%] md:w-full">
              <div className="absolute bg-white-A700 border-4 border-deep_purple-A100 border-solid flex flex-col gap-3 h-full inset-y-[0] justify-center my-auto p-[9px] right-[0] rounded-[15px] shadow-bs">
                <Text
                  className="md:ml-[0] ml-[86px] mt-[31px] text-black-900 text-xl w-[83%] sm:w-full"
                  size="txtLatoRegular20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </Text>
                <Text
                  className="mb-3 md:ml-[0] ml-[365px] mr-2.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtLatoSemibold22"
                >
                  -Jeo Stanlee
                </Text>
              </div>
              <Img
                className="absolute h-[148px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[148px]"
                src="images/img_ellipse30.png"
                alt="ellipseThirty"
              />
            </div>
            <Img
              className="h-[68px] md:h-auto mb-[203px] md:ml-[0] ml-[47px] md:mt-0 mt-16 rounded-[50%] w-[68px]"
              src="images/img_ellipse35.png"
              alt="ellipseThirtyFive"
            />
            <Img
              className="h-[118px] md:h-auto md:ml-[0] ml-[99px] md:mt-0 mt-[217px] rounded-[50%] w-[118px]"
              src="images/img_ellipse34.png"
              alt="ellipseThirtyFour"
            />
          </div>
          <Img
            className="h-[68px] md:h-auto md:ml-[0] ml-[533px] mr-[839px] mt-[25px] rounded-[50%] w-[68px]"
            src="images/img_ellipse36.png"
            alt="ellipseThirtySix"
          />
          <div className="sm:h-[1012px] h-[1088px] md:h-[1376px] mt-[91px] pb-[68px] md:px-5 relative w-full">
            <footer
              className="absolute bg-cover bg-no-repeat flex md:flex-col md:gap-5 h-[921px] inset-[0] items-center justify-center m-auto w-full"
              style={{ backgroundImage: "url('images/img_group26.png')" }}
            >
              <div className="md:h-[1129px] h-[831px] sm:h-[855px] mb-6 md:mt-0 mt-[66px] relative w-full">
                <div className="flex flex-col md:gap-10 gap-[609px] h-full justify-start m-auto w-full">
                  <div className="flex flex-row items-start justify-start mr-[1262px] w-[13%] md:w-full">
                    <Img
                      className="h-12 md:h-auto mt-24 object-cover w-1/5"
                      src="images/img_ellipse39.png"
                      alt="ellipseThirtyNine"
                    />
                    <div className="border-8 border-solid border-white-A700_89 h-[30px] ml-6 mt-[73px] rounded-[50%] w-[30px]"></div>
                    <div className="border-[9px] border-solid border-white-A700_89 h-[78px] mb-[66px] ml-[11px] rounded-[50%] w-[78px]"></div>
                  </div>
                  <div className="flex flex-row gap-[38px] items-start justify-end md:ml-[0] ml-[1312px] w-[9%] md:w-full">
                    <div className="border-[9px] border-solid border-white-A700_89 h-12 mt-1.5 rounded-[50%] w-12"></div>
                    <Img
                      className="h-[78px] md:h-auto object-cover w-[33%]"
                      src="images/img_ellipse42.png"
                      alt="ellipseFortyTwo"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-[94%]">
                  <div className="border-[9px] border-solid border-white-A700_89 h-[196px] rounded-[50%] w-[196px]"></div>
                  <div className="flex md:flex-col flex-row gap-8 items-end justify-between ml-12 md:ml-[0] mt-[190px] w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-[23%] md:w-full">
                          <div className="flex flex-row items-start justify-start w-[54%] md:w-full">
                            <Img
                              className="h-[71px] md:h-auto object-cover w-[91%]"
                              src="images/img_logo1.png"
                              alt="logoThree"
                            />
                            <div className="bg-white-A700 h-3.5 mb-[52px] mt-[5px] rounded-[50%] w-3.5"></div>
                          </div>
                          <Text
                            className="ml-1.5 md:ml-[0] text-lg text-white-A700 w-[98%] sm:w-full"
                            size="txtLatoSemibold18"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor
                          </Text>
                          <div className="flex flex-row items-center justify-start w-[51%] md:w-full">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_antdesignbeha.svg"
                              alt="antdesignbeha"
                            />
                            <Img
                              className="h-[30px] ml-[26px] w-[30px]"
                              src="images/img_entyposociall.svg"
                              alt="entyposociall"
                            />
                            <Img
                              className="h-[30px] ml-[27px] w-[30px]"
                              src="images/img_facebook.svg"
                              alt="facebook"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start w-[73%] md:w-full">
                          <ul className="flex flex-row sm:gap-10 items-start justify-between w-[95%] md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              >
                                <Text size="txtLatoHeavy24WhiteA700">
                                  Company
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              >
                                <Text size="txtLatoHeavy24WhiteA700">
                                  Support
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              >
                                <Text size="txtLatoHeavy24WhiteA700">
                                  Links
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              >
                                <Text size="txtLatoHeavy24WhiteA700">
                                  Contact Us
                                </Text>
                              </a>
                            </li>
                          </ul>
                          <ul className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="sm:mt-0 mt-2 text-lg text-white-A700"
                              >
                                <Text size="txtLatoBold18">
                                  <>
                                    About Us
                                    <br />
                                    <br />
                                    Services
                                    <br />
                                    <br />
                                    Community
                                    <br />
                                    <br />
                                    Testimonial
                                  </>
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="sm:ml-[0] ml-[171px] sm:mt-0 mt-2 text-lg text-white-A700"
                              >
                                <Text size="txtLatoBold18">
                                  <>
                                    Help Center
                                    <br />
                                    <br />
                                    Tweet @ Us
                                    <br />
                                    <br />
                                    Webians
                                    <br />
                                    <br />
                                    Feedback
                                  </>
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="sm:ml-[0] ml-[150px] sm:mt-0 mt-2 text-lg text-white-A700"
                              >
                                <Text size="txtLatoBold18">
                                  <>
                                    Courses
                                    <br />
                                    <br />
                                    Become Teacher
                                    <br />
                                    <br />
                                    Service
                                    <br />
                                    <br />
                                    All in One
                                  </>
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="sm:ml-[0] ml-[90px] text-lg text-white-A700"
                              >
                                <Text size="txtLatoBold18">
                                  <>
                                    (91) 98765 4321 54
                                    <br />
                                    <br />
                                    support@mail.com
                                  </>
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-8 border-solid border-white-A700_89 h-[30px] md:mt-0 mt-[233px] rounded-[50%] w-[30px]"></div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[482px] mt-[70px] text-lg text-white-A700"
                    size="txtLatoBold18"
                  >
                    Copyright 2020 All rights Reserved . Null
                  </Text>
                </div>
              </div>
              <Img
                className="h-[23px] mb-6 md:ml-[0] ml-[630px] mr-[787px] md:mt-0 mt-[874px] w-[23px]"
                src="images/img_antdesigncopy.svg"
                alt="antdesigncopy"
              />
              <Line className="bg-white-A700 h-px mb-[68px] md:ml-[0] md:mt-0 mt-[852px] mx-[395px] rotate-[-180deg] w-[46%]" />
            </footer>
            <div className="absolute bg-white-A700 border-2 border-deep_purple-A200 border-solid flex flex-col inset-x-[0] justify-start mx-auto p-[31px] sm:px-5 rounded-[20px] top-[0] w-[55%]">
              <Text
                className="ml-36 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-indigo-900_01"
                size="txtLatoBlack48Indigo90001"
              >
                Get Started Now!
              </Text>
              <Text
                className="mt-[35px] mx-auto text-black-900 text-center text-lg w-[86%] sm:w-full"
                size="txtLatoRegular18"
              >
                vel fringilla est ullamcorper eget nulla facilisi etiam
                dignissim diam quis enim lobortis scelerisque fermentum dui
                faucibus in ornare quam viverra orci
              </Text>
              <div className="flex flex-col gap-[37px] items-center justify-start mb-[19px] md:ml-[0] ml-[168px] mt-3.5 w-[53%] md:w-full">
                <Button
                  className="!text-gray-400 border border-deep_purple-A200_02 border-solid cursor-pointer font-semibold leading-[normal] min-w-[381px] sm:min-w-full rounded-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
                  size="lg"
                >
                  Full name
                </Button>
                <Button
                  className="!text-gray-400 border border-deep_purple-A200_02 border-solid cursor-pointer font-semibold leading-[normal] min-w-[381px] sm:min-w-full rounded-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
                  size="lg"
                >
                  E-Mail
                </Button>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[213px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="deep_purple_A200"
                  size="md"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
