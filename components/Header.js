import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <>
      <header className="header__nav">
        <div className="icon__group">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TREMDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
          className="logo__img"
          src="https://links.papareact.com/ua6"
          alt="logo-img"
          width={160}
          height={80}
        />
      </header>
    </>
  );
}

export default Header;
