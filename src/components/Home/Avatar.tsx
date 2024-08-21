import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import logoDark from "assets/images/sxnd-dark.png";
import React from "react";
import logoLight from "assets/images/sxnd-light.png";

function Avatar() {
  return (
    <Menubar className={`border-0 mr-4`}>
      <MenubarMenu>
        <MenubarTrigger className={`rounded-full p-0`}>
          <Image className={`p-0 block dark:hidden`} width={40} src={logoDark} alt={"logoDark"} />
          <Image className={`p-0 hidden dark:block`} width={40} src={logoLight} alt={"logoLight"} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Your Account</MenubarItem>
          <MenubarItem>Profile</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Upgrade to premium</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sign out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Avatar;
