// import Image from "next/image";

// import React from "react";
// import { useFormContext } from "react-hook-form";

// import NavFooter from "@/components/NavFooter";
// import SHLabel from "@/components/base/SHLabel";
// import HStack from "@/components/base/stack/HStack";
// import VStack from "@/components/base/stack/VStack";
// import { cn } from "@/lib/utils";

// import { CharmCreateSchemaType } from "../_utils/CharmCreateSchema";

// interface CharmImageAdditionProps {
//   charmImageURL: string;
//   goBack: VoidFunction;
//   onNext: VoidFunction;
// }

// export default function CharmCheerAddition({
//   goBack,
//   onNext,
//   charmImageURL,
// }: CharmImageAdditionProps) {
//   const {
//     register,
//     getValues,
//     formState: { errors },
//   } = useFormContext<CharmCreateSchemaType>();

//   //   const handleClickNext = async () => {
//   //     const isValid = await trigger("cheers");
//   //     if (isValid) {
//   //       onClickSubmit();
//   //     }
//   //   };

//   const senderName = getValues("sender");

//   console.log("senderName", senderName);

//   return (
//     <>
//       <VStack className="min-h-screen mx-[20px] flex flex-col items-center justify-center text-center ">
//         {/* Header */}
//         <HStack className="mt-24 h-[60px]  items-end justify-between">
//           <VStack>
//             <SHLabel className="text-base font-bold text-white">
//               행운을 담은 마음을 적어주세요.
//             </SHLabel>
//             <SHLabel className="text-[13px] font-medium text-white">
//               24자 이내로 적을 수 있어요.
//             </SHLabel>
//           </VStack>
//         </HStack>
//         <figure className="relative my-7 h-[312px] w-[200px]">
//           <Image
//             src={charmImageURL}
//             fill={true}
//             className={cn("h-auto w-auto object-cover transition-all hover:scale-105")}
//             alt="Picture of the charm"
//           />
//           <div className="absolute left-[20%] right-[20%] top-[8%] z-20 text-black">
//             {senderName}
//           </div>
//           <textarea
//             {...register("cheers")}
//             className="absolute left-[15%] right-[15%] top-2/3 max-w-36 border-none bg-transparent text-center text-sm font-semibold"
//             defaultValue={"입력해"}
//           />
//           {errors.cheers && (
//             <div className="absolute left-[15%] right-[15%] top-[90%] text-red-500">
//               {errors.cheers.message}
//             </div>
//           )}
//         </figure>
//       </VStack>
//       <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
//         <VStack className="mx-[20px] mt-[80px]">
//           <NavFooter
//             ratio="1:3"
//             left={{
//               title: "이전",
//               onClick: goBack,
//             }}
//             right={{
//               title: "다음",
//               onClick: onNext,
//             }}
//           />
//         </VStack>
//       </VStack>
//     </>
//   );
// }
