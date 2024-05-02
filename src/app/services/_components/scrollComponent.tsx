// "use client";
// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import Image from "next/image";
// import { Card, CardContent, CardDescription } from "@/components/ui/card";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   ParallaxComponent,
//   ParallaxComponent2,
// } from "@/app/about/_components/parallax.component";

// export default function scrollComponent() {
//   return (
//     <Tabs defaultValue="1" className=" ">
//       <ScrollArea>
//         <center>
//           <TabsList>
//             <TabsTrigger value="1">Gallardo</TabsTrigger>
//             <TabsTrigger value="2">Aventador</TabsTrigger>
//             <TabsTrigger value="3">Other</TabsTrigger>
//             <TabsTrigger value="4">Another</TabsTrigger>
//             <TabsTrigger value="5">More</TabsTrigger>
//           </TabsList>
//         </center>
//         <ScrollBar orientation="horizontal" />
//       </ScrollArea>
//       <TabsContent value="1">
//         <div className="grid-car-product">
//           <div className="grid-car-product-item">
//             <ParallaxComponent />
//           </div>
//           <div className="spec grid-car-product-item">
//             <div className="font-bold">Specification :</div>
//             <div className="grid-spec-section">
//               <div className="grid-spec-items">
//                 <div className="font-bold text-[14px] pt-2">Engine :</div>
//                 <ul className="list-disc text-[12px] pl-3">
//                   <li>Type: V10</li>
//                   <li>Displacement: 5.2 liters</li>
//                   <li>Power: 560 hp</li>
//                   <li>Torque: 540 Nm</li>
//                   <li>Fuel Injection: Direct Injection</li>
//                 </ul>
//               </div>
//               <div className="grid-spec-items">
//                 <div className="font-bold text-[14px] pt-2">Transmission:</div>
//                 <ul className="list-disc text-[12px] pl-3">
//                   <li>Type: 6-speed automatic/manual</li>
//                   <li>Drivetrain: AWD (All Wheel Drive)</li>
//                 </ul>
//               </div>
//               <div className="grid-spec-items">
//                 <div className="font-bold text-[14px] pt-2">Performance:</div>
//                 <ul className="list-disc text-[12px] pl-3">
//                   <li>Top Speed: 325 km/h</li>
//                   <li>0-100 km/h: Less than 3.7 seconds</li>
//                 </ul>
//               </div>
//               <div className="grid-spec-items">
//                 <div className="font-bold text-[14px] pt-2">Performance:</div>
//                 <ul className="list-disc text-[12px] pl-3">
//                   <li>Top Speed: 325 km/h</li>
//                   <li>0-100 km/h: Less than 3.7 seconds</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </TabsContent>
//       <TabsContent value="2">Other content here.</TabsContent>
//       <TabsContent value="3">Another content here.</TabsContent>
//       <TabsContent value="4">More content here.</TabsContent>
//       <TabsContent value="5">Settings content here.</TabsContent>
//     </Tabs>
//   );
// }
